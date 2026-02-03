import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, ArrowRight, Home, QrCode } from "lucide-react";
import type { OrderData } from "@/pages/Order";

interface ConfirmationProps {
  orderId: string;
  orderData: OrderData;
}

const Confirmation = ({ orderId, orderData }: ConfirmationProps) => {
  return (
    <div className="space-y-6">
      {/* Success Header */}
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle className="h-12 w-12 text-accent" />
        </div>
        <h1 className="text-display-sm mb-2 text-accent">Order Confirmed!</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase. Your QR tag is ready.
        </p>
      </div>

      {/* Order Details Card */}
      <Card>
        <CardContent className="p-6">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="text-lg font-bold">{orderId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Status</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {orderData.deliveryType === "digital" ? "Ready" : "Processing"}
              </span>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">QR Type</span>
              <span className="font-medium capitalize">{orderData.qrType} QR Tag</span>
            </div>
            {orderData.vehicleNumber && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vehicle</span>
                <span className="font-medium">{orderData.vehicleNumber}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Owner</span>
              <span className="font-medium">{orderData.ownerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-medium capitalize">{orderData.deliveryType}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* QR Preview */}
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <h3 className="mb-4 text-center font-semibold">Your QR Code Preview</h3>
          
          {/* Mock QR Code */}
          <div className="mx-auto flex flex-col items-center">
            <div className="relative mb-4 rounded-2xl border-4 border-primary/20 bg-white p-6">
              {/* QR Pattern */}
              <div className="grid h-40 w-40 grid-cols-8 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      Math.random() > 0.35 ? "bg-foreground" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-md">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>

            <p className="mb-2 text-sm font-medium text-foreground">
              {orderData.vehicleNumber || orderData.ownerName}'s Emergency QR
            </p>
            <p className="text-xs text-muted-foreground">
              Scan to contact emergency contacts
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Download Button */}
      <Button className="w-full gap-2 bg-gradient-primary shadow-primary h-12 text-base">
        <Download className="h-4 w-4" />
        Download QR Code
      </Button>

      {/* Next Steps */}
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-6">
          <h3 className="mb-4 font-semibold text-accent">Next Steps</h3>
          <ul className="space-y-3 text-sm">
            {orderData.deliveryType === "digital" ? (
              <>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    1
                  </span>
                  <span>Check your WhatsApp and Email for the QR code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    2
                  </span>
                  <span>Print the QR code or save it for later</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    3
                  </span>
                  <span>Stick it on your {orderData.qrType} in a visible location</span>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    1
                  </span>
                  <span>Your QR tag will be shipped within 1-2 business days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    2
                  </span>
                  <span>You'll receive tracking details via SMS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    3
                  </span>
                  <span>Estimated delivery: 3-5 business days</span>
                </li>
              </>
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link to="/">
          <Button variant="outline" className="w-full gap-2 sm:w-auto">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button className="w-full gap-2 sm:w-auto">
            Track Order
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
