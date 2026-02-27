import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, MessageCircle, Phone, Loader2, CheckCircle, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PhoneVerificationProps {
  onNext: () => void;
  onBack: () => void;
  phone: string;
  onPhoneChange: (phone: string) => void;
}

const PhoneVerification = ({ onNext, onBack, phone, onPhoneChange }: PhoneVerificationProps) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpMethod, setOtpMethod] = useState<"whatsapp" | "sms" | null>(null);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showSmsOption, setShowSmsOption] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // 15-second timer to show SMS option
  useEffect(() => {
    if (!otpSent || showSmsOption) return;
    const timeout = setTimeout(() => setShowSmsOption(true), 15000);
    return () => clearTimeout(timeout);
  }, [otpSent, showSmsOption]);

  // Resend countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = (method: "whatsapp" | "sms") => {
    if (!phone || !/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    setOtpMethod(method);
    setOtpSent(true);
    setTimer(30);
    setOtp(["", "", "", ""]);
    setIsVerified(false);
    if (method === "sms") setShowSmsOption(true);
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all 4 digits entered
    if (value && index === 3 && newOtp.every((d) => d !== "")) {
      verifyOtp(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async (code: string) => {
    setIsVerifying(true);
    setError("");
    // Mock verification
    await new Promise((r) => setTimeout(r, 1500));
    if (code === "1234" || code.length === 4) {
      setIsVerified(true);
      setIsVerifying(false);
      setTimeout(onNext, 800);
    } else {
      setError("Invalid OTP. Please try again.");
      setIsVerifying(false);
    }
  };

  const handleResend = (method: "whatsapp" | "sms") => {
    if (timer > 0) return;
    handleSendOtp(method);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-display-sm mb-2">Verify Your Phone</h1>
        <p className="text-muted-foreground">
          We'll send you a one-time password to verify your number
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Phone Verification
          </CardTitle>
          <CardDescription>
            Enter your phone number to receive an OTP
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Phone Input */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex items-center gap-2">
              <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm font-medium text-muted-foreground">
                +91
              </span>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => {
                  onPhoneChange(e.target.value.replace(/\D/g, "").slice(0, 10));
                  setOtpSent(false);
                  setShowSmsOption(false);
                  setIsVerified(false);
                  setOtp(["", "", "", ""]);
                }}
                className={error && !otpSent ? "border-destructive" : ""}
                disabled={isVerified}
              />
            </div>
            {error && !otpSent && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>

          {/* Send OTP Buttons (before OTP sent) */}
          <AnimatePresence mode="wait">
            {!otpSent && !isVerified && (
              <motion.div
                key="send-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Button
                  onClick={() => handleSendOtp("whatsapp")}
                  className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#1fb855]"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get OTP via WhatsApp
                </Button>
              </motion.div>
            )}

            {/* OTP Input Section */}
            {otpSent && !isVerified && (
              <motion.div
                key="otp-section"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5"
              >
                {/* Sent confirmation */}
                <div className="rounded-lg bg-accent/10 p-3 text-center">
                  <p className="text-sm font-medium text-accent">
                    OTP sent via {otpMethod === "whatsapp" ? "WhatsApp" : "SMS"} to +91 {phone}
                  </p>
                </div>

                {/* OTP Boxes */}
                <div className="space-y-2">
                  <Label>Enter 4-digit OTP</Label>
                  <div className="flex justify-center gap-3">
                    {otp.map((digit, i) => (
                      <Input
                        key={i}
                        ref={(el) => { inputRefs.current[i] = el; }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        className="h-14 w-14 text-center text-xl font-bold"
                        disabled={isVerifying}
                      />
                    ))}
                  </div>
                  {error && otpSent && (
                    <p className="text-center text-sm text-destructive">{error}</p>
                  )}
                  {isVerifying && (
                    <div className="flex items-center justify-center gap-2 pt-1 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Verifying...
                    </div>
                  )}
                </div>

                {/* Resend / Alternative buttons */}
                <div className="space-y-3">
                  {/* WhatsApp resend */}
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => handleResend("whatsapp")}
                    disabled={timer > 0}
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    {timer > 0
                      ? `Resend via WhatsApp (${timer}s)`
                      : "Resend OTP via WhatsApp"}
                  </Button>

                  {/* SMS option appears after 15s */}
                  <AnimatePresence>
                    {showSmsOption && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2"
                          onClick={() => handleResend("sms")}
                          disabled={timer > 0}
                        >
                          <Phone className="h-4 w-4 text-primary" />
                          {timer > 0
                            ? `Resend via SMS (${timer}s)`
                            : "Get OTP via SMS"}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Verified State */}
            {isVerified && (
              <motion.div
                key="verified"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2 rounded-lg bg-accent/10 py-6"
              >
                <CheckCircle className="h-10 w-10 text-accent" />
                <p className="text-lg font-semibold text-accent">Phone Verified!</p>
                <p className="text-sm text-muted-foreground">Redirecting...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={() => {
            if (isVerified) onNext();
            else if (otpSent && otp.every((d) => d !== "")) verifyOtp(otp.join(""));
          }}
          className="gap-2 bg-gradient-primary shadow-primary"
          disabled={!isVerified && (!otpSent || otp.some((d) => d === ""))}
        >
          {isVerifying ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue"}
          {!isVerifying && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default PhoneVerification;
