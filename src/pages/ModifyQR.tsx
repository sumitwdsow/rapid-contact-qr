import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MessageCircle, Phone, Loader2, CheckCircle, Edit3, Save, X, Car, Bike, Home } from "lucide-react";

const ModifyQR = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpMethod, setOtpMethod] = useState<"whatsapp" | "sms" | null>(null);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showSmsOption, setShowSmsOption] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Mock QR data
  const [qrData, setQrData] = useState([
    {
      id: "QR-001", type: "car" as const, vehicleNumber: "MH 01 AB 1234",
      owner: "Rahul Sharma", primaryPhone: "9876543210",
      familyPhone: "9876543211", neighborPhone: "9876543212",
    },
    {
      id: "QR-002", type: "bike" as const, vehicleNumber: "KA 01 EE 5678",
      owner: "Rahul Sharma", primaryPhone: "9876543210",
      familyPhone: "9876543213", neighborPhone: "",
    },
  ]);
  const [editForm, setEditForm] = useState<typeof qrData[0] | null>(null);

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

  const startEdit = (qr: typeof qrData[0]) => {
    setEditingId(qr.id);
    setEditForm({ ...qr });
  };

  const cancelEdit = () => { setEditingId(null); setEditForm(null); };

  const saveEdit = async () => {
    if (!editForm) return;
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setQrData((prev) => prev.map((q) => (q.id === editForm.id ? editForm : q)));
    setEditingId(null); setEditForm(null); setIsSaving(false);
  };

  const TypeIcon = ({ type }: { type: string }) => {
    if (type === "car") return <Car className="h-5 w-5" />;
    if (type === "bike") return <Bike className="h-5 w-5" />;
    return <Home className="h-5 w-5" />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-lg py-8 md:py-12">
          <div className="text-center mb-6">
            <h1 className="text-display-sm mb-2">Modify QR Details</h1>
            <p className="text-muted-foreground">Update your QR tag information</p>
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
                    <Input type="tel" placeholder="10-digit number" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10)); setOtpSent(false); setShowSmsOption(false); }} />
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

              {qrData.map((qr) => (
                <Card key={qr.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><TypeIcon type={qr.type} /></div>
                        <div>
                          <span className="text-base">{qr.id}</span>
                          <p className="text-xs text-muted-foreground capitalize">{qr.type} QR Tag</p>
                        </div>
                      </div>
                      {editingId !== qr.id && (
                        <Button variant="outline" size="sm" onClick={() => startEdit(qr)} className="gap-1">
                          <Edit3 className="h-3.5 w-3.5" /> Edit
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {editingId === qr.id && editForm ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Vehicle Number</Label>
                          <Input value={editForm.vehicleNumber} onChange={(e) => setEditForm({ ...editForm, vehicleNumber: e.target.value.toUpperCase() })} className="font-mono" />
                        </div>
                        <div className="space-y-2">
                          <Label>Owner Name</Label>
                          <Input value={editForm.owner} onChange={(e) => setEditForm({ ...editForm, owner: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Primary Phone</Label>
                          <Input value={editForm.primaryPhone} onChange={(e) => setEditForm({ ...editForm, primaryPhone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Family Phone</Label>
                          <Input value={editForm.familyPhone} onChange={(e) => setEditForm({ ...editForm, familyPhone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Neighbor Phone (Optional)</Label>
                          <Input value={editForm.neighborPhone} onChange={(e) => setEditForm({ ...editForm, neighborPhone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
                        </div>
                        <div className="flex gap-3 pt-2">
                          <Button variant="outline" onClick={cancelEdit} className="flex-1 gap-1"><X className="h-4 w-4" /> Cancel</Button>
                          <Button onClick={saveEdit} disabled={isSaving} className="flex-1 gap-1 bg-gradient-primary">
                            {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} Save
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Vehicle No.</span><span className="font-mono font-medium">{qr.vehicleNumber}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Owner</span><span className="font-medium">{qr.owner}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Primary Phone</span><span className="font-medium">+91 {qr.primaryPhone}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Family Phone</span><span className="font-medium">+91 {qr.familyPhone}</span></div>
                        {qr.neighborPhone && <div className="flex justify-between text-sm"><span className="text-muted-foreground">Neighbor Phone</span><span className="font-medium">+91 {qr.neighborPhone}</span></div>}
                      </div>
                    )}
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

export default ModifyQR;
