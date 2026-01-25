import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showPostponed, setShowPostponed] = useState(true);

  useEffect(() => 
  {
    const interval = setInterval(() => {
      setShowPostponed(true);
    }, 2 * 60 * 1000); // every 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {showPostponed && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
            <div className="glass-effect-dark rounded-2xl p-6 max-w-sm w-full mx-4 text-center">
              <h2 className="font-orbitron text-xl font-bold text-foreground mb-2">
                Event Postponed
              </h2>
              <p className="font-mono text-sm text-muted-foreground mb-4">
                HackSphere has been postponed. New dates and details will be
                announced later on the official channels.
              </p>
              <button
                className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-background hover:bg-primary/90 transition-colors"
                onClick={() => setShowPostponed(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
