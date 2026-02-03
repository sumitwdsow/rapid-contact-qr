import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Car, Home, ArrowRight } from "lucide-react";
import type { QRType } from "@/pages/Order";

interface SelectQRTypeProps {
  selectedType: QRType | null;
  onSelect: (type: QRType) => void;
}

const qrTypes = [
  {
    id: "bike" as QRType,
    icon: Bike,
    title: "Bike QR",
    description: "For motorcycles, scooters, and two-wheelers",
    price: "₹149",
    color: "primary",
  },
  {
    id: "car" as QRType,
    icon: Car,
    title: "Car QR",
    description: "For cars, SUVs, and four-wheelers",
    price: "₹199",
    color: "accent",
  },
  {
    id: "home" as QRType,
    icon: Home,
    title: "Home QR",
    description: "For apartments, houses, and offices",
    price: "₹249",
    color: "secondary",
  },
];

const SelectQRType = ({ selectedType, onSelect }: SelectQRTypeProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-display-sm mb-2">Select Your QR Type</h1>
        <p className="text-muted-foreground">
          Choose the type of QR tag you want to create
        </p>
      </div>

      {/* QR Type Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {qrTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;

          return (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                isSelected ? "border-2 border-primary ring-2 ring-primary/20" : ""
              }`}
              onClick={() => onSelect(type.id)}
            >
              <CardHeader className="pb-3">
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${
                    type.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : type.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  {type.title}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-foreground">
                  From {type.price}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SelectQRType;
