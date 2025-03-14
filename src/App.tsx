
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Odie from "./pages/Odie";
import UserProfile from "./pages/UserProfile";
import Vidora from "./pages/Vidora";
import Sensei from "./pages/Sensei";
import Carnival from "./pages/Carnival";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import NotificationsPage from "./pages/NotificationsPage";
import SearchPage from "./pages/SearchPage";
import DiscoverPage from "./pages/DiscoverPage";
import CreatePage from "./pages/CreatePage";
import ReelsPage from "./pages/ReelsPage";
import SettingsPage from "./pages/SettingsPage";
import CollegeTimetable from "./pages/CollegeTimetable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground antialiased">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/odie" element={<Odie />} />
              <Route path="/odie/profile" element={<UserProfile />} />
              <Route path="/odie/profile/:username" element={<UserProfile />} />
              <Route path="/odie/notifications" element={<NotificationsPage />} />
              <Route path="/odie/search" element={<SearchPage />} />
              <Route path="/odie/discover" element={<DiscoverPage />} />
              <Route path="/odie/create" element={<CreatePage />} />
              <Route path="/odie/reels" element={<ReelsPage />} />
              <Route path="/odie/settings" element={<SettingsPage />} />
              <Route path="/vidora" element={<Vidora />} />
              <Route path="/sensei" element={<Sensei />} />
              <Route path="/carnival" element={<Carnival />} />
              <Route path="/college-timetable" element={<CollegeTimetable />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
