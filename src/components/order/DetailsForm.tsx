import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import type { OrderData } from "@/pages/Order";

interface DetailsFormProps {
  orderData: OrderData;
  onUpdate: (data: Partial<OrderData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const DetailsForm = ({ orderData, onUpdate, onNext, onBack }: DetailsFormProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isVehicle = orderData.qrType === "bike" || orderData.qrType === "car";

  const handleVerifyVehicle = async () => {
    if (!orderData.vehicleNumber) {
      setErrors({ vehicleNumber: "Please enter a vehicle number" });
      return;
    }

    setIsVerifying(true);
    setErrors({});

    // Mock verification delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsVerifying(false);
    setIsVerified(true);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (isVehicle && !orderData.vehicleNumber) {
      newErrors.vehicleNumber = "Vehicle number is required";
    }

    if (!orderData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required";
    }

    if (!orderData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!orderData.contact1.name.trim()) {
      newErrors.contact1Name = "Contact 1 name is required";
    }

    if (!orderData.contact1.phone.trim()) {
      newErrors.contact1Phone = "Contact 1 phone is required";
    } else if (!/^\d{10}$/.test(orderData.contact1.phone)) {
      newErrors.contact1Phone = "Enter a valid 10-digit phone number";
    }

    if (!orderData.contact2.name.trim()) {
      newErrors.contact2Name = "Contact 2 name is required";
    }

    if (!orderData.contact2.phone.trim()) {
      newErrors.contact2Phone = "Contact 2 phone is required";
    } else if (!/^\d{10}$/.test(orderData.contact2.phone)) {
      newErrors.contact2Phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-display-sm mb-2">Enter Details</h1>
        <p className="text-muted-foreground">
          {isVehicle
            ? "Provide your vehicle and emergency contact information"
            : "Provide your property and emergency contact information"}
        </p>
      </div>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>
            {isVehicle ? "Vehicle Information" : "Property Information"}
          </CardTitle>
          <CardDescription>
            {isVehicle
              ? "This information will help identify your vehicle"
              : "This information will help identify your property"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Vehicle Number (for bike/car) */}
          {isVehicle && (
            <div className="space-y-2">
              <Label htmlFor="vehicleNumber">Vehicle Registration Number</Label>
              <div className="flex gap-2">
                <Input
                  id="vehicleNumber"
                  placeholder="KA-01-AB-1234"
                  value={orderData.vehicleNumber || ""}
                  onChange={(e) => {
                    onUpdate({ vehicleNumber: e.target.value.toUpperCase() });
                    setIsVerified(false);
                  }}
                  className={`flex-1 uppercase ${errors.vehicleNumber ? "border-destructive" : ""}`}
                />
                <Button
                  type="button"
                  variant={isVerified ? "outline" : "secondary"}
                  onClick={handleVerifyVehicle}
                  disabled={isVerifying || isVerified}
                  className="shrink-0"
                >
                  {isVerifying ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : isVerified ? (
                    <>
                      <CheckCircle className="mr-1 h-4 w-4 text-accent" />
                      Verified
                    </>
                  ) : (
                    "Verify"
                  )}
                </Button>
              </div>
              {errors.vehicleNumber && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.vehicleNumber}
                </p>
              )}
            </div>
          )}

          {/* Owner Name */}
          <div className="space-y-2">
            <Label htmlFor="ownerName">Owner Name</Label>
            <Input
              id="ownerName"
              placeholder="Enter full name"
              value={orderData.ownerName}
              onChange={(e) => onUpdate({ ownerName: e.target.value })}
              className={errors.ownerName ? "border-destructive" : ""}
            />
            {errors.ownerName && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.ownerName}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">
              {isVehicle ? "Owner Address" : "Property Address"}
            </Label>
            <Input
              id="address"
              placeholder="Enter complete address"
              value={orderData.address}
              onChange={(e) => onUpdate({ address: e.target.value })}
              className={errors.address ? "border-destructive" : ""}
            />
            {errors.address && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.address}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
          <CardDescription>
            These contacts will be reachable when someone scans your QR code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contact 1 */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">
              Emergency Contact 1 (Primary)
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact1Name">Name</Label>
                <Input
                  id="contact1Name"
                  placeholder="Contact name"
                  value={orderData.contact1.name}
                  onChange={(e) =>
                    onUpdate({
                      contact1: { ...orderData.contact1, name: e.target.value },
                    })
                  }
                  className={errors.contact1Name ? "border-destructive" : ""}
                />
                {errors.contact1Name && (
                  <p className="text-sm text-destructive">{errors.contact1Name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact1Phone">Phone Number</Label>
                <Input
                  id="contact1Phone"
                  type="tel"
                  placeholder="10-digit number"
                  value={orderData.contact1.phone}
                  onChange={(e) =>
                    onUpdate({
                      contact1: {
                        ...orderData.contact1,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      },
                    })
                  }
                  className={errors.contact1Phone ? "border-destructive" : ""}
                />
                {errors.contact1Phone && (
                  <p className="text-sm text-destructive">{errors.contact1Phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact 2 */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">
              Emergency Contact 2 (Backup)
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact2Name">Name</Label>
                <Input
                  id="contact2Name"
                  placeholder="Contact name"
                  value={orderData.contact2.name}
                  onChange={(e) =>
                    onUpdate({
                      contact2: { ...orderData.contact2, name: e.target.value },
                    })
                  }
                  className={errors.contact2Name ? "border-destructive" : ""}
                />
                {errors.contact2Name && (
                  <p className="text-sm text-destructive">{errors.contact2Name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact2Phone">Phone Number</Label>
                <Input
                  id="contact2Phone"
                  type="tel"
                  placeholder="10-digit number"
                  value={orderData.contact2.phone}
                  onChange={(e) =>
                    onUpdate({
                      contact2: {
                        ...orderData.contact2,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      },
                    })
                  }
                  className={errors.contact2Phone ? "border-destructive" : ""}
                />
                {errors.contact2Phone && (
                  <p className="text-sm text-destructive">{errors.contact2Phone}</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleSubmit} className="gap-2 bg-gradient-primary shadow-primary">
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DetailsForm;
