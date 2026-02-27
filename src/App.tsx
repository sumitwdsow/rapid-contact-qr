import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Index from "./pages/Index";
import Order from "./pages/Order";
import Emergency from "./pages/Emergency";
import Dashboard from "./pages/Dashboard";
import ActivateQR from "./pages/ActivateQR";
import TrackOrder from "./pages/TrackOrder";
import ModifyQR from "./pages/ModifyQR";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/order" element={<Order />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activate" element={<ActivateQR />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/modify-qr" element={<ModifyQR />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
