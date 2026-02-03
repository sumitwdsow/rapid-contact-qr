import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, Smartphone, Package, Zap, Truck, AlertCircle } from "lucide-react";
import type { OrderData, DeliveryType } from "@/pages/Order";

interface DeliveryOptionsProps {
  orderData: OrderData;
  onUpdate: (data: Partial<OrderData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const DeliveryOptions = ({ orderData, onUpdate, onNext, onBack }: DeliveryOptionsProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (orderData.deliveryType === "digital") {
      if (!orderData.whatsappNumber?.trim()) {
        newErrors.whatsappNumber = "WhatsApp number is required";
      } else if (!/^\d{10}$/.test(orderData.whatsappNumber)) {
        newErrors.whatsappNumber = "Enter a valid 10-digit number";
      }

      if (!orderData.email?.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orderData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    } else {
      if (!orderData.deliveryAddress?.trim()) {
        newErrors.deliveryAddress = "Delivery address is required";
      }
      if (!orderData.pincode?.trim()) {
        newErrors.pincode = "Pincode is required";
      } else if (!/^\d{6}$/.test(orderData.pincode)) {
        newErrors.pincode = "Enter a valid 6-digit pincode";
      }
      if (!orderData.city?.trim()) {
        newErrors.city = "City is required";
      }
      if (!orderData.state?.trim()) {
        newErrors.state = "State is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const getPrice = () => {
    const basePrice = orderData.qrType === "bike" ? 149 : orderData.qrType === "car" ? 199 : 249;
    const physicalExtra = orderData.deliveryType === "physical" ? 50 : 0;
    return basePrice + physicalExtra;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-display-sm mb-2">Delivery Options</h1>
        <p className="text-muted-foreground">
          Choose how you'd like to receive your QR tag
        </p>
      </div>

      {/* Delivery Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Delivery Type</CardTitle>
          <CardDescription>
            Select between instant digital delivery or physical QR tag
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={orderData.deliveryType}
            onValueChange={(value: DeliveryType) => onUpdate({ deliveryType: value })}
            className="grid gap-4 md:grid-cols-2"
          >
            {/* Digital Option */}
            <div>
              <RadioGroupItem
                value="digital"
                id="digital"
                className="peer sr-only"
              />
              <Label
                htmlFor="digital"
                className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-muted bg-popover p-6 hover:bg-accent/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Smartphone className="h-7 w-7" />
                </div>
                <h3 className="mb-1 font-semibold">Digital QR</h3>
                <p className="mb-3 text-center text-sm text-muted-foreground">
                  Receive via WhatsApp & Email
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <Zap className="h-4 w-4" />
                  Instant Delivery
                </div>
              </Label>
            </div>

            {/* Physical Option */}
            <div>
              <RadioGroupItem
                value="physical"
                id="physical"
                className="peer sr-only"
              />
              <Label
                htmlFor="physical"
                className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-muted bg-popover p-6 hover:bg-accent/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="mb-1 font-semibold">Physical Tag</h3>
                <p className="mb-3 text-center text-sm text-muted-foreground">
                  Premium weatherproof sticker
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  3-5 days delivery (+₹50)
                </div>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Delivery Details Form */}
      <Card>
        <CardHeader>
          <CardTitle>
            {orderData.deliveryType === "digital" ? "Digital Delivery Details" : "Shipping Address"}
          </CardTitle>
          <CardDescription>
            {orderData.deliveryType === "digital"
              ? "We'll send your QR code to these contacts instantly"
              : "Where should we ship your physical QR tag?"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {orderData.deliveryType === "digital" ? (
            <>
              {/* WhatsApp Number */}
              <div className="space-y-2">
                <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                <div className="flex">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                    +91
                  </span>
                  <Input
                    id="whatsappNumber"
                    type="tel"
                    placeholder="10-digit number"
                    value={orderData.whatsappNumber || ""}
                    onChange={(e) =>
                      onUpdate({
                        whatsappNumber: e.target.value.replace(/\D/g, "").slice(0, 10),
                      })
                    }
                    className={`rounded-l-none ${errors.whatsappNumber ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.whatsappNumber && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.whatsappNumber}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={orderData.email || ""}
                  onChange={(e) => onUpdate({ email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Instant delivery note */}
              <div className="rounded-lg bg-accent/10 p-4 text-sm">
                <p className="flex items-center gap-2 font-medium text-accent">
                  <Zap className="h-4 w-4" />
                  Instant Delivery
                </p>
                <p className="mt-1 text-muted-foreground">
                  You'll receive your QR code on WhatsApp and Email within minutes of payment.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Delivery Address */}
              <div className="space-y-2">
                <Label htmlFor="deliveryAddress">Full Address</Label>
                <Input
                  id="deliveryAddress"
                  placeholder="House/Flat No., Street, Landmark"
                  value={orderData.deliveryAddress || ""}
                  onChange={(e) => onUpdate({ deliveryAddress: e.target.value })}
                  className={errors.deliveryAddress ? "border-destructive" : ""}
                />
                {errors.deliveryAddress && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.deliveryAddress}
                  </p>
                )}
              </div>

              {/* City, State, Pincode */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={orderData.city || ""}
                    onChange={(e) => onUpdate({ city: e.target.value })}
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="State"
                    value={orderData.state || ""}
                    onChange={(e) => onUpdate({ state: e.target.value })}
                    className={errors.state ? "border-destructive" : ""}
                  />
                  {errors.state && (
                    <p className="text-sm text-destructive">{errors.state}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    placeholder="6-digit"
                    value={orderData.pincode || ""}
                    onChange={(e) =>
                      onUpdate({ pincode: e.target.value.replace(/\D/g, "").slice(0, 6) })
                    }
                    className={errors.pincode ? "border-destructive" : ""}
                  />
                  {errors.pincode && (
                    <p className="text-sm text-destructive">{errors.pincode}</p>
                  )}
                </div>
              </div>

              {/* Shipping note */}
              <div className="rounded-lg bg-muted p-4 text-sm">
                <p className="flex items-center gap-2 font-medium">
                  <Truck className="h-4 w-4 text-primary" />
                  Estimated Delivery: 3-5 Business Days
                </p>
                <p className="mt-1 text-muted-foreground">
                  Free shipping on orders above ₹499. Tracking details will be shared via SMS.
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Price Summary */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Order Total</span>
          <span className="text-xl font-bold">₹{getPrice()}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleSubmit} className="gap-2 bg-gradient-primary shadow-primary">
          Continue to Payment
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DeliveryOptions;
