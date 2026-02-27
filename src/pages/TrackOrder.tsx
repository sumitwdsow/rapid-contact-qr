import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MessageCircle, Phone, Loader2, CheckCircle, Package, Truck, MapPin, ClipboardCheck } from "lucide-react";

const TrackOrder = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpMethod, setOtpMethod] = useState<"whatsapp" | "sms" | null>(null);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
    if (!/^\d{10}$/.test(phoneNumber)) { setError("Enter a valid 10-digit number"); return; }
    setError(""); setOtpMethod(method); setOtpSent(true); setTimer(30);
    setOtp(["", "", "", "", "", ""]); setIsVerified(false);
    if (method === "sms") setShowSmsOption(true);
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp]; newOtp[index] = value; setOtp(newOtp); setError("");
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
    if (value && index === 5 && newOtp.every((d) => d !== "")) verifyOtp(newOtp.join(""));
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
  };

  const verifyOtp = async (code: string) => {
    setIsVerifying(true); setError("");
    await new Promise((r) => setTimeout(r, 1500));
    if (code.length === 6) { setIsVerified(true); setIsVerifying(false); }
    else { setError("Invalid OTP"); setIsVerifying(false); }
  };

  const handleResend = (method: "whatsapp" | "sms") => { if (timer > 0) return; handleSendOtp(method); };

  // Mock order data
  const mockOrders = [
    { id: "CO-20240215", type: "Car", vehicle: "MH 01 AB 1234", status: "shipped", date: "15 Feb 2024" },
    { id: "CO-20240210", type: "Bike", vehicle: "KA 01 EE 5678", status: "delivered", date: "10 Feb 2024" },
  ];

  const statusSteps = [
    { label: "Order Placed", icon: ClipboardCheck },
    { label: "Processing", icon: Package },
    { label: "Shipped", icon: Truck },
    { label: "Delivered", icon: MapPin },
  ];

  const getStatusIndex = (status: string) => {
    const map: Record<string, number> = { placed: 0, processing: 1, shipped: 2, delivered: 3 };
    return map[status] ?? 0;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-lg py-8 md:py-12">
          <div className="text-center mb-6">
            <h1 className="text-display-sm mb-2">Track Your Order</h1>
            <p className="text-muted-foreground">Enter your phone number to view your orders</p>
          </div>

          {!isVerified ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Verify Your Phone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm font-medium text-muted-foreground">+91</span>
                    <Input type="tel" placeholder="10-digit number" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10)); setOtpSent(false); setShowSmsOption(false); }} disabled={isVerified} />
                  </div>
                  {error && !otpSent && <p className="text-sm text-destructive">{error}</p>}
                </div>

                <AnimatePresence mode="wait">
                  {!otpSent && (
                    <motion.div key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                      <Button onClick={() => handleSendOtp("whatsapp")} className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#1fb855]" size="lg">
                        <MessageCircle className="h-5 w-5" /> Get OTP via WhatsApp
                      </Button>
                    </motion.div>
                  )}
                  {otpSent && (
                    <motion.div key="otp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                      <div className="rounded-lg bg-accent/10 p-3 text-center">
                        <p className="text-sm font-medium text-accent">OTP sent via {otpMethod === "whatsapp" ? "WhatsApp" : "SMS"} to +91 {phoneNumber}</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Enter 6-digit OTP</Label>
                        <div className="flex justify-center gap-2">
                          {otp.map((digit, i) => (
                            <Input key={i} ref={(el) => { otpRefs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={(e) => handleOtpChange(i, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(i, e)} className="h-12 w-12 text-center text-lg font-bold" disabled={isVerifying} />
                          ))}
                        </div>
                        {error && otpSent && <p className="text-center text-sm text-destructive">{error}</p>}
                        {isVerifying && <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Verifying...</div>}
                      </div>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full gap-2" onClick={() => handleResend("whatsapp")} disabled={timer > 0}>
                          <MessageCircle className="h-4 w-4 text-[#25D366]" /> {timer > 0 ? `Resend via WhatsApp (${timer}s)` : "Resend OTP via WhatsApp"}
                        </Button>
                        <AnimatePresence>
                          {showSmsOption && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                              <Button variant="outline" className="w-full gap-2" onClick={() => handleResend("sms")} disabled={timer > 0}>
                                <Phone className="h-4 w-4 text-primary" /> {timer > 0 ? `Resend via SMS (${timer}s)` : "Get OTP via SMS"}
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="rounded-lg bg-accent/10 p-3 text-center flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <p className="text-sm font-medium text-accent">Verified: +91 {phoneNumber}</p>
              </div>

              {mockOrders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-base">{order.id}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        order.status === "delivered" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                      }`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type: {order.type}</span>
                      <span className="text-muted-foreground">Vehicle: {order.vehicle}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      {statusSteps.map((s, i) => {
                        const active = i <= getStatusIndex(order.status);
                        return (
                          <div key={s.label} className="flex flex-col items-center flex-1">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${active ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                              <s.icon className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] mt-1 text-muted-foreground">{s.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground text-right">Ordered: {order.date}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
