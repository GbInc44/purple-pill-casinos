import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NewCasinos from "./pages/NewCasinos.tsx";
import Top10 from "./pages/Top10.tsx";
import Winnings from "./pages/Winnings.tsx";
import PalmsBetReview from "./pages/PalmsBetReview.tsx";
import EfbetReview from "./pages/EfbetReview.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/novi-kazina" element={<NewCasinos />} />
        <Route path="/top-10" element={<Top10 />} />
        <Route path="/pechalbi" element={<Winnings />} />
        <Route path="/kazino/palms-bet" element={<PalmsBetReview />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
