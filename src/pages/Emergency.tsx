import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  AlertTriangle,
  Shield,
  User,
  Car,
  Bike,
  Home as HomeIcon,
  Bell,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";

// Mock emergency data - in real app this would come from database based on QR ID
const mockEmergencyData = {
  type: "car",
  vehicleNumber: "KA-01-AB-1234",
  ownerFirstName: "Rahul",
  primaryPhone: "+919876543210",
  contacts: [
    { name: "Family Member", phone: "+919876543211", relation: "family" },
    { name: "Neighbor", phone: "+919876543212", relation: "neighbor" },
  ],
};

const Emergency = () => {
  const [searchParams] = useSearchParams();
  const qrId = searchParams.get("id") || "DEMO";
  const [isNotifying, setIsNotifying] = useState(false);
  const [notified, setNotified] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const data = mockEmergencyData;

  const getTypeIcon = (size = "h-6 w-6") => {
    switch (data.type) {
      case "bike":
        return <Bike className={size} />;
      case "car":
        return <Car className={size} />;
      case "home":
        return <HomeIcon className={size} />;
      default:
        return <Car className={size} />;
    }
  };

  const getTypeLabel = () => {
    switch (data.type) {
      case "bike":
        return "Bike";
      case "car":
        return "Car";
      case "home":
        return "Home";
      default:
        return "Vehicle";
    }
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleSendNotification = () => {
    setIsNotifying(true);
    setTimeout(() => {
      setIsNotifying(false);
      setNotified(true);
    }, 2000);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Branding Header */}
      <div className="bg-secondary px-4 py-4">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="callowner.me" className="h-8" />
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-destructive/20 px-3 py-1.5 text-xs font-semibold text-destructive-foreground">
            <AlertTriangle className="h-3.5 w-3.5" />
            Emergency
          </div>
        </div>
      </div>

      <main className="flex flex-1 flex-col items-center px-4 py-6">
        <div className="w-full max-w-md space-y-4">

          {/* Section 1: Vehicle/Property Info */}
          <Card className="overflow-hidden border-2 border-primary/30 shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 bg-primary/5 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                  {getTypeIcon("h-7 w-7")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {getTypeLabel()} {data.type === "home" ? "Address" : "Number"}
                  </p>
                  <p className="truncate text-2xl font-bold text-foreground">
                    {data.vehicleNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-border/50 px-5 py-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Owner:</span>
                <span className="font-semibold text-foreground">{data.ownerFirstName}</span>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Contact Owner */}
          <Card className="overflow-hidden shadow-sm">
            <button
              className="flex w-full items-center justify-between p-5 text-left"
              onClick={() => toggleSection("owner")}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Contact Owner</p>
                  <p className="text-xs text-muted-foreground">Call {data.ownerFirstName} directly</p>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  expandedSection === "owner" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSection === "owner" && (
              <div className="border-t border-border/50 px-5 pb-5 pt-3">
                <Button
                  className="h-14 w-full gap-3 text-base font-semibold"
                  onClick={() => handleCall(data.primaryPhone)}
                >
                  <Phone className="h-5 w-5" />
                  Call {data.ownerFirstName}
                </Button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Your number will be visible to the owner
                </p>
              </div>
            )}
          </Card>

          {/* Section 3: Emergency Contacts */}
          <Card className="overflow-hidden shadow-sm">
            <button
              className="flex w-full items-center justify-between p-5 text-left"
              onClick={() => toggleSection("emergency")}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Emergency Contacts</p>
                  <p className="text-xs text-muted-foreground">
                    {data.contacts.length} contacts available
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  expandedSection === "emergency" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedSection === "emergency" && (
              <div className="space-y-3 border-t border-border/50 px-5 pb-5 pt-3">
                {data.contacts.map((contact, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-14 w-full justify-start gap-4 text-left"
                    onClick={() => handleCall(contact.phone)}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground">{contact.name}</p>
                      <p className="text-xs capitalize text-muted-foreground">{contact.relation}</p>
                    </div>
                    <Phone className="h-4 w-4 text-accent" />
                  </Button>
                ))}
              </div>
            )}
          </Card>

          {/* Section 4: Send Emergency Notification */}
          <Card className="overflow-hidden border-2 border-destructive/20 shadow-sm">
            <CardContent className="p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Send Emergency Alert</p>
                  <p className="text-xs text-muted-foreground">
                    Notify the owner & all contacts instantly
                  </p>
                </div>
              </div>

              {notified ? (
                <div className="flex items-center gap-3 rounded-xl bg-accent/10 p-4">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-accent">Alert Sent Successfully!</p>
                    <p className="text-xs text-muted-foreground">
                      Owner and all emergency contacts have been notified via WhatsApp & SMS
                    </p>
                  </div>
                </div>
              ) : (
                <Button
                  variant="destructive"
                  className="h-14 w-full gap-2 text-base font-semibold"
                  onClick={handleSendNotification}
                  disabled={isNotifying}
                >
                  {isNotifying ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-destructive-foreground border-t-transparent" />
                      Sending Alerts...
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-5 w-5" />
                      Send Emergency Notification
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Privacy Note */}
          <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div className="text-xs">
              <p className="font-medium text-foreground">Privacy Protected</p>
              <p className="text-muted-foreground">
                Personal phone numbers are hidden. Calls are connected securely through callowner.me.
              </p>
            </div>
          </div>

          {/* Powered By Footer */}
          <div className="pb-4 text-center">
            <p className="text-xs text-muted-foreground">
              Powered by{" "}
              <Link to="/" className="font-semibold text-primary hover:underline">
                callowner.me
              </Link>
            </p>
            <p className="mt-1 text-[10px] text-muted-foreground/60">
              QR ID: {qrId}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
