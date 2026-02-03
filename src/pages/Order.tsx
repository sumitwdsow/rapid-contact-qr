import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrderProgress from "@/components/order/OrderProgress";
import SelectQRType from "@/components/order/SelectQRType";
import DetailsForm from "@/components/order/DetailsForm";
import DeliveryOptions from "@/components/order/DeliveryOptions";
import Checkout from "@/components/order/Checkout";
import Confirmation from "@/components/order/Confirmation";

export type QRType = "bike" | "car" | "home";
export type DeliveryType = "digital" | "physical";

export interface EmergencyContact {
  name: string;
  phone: string;
}

export interface OrderData {
  qrType: QRType | null;
  // Vehicle/Home details
  vehicleNumber?: string;
  ownerName: string;
  address: string;
  // Emergency contacts
  contact1: EmergencyContact;
  contact2: EmergencyContact;
  // Delivery
  deliveryType: DeliveryType;
  // Digital delivery
  whatsappNumber?: string;
  email?: string;
  // Physical delivery
  deliveryAddress?: string;
  pincode?: string;
  city?: string;
  state?: string;
}

const initialOrderData: OrderData = {
  qrType: null,
  ownerName: "",
  address: "",
  contact1: { name: "", phone: "" },
  contact2: { name: "", phone: "" },
  deliveryType: "digital",
};

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Order = () => {
  const [searchParams] = useSearchParams();
  const preselectedType = searchParams.get("type") as QRType | null;

  const [step, setStep] = useState(preselectedType ? 2 : 1);
  const [orderData, setOrderData] = useState<OrderData>({
    ...initialOrderData,
    qrType: preselectedType,
  });
  const [orderId, setOrderId] = useState<string | null>(null);

  const steps = [
    { number: 1, title: "Select Type" },
    { number: 2, title: "Enter Details" },
    { number: 3, title: "Delivery" },
    { number: 4, title: "Payment" },
    { number: 5, title: "Done" },
  ];

  const updateOrderData = (data: Partial<OrderData>) => {
    setOrderData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handlePaymentSuccess = (id: string) => {
    setOrderId(id);
    nextStep();
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <Header />
      <main className="flex-1 py-6 md:py-10">
        <div className="container max-w-3xl">
          {/* Progress Indicator */}
          {step < 5 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <OrderProgress steps={steps} currentStep={step} />
            </motion.div>
          )}

          {/* Step Content */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <SelectQRType
                    selectedType={orderData.qrType}
                    onSelect={(type) => {
                      updateOrderData({ qrType: type });
                      nextStep();
                    }}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <DetailsForm
                    orderData={orderData}
                    onUpdate={updateOrderData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <DeliveryOptions
                    orderData={orderData}
                    onUpdate={updateOrderData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step-4"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Checkout
                    orderData={orderData}
                    onSuccess={handlePaymentSuccess}
                    onBack={prevStep}
                  />
                </motion.div>
              )}

              {step === 5 && orderId && (
                <motion.div
                  key="step-5"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Confirmation orderId={orderId} orderData={orderData} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Order;
