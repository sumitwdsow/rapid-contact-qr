import { Check } from "lucide-react";

interface Step {
  number: number;
  title: string;
}

interface OrderProgressProps {
  steps: Step[];
  currentStep: number;
}

const OrderProgress = ({ steps, currentStep }: OrderProgressProps) => {
  return (
    <div className="relative">
      {/* Mobile: Simple text indicator */}
      <div className="flex items-center justify-between md:hidden">
        <span className="text-sm font-medium text-muted-foreground">
          Step {currentStep} of {steps.length}
        </span>
        <span className="text-sm font-semibold text-foreground">
          {steps[currentStep - 1]?.title}
        </span>
      </div>

      {/* Mobile: Progress bar */}
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted md:hidden">
        <div
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>

      {/* Desktop: Full step indicator */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;

            return (
              <div key={step.number} className="flex flex-1 items-center">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                      isCompleted
                        ? "border-accent bg-accent text-accent-foreground"
                        : isCurrent
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-semibold">{step.number}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      isCurrent ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="mx-2 h-0.5 flex-1">
                    <div
                      className={`h-full transition-all ${
                        currentStep > step.number ? "bg-accent" : "bg-border"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
