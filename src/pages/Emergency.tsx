import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertTriangle, Shield, MapPin, User, Car, Bike, Home as HomeIcon } from "lucide-react";

// Mock emergency data - in real app this would come from database based on QR ID
const mockEmergencyData = {
  type: "car",
  vehicleNumber: "KA-01-AB-1234",
  ownerFirstName: "Rahul",
  contacts: [
    { name: "Emergency Contact 1", phone: "+919876543210" },
    { name: "Emergency Contact 2", phone: "+919876543211" },
  ],
};

const Emergency = () => {
  const [searchParams] = useSearchParams();
  const qrId = searchParams.get("id") || "DEMO";
  const [isReporting, setIsReporting] = useState(false);

  const data = mockEmergencyData;

  const getTypeIcon = () => {
    switch (data.type) {
      case "bike":
        return <Bike className="h-6 w-6" />;
      case "car":
        return <Car className="h-6 w-6" />;
      case "home":
        return <HomeIcon className="h-6 w-6" />;
      default:
        return <Car className="h-6 w-6" />;
    }
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleReportEmergency = () => {
    setIsReporting(true);
    // In real app, this would trigger an alert to the owner
    setTimeout(() => {
      setIsReporting(false);
      alert("Emergency reported! The owner has been notified.");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      {/* Emergency Banner */}
      <div className="bg-destructive px-4 py-3 text-center text-destructive-foreground">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold">Emergency Contact Page</span>
        </div>
      </div>

      <main className="flex flex-1 flex-col items-center justify-center p-4 py-8">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              {getTypeIcon()}
            </div>
            <h1 className="text-2xl font-bold">Emergency Contact</h1>
            <p className="text-muted-foreground">
              Contact the owner of this {data.type}
            </p>
          </div>

          {/* Vehicle/Property Details */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {data.vehicleNumber && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      {getTypeIcon()}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {data.type === "home" ? "Property" : "Vehicle"} Number
                      </p>
                      <p className="text-lg font-bold">{data.vehicleNumber}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Owner</p>
                    <p className="text-lg font-semibold">{data.ownerFirstName}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact Buttons */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-primary" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                Tap to call the owner's emergency contacts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {data.contacts.map((contact, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-14 w-full justify-start gap-4 text-left"
                  onClick={() => handleCall(contact.phone)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">Tap to call</p>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Report Emergency Button */}
          <Button
            variant="destructive"
            className="h-14 w-full gap-2 text-base"
            onClick={handleReportEmergency}
            disabled={isReporting}
          >
            <AlertTriangle className="h-5 w-5" />
            {isReporting ? "Reporting..." : "Report Emergency"}
          </Button>

          {/* Privacy Note */}
          <div className="rounded-xl bg-muted p-4">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 text-accent" />
              <div className="text-sm">
                <p className="font-medium text-foreground">Privacy Protected</p>
                <p className="text-muted-foreground">
                  Personal phone numbers are hidden for privacy. Your call will be
                  connected securely.
                </p>
              </div>
            </div>
          </div>

          {/* Powered By */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Powered by{" "}
              <Link to="/" className="font-medium text-primary hover:underline">
                callowner.me
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
