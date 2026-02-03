import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CreditCard, Smartphone, Building, Wallet, Lock, Loader2 } from "lucide-react";
import type { OrderData } from "@/pages/Order";

interface CheckoutProps {
  orderData: OrderData;
  onSuccess: (orderId: string) => void;
  onBack: () => void;
}

const Checkout = ({ orderData, onSuccess, onBack }: CheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const getBasePrice = () => {
    return orderData.qrType === "bike" ? 149 : orderData.qrType === "car" ? 199 : 249;
  };

  const getShippingCost = () => {
    return orderData.deliveryType === "physical" ? 50 : 0;
  };

  const getGST = () => {
    return Math.round((getBasePrice() + getShippingCost()) * 0.18);
  };

  const getTotalPrice = () => {
    return getBasePrice() + getShippingCost() + getGST();
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Generate mock order ID
    const orderId = `EC${Date.now().toString().slice(-8)}`;
    
    setIsProcessing(false);
    onSuccess(orderId);
  };

  const paymentMethods = [
    { icon: Smartphone, label: "UPI", description: "GPay, PhonePe, Paytm" },
    { icon: CreditCard, label: "Cards", description: "Credit & Debit Cards" },
    { icon: Building, label: "Net Banking", description: "All major banks" },
    { icon: Wallet, label: "Wallets", description: "Paytm, Amazon Pay" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-display-sm mb-2">Complete Payment</h1>
        <p className="text-muted-foreground">
          Secure payment powered by Razorpay
        </p>
      </div>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          <CardDescription>Review your order before payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Order Details */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">QR Type</span>
              <span className="font-medium capitalize">{orderData.qrType} QR Tag</span>
            </div>
            {orderData.vehicleNumber && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vehicle Number</span>
                <span className="font-medium">{orderData.vehicleNumber}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Owner Name</span>
              <span className="font-medium">{orderData.ownerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Type</span>
              <span className="font-medium capitalize">{orderData.deliveryType}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Price Breakdown */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">QR Tag Price</span>
              <span>₹{getBasePrice()}</span>
            </div>
            {getShippingCost() > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>₹{getShippingCost()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">GST (18%)</span>
              <span>₹{getGST()}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Total */}
          <div className="flex justify-between text-lg font-bold">
            <span>Total Amount</span>
            <span className="text-primary">₹{getTotalPrice()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods Info */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>All major payment options supported</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border border-border bg-muted/50 p-4 text-center"
                >
                  <Icon className="mb-2 h-6 w-6 text-primary" />
                  <p className="text-sm font-medium">{method.label}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Security Note */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        <span>256-bit SSL encrypted • Secure payment</span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Button variant="outline" onClick={onBack} disabled={isProcessing} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          className="gap-2 bg-gradient-primary shadow-primary h-12 px-8 text-base font-semibold"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="h-4 w-4" />
              Pay ₹{getTotalPrice()}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
