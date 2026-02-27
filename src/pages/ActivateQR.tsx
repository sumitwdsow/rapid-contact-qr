import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Car, Bike, Home, ArrowRight, ArrowLeft, CheckCircle, Shield, User, Users, Phone, MapPin, Loader2, MessageCircle, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useEffect } from "react";

type QRType = "car" | "bike" | "home" | null;

const STEPS = ["QR Type", "Vehicle/Home Info", "Primary Contact", "Emergency Contacts", "Verify OTP", "Done"];

const ActivateQR = () => {
  const [step, setStep] = useState(0);
  const [qrType, setQrType] = useState<QRType>(null);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [address, setAddress] = useState("");
  const [primaryContact, setPrimaryContact] = useState({ name: "", phone: "", email: "" });
  const [emergencyContacts, setEmergencyContacts] = useState({
    primary: "",
    family: "",
    neighbor: "",
  });
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [otpMethod, setOtpMethod] = useState<"whatsapp" | "sms" | null>(null);
  const [showSmsOption, setShowSmsOption] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!otpSent || showSmsOption) return;
    const timeout = setTimeout(() => setShowSmsOption(true), 15000);
    return () => clearTimeout(timeout);
  }, [otpSent, showSmsOption]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = (method: "whatsapp" | "sms") => {
    setError("");
    setOtpMethod(method);
    setOtpSent(true);
    setTimer(30);
    setOtp(["", "", "", "", "", ""]);
    setIsVerified(false);
    if (method === "sms") setShowSmsOption(true);
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
    if (value && index === 5 && newOtp.every((d) => d !== "")) verifyOtp(newOtp.join(""));
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
  };

  const verifyOtp = async (code: string) => {
    setIsVerifying(true);
    setError("");
    await new Promise((r) => setTimeout(r, 1500));
    if (code.length === 6) {
      setIsVerified(true);
      setIsVerifying(false);
      setTimeout(() => setStep(5), 800);
    } else {
      setError("Invalid OTP. Please try again.");
      setIsVerifying(false);
    }
  };

  const handleResend = (method: "whatsapp" | "sms") => {
    if (timer > 0) return;
    handleSendOtp(method);
  };

  const canProceed = () => {
    switch (step) {
      case 0: return !!qrType;
      case 1: return qrType === "home" ? address.trim().length > 5 : vehicleNumber.trim().length >= 4;
      case 2: return primaryContact.name.trim() && /^\d{10}$/.test(primaryContact.phone);
      case 3: return /^\d{10}$/.test(emergencyContacts.primary) && /^\d{10}$/.test(emergencyContacts.family);
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceed()) setStep((s) => s + 1);
  };

  const qrOptions = [
    { value: "car" as QRType, label: "Car", icon: Car, desc: "4-wheeler QR tag" },
    { value: "bike" as QRType, label: "Bike", icon: Bike, desc: "2-wheeler QR tag" },
    { value: "home" as QRType, label: "Home", icon: Home, desc: "Home entrance QR tag" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-lg py-8 md:py-12">
          {/* Progress */}
          {step < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {STEPS.slice(0, 5).map((s, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i < step ? "bg-accent text-accent-foreground" : i === step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {i < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
                    </div>
                    <span className="text-[10px] mt-1 text-muted-foreground hidden sm:block">{s}</span>
                  </div>
                ))}
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${(step / 4) * 100}%` }} />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 0: QR Type */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="text-center mb-6">
                  <h1 className="text-display-sm mb-2">Activate Your QR Tag</h1>
                  <p className="text-muted-foreground">Select the type of QR tag you want to activate</p>
                </div>
                <div className="grid gap-4">
                  {qrOptions.map((opt) => (
                    <Card
                      key={opt.value}
                      className={`cursor-pointer transition-all hover:shadow-md ${qrType === opt.value ? "ring-2 ring-primary border-primary" : ""}`}
                      onClick={() => setQrType(opt.value)}
                    >
                      <CardContent className="flex items-center gap-4 p-5">
                        <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${qrType === opt.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                          <opt.icon className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{opt.label}</p>
                          <p className="text-sm text-muted-foreground">{opt.desc}</p>
                        </div>
                        {qrType === opt.value && <CheckCircle className="ml-auto h-6 w-6 text-primary" />}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Vehicle/Home Info */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="text-center mb-6">
                  <h1 className="text-display-sm mb-2">{qrType === "home" ? "Home Details" : "Vehicle Details"}</h1>
                  <p className="text-muted-foreground">{qrType === "home" ? "Enter your home address" : "Enter your vehicle registration number"}</p>
                </div>
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {qrType === "home" ? (
                      <div className="space-y-2">
                        <Label htmlFor="address">Home Address</Label>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                          <Input id="address" placeholder="Enter your full address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="vehicle">Vehicle Registration Number</Label>
                        <Input
                          id="vehicle"
                          placeholder={qrType === "car" ? "e.g., MH 01 AB 1234" : "e.g., KA 01 EE 1234"}
                          value={vehicleNumber}
                          onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                          className="text-lg font-mono tracking-wider"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Primary Contact */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="text-center mb-6">
                  <h1 className="text-display-sm mb-2">Primary Contact</h1>
                  <p className="text-muted-foreground">Your contact details for the QR tag</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><User className="h-5 w-5 text-primary" /> Your Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter your name" value={primaryContact.name} onChange={(e) => setPrimaryContact({ ...primaryContact, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pphone">Phone Number *</Label>
                      <div className="flex items-center gap-2">
                        <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm font-medium text-muted-foreground">+91</span>
                        <Input id="pphone" type="tel" placeholder="10-digit number" value={primaryContact.phone} onChange={(e) => setPrimaryContact({ ...primaryContact, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={primaryContact.email} onChange={(e) => setPrimaryContact({ ...primaryContact, email: e.target.value })} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Emergency Contacts */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="text-center mb-6">
                  <h1 className="text-display-sm mb-2">Emergency Contacts</h1>
                  <p className="text-muted-foreground">Add contacts who can be reached in an emergency</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Emergency Numbers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="space-y-2">
                      <Label>1. Your Primary Number *</Label>
                      <div className="flex items-center gap-2">
                        <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm font-medium text-muted-foreground">+91</span>
                        <Input type="tel" placeholder="Your primary number" value={emergencyContacts.primary} onChange={(e) => setEmergencyContacts({ ...emergencyContacts, primary: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>2. Family Member *</Label>
                      <div className="flex items-center gap-2">
                        <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm font-medium text-muted-foreground">+91</span>
                        <Input type="tel" placeholder="Family member number" value={emergencyContacts.family} onChange={(e) => setEmergencyContacts({ ...emergencyContacts, family: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>3. Neighbor (Optional)</Label>
                      <div className="flex items-center gap-2">
                        <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm font-medium text-muted-foreground">+91</span>
                        <Input type="tel" placeholder="Neighbor number" value={emergencyContacts.neighbor} onChange={(e) => setEmergencyContacts({ ...emergencyContacts, neighbor: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: OTP Verification */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="text-center mb-6">
                  <h1 className="text-display-sm mb-2">Verify Your Number</h1>
                  <p className="text-muted-foreground">OTP will be sent to +91 {emergencyContacts.primary}</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> OTP Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <AnimatePresence mode="wait">
                      {!otpSent && !isVerified && (
                        <motion.div key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                          <Button onClick={() => handleSendOtp("whatsapp")} className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#1fb855]" size="lg">
                            <MessageCircle className="h-5 w-5" /> Get OTP via WhatsApp
                          </Button>
                        </motion.div>
                      )}

                      {otpSent && !isVerified && (
                        <motion.div key="otp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5">
                          <div className="rounded-lg bg-accent/10 p-3 text-center">
                            <p className="text-sm font-medium text-accent">OTP sent via {otpMethod === "whatsapp" ? "WhatsApp" : "SMS"} to +91 {emergencyContacts.primary}</p>
                          </div>
                          <div className="space-y-2">
                            <Label>Enter 6-digit OTP</Label>
                            <div className="flex justify-center gap-2">
                              {otp.map((digit, i) => (
                                <Input
                                  key={i}
                                  ref={(el) => { otpRefs.current[i] = el; }}
                                  type="text" inputMode="numeric" maxLength={1}
                                  value={digit}
                                  onChange={(e) => handleOtpChange(i, e.target.value)}
                                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                  className="h-12 w-12 text-center text-lg font-bold"
                                  disabled={isVerifying}
                                />
                              ))}
                            </div>
                            {error && <p className="text-center text-sm text-destructive">{error}</p>}
                            {isVerifying && (
                              <div className="flex items-center justify-center gap-2 pt-1 text-sm text-muted-foreground">
                                <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                              </div>
                            )}
                          </div>
                          <div className="space-y-3">
                            <Button variant="outline" className="w-full gap-2" onClick={() => handleResend("whatsapp")} disabled={timer > 0}>
                              <MessageCircle className="h-4 w-4 text-[#25D366]" />
                              {timer > 0 ? `Resend via WhatsApp (${timer}s)` : "Resend OTP via WhatsApp"}
                            </Button>
                            <AnimatePresence>
                              {showSmsOption && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                                  <Button variant="outline" className="w-full gap-2" onClick={() => handleResend("sms")} disabled={timer > 0}>
                                    <Phone className="h-4 w-4 text-primary" />
                                    {timer > 0 ? `Resend via SMS (${timer}s)` : "Get OTP via SMS"}
                                  </Button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}

                      {isVerified && (
                        <motion.div key="verified" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-2 rounded-lg bg-accent/10 py-6">
                          <CheckCircle className="h-10 w-10 text-accent" />
                          <p className="text-lg font-semibold text-accent">Verified!</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                  <PartyPopper className="h-20 w-20 mx-auto text-primary mb-4" />
                </motion.div>
                <h1 className="text-display-sm mb-2">🎉 Congratulations!</h1>
                <p className="text-xl font-semibold text-accent mb-2">Your QR Tag is Ready to Use</p>
                <p className="text-muted-foreground mb-6">
                  Your {qrType === "home" ? "home" : "vehicle"} QR tag has been activated successfully.
                  {qrType !== "home" && ` Vehicle: ${vehicleNumber}`}
                </p>
                <Card className="text-left mb-6">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">QR Type</span><span className="font-medium capitalize">{qrType}</span></div>
                    {qrType !== "home" && <div className="flex justify-between"><span className="text-muted-foreground">Vehicle No.</span><span className="font-mono font-medium">{vehicleNumber}</span></div>}
                    {qrType === "home" && <div className="flex justify-between"><span className="text-muted-foreground">Address</span><span className="font-medium">{address}</span></div>}
                    <div className="flex justify-between"><span className="text-muted-foreground">Owner</span><span className="font-medium">{primaryContact.name}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Primary Phone</span><span className="font-medium">+91 {emergencyContacts.primary}</span></div>
                  </CardContent>
                </Card>
                <Button onClick={() => window.location.href = "/"} className="btn-primary gap-2">
                  Go to Homepage <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 5 && step !== 4 && (
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button onClick={nextStep} disabled={!canProceed()} className="gap-2 bg-gradient-primary shadow-primary">
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          {step === 4 && !isVerified && (
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => { setStep(3); setOtpSent(false); setShowSmsOption(false); setOtp(["", "", "", "", "", ""]); }} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ActivateQR;
