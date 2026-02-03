import { motion, type Easing } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Car, Home, ArrowRight } from "lucide-react";
import type { QRType } from "@/pages/Order";

const easeOut: Easing = [0.33, 1, 0.68, 1];

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const SelectQRType = ({ selectedType, onSelect }: SelectQRTypeProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-display-sm mb-2">Select Your QR Type</h1>
        <p className="text-muted-foreground">
          Choose the type of QR tag you want to create
        </p>
      </motion.div>

      {/* QR Type Cards */}
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {qrTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;

          return (
            <motion.div key={type.id} variants={cardVariants}>
              <Card
                className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                  isSelected ? "border-2 border-primary ring-2 ring-primary/20" : ""
                }`}
                onClick={() => onSelect(type.id)}
              >
                <CardHeader className="pb-3">
                  <motion.div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${
                      type.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : type.color === "accent"
                        ? "bg-accent/10 text-accent"
                        : "bg-secondary/10 text-secondary"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="flex items-center justify-between text-lg">
                    {type.title}
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-foreground">
                    From {type.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SelectQRType;
