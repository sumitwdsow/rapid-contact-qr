import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Package, Download, QrCode, Truck, CheckCircle, Clock, ArrowRight } from "lucide-react";

// Mock orders data
const mockOrders = [
  {
    id: "EC12345678",
    type: "car",
    vehicleNumber: "KA-01-AB-1234",
    status: "delivered",
    deliveryType: "physical",
    createdAt: "2024-01-15",
    deliveredAt: "2024-01-20",
  },
  {
    id: "EC87654321",
    type: "bike",
    vehicleNumber: "KA-02-CD-5678",
    status: "shipped",
    deliveryType: "physical",
    createdAt: "2024-01-18",
    trackingNumber: "TRK123456",
  },
  {
    id: "EC11223344",
    type: "home",
    ownerName: "Rahul Sharma",
    status: "delivered",
    deliveryType: "digital",
    createdAt: "2024-01-20",
    deliveredAt: "2024-01-20",
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState(mockOrders);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filtered = mockOrders.filter(
        (order) =>
          order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.vehicleNumber?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setOrders(filtered);
      setHasSearched(true);
    } else {
      setOrders(mockOrders);
      setHasSearched(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case "shipped":
        return <Truck className="h-4 w-4 text-primary" />;
      case "processing":
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Package className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "shipped":
        return "In Transit";
      case "processing":
        return "Processing";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-accent/10 text-accent";
      case "shipped":
        return "bg-primary/10 text-primary";
      case "processing":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <Header />
      <main className="flex-1 py-6 md:py-10">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-display-sm mb-2">Order Dashboard</h1>
            <p className="text-muted-foreground">
              Track your orders and download QR codes
            </p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <Label htmlFor="search" className="sr-only">
                    Search Order
                  </Label>
                  <Input
                    id="search"
                    placeholder="Enter Order ID or Vehicle Number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="h-12"
                  />
                </div>
                <Button onClick={handleSearch} className="h-12 gap-2 bg-gradient-primary shadow-primary">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              {hasSearched ? "Search Results" : "Recent Orders"}
            </h2>

            {orders.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Package className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-lg font-medium">No orders found</p>
                  <p className="text-muted-foreground">
                    Try searching with a different Order ID or Vehicle Number
                  </p>
                </CardContent>
              </Card>
            ) : (
              orders.map((order) => (
                <Card key={order.id} className="transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      {/* Order Info */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <QrCode className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{order.id}</p>
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {getStatusIcon(order.status)}
                              {getStatusLabel(order.status)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {order.vehicleNumber || order.ownerName} • {order.type.toUpperCase()} QR
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Ordered on {new Date(order.createdAt).toLocaleDateString("en-IN")}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download QR
                          </Button>
                        )}
                        {order.status === "shipped" && order.trackingNumber && (
                          <Button variant="outline" size="sm" className="gap-2">
                            <Truck className="h-4 w-4" />
                            Track
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Tracking Info for Shipped Orders */}
                    {order.status === "shipped" && order.trackingNumber && (
                      <div className="mt-4 rounded-lg bg-muted p-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Truck className="h-4 w-4 text-primary" />
                          <span className="font-medium">Tracking:</span>
                          <span className="text-muted-foreground">{order.trackingNumber}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Help Section */}
          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-0 sm:mr-4">
                  <QrCode className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Need a new QR tag?</h3>
                  <p className="text-sm text-muted-foreground">
                    Order a new QR tag for another vehicle or property
                  </p>
                </div>
                <Button className="mt-4 gap-2 bg-gradient-primary shadow-primary sm:mt-0">
                  Order Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
