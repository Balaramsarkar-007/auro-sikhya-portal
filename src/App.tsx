import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import VisionMission from "./pages/about/VisionMission";
import ParentOrganization from "./pages/about/ParentOrganization";
import History from "./pages/about/History";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import AimsObjectives from "./pages/about/AimsObjectives";
import IntegralOverview from "./pages/integral/IntegralOverview";
import Physical from "./pages/integral/Physical";
import Vital from "./pages/integral/Vital";
import Mental from "./pages/integral/Mental";
import Psychic from "./pages/integral/Psychic";
import Spiritual from "./pages/integral/Spiritual";
import TeachingMethod from "./pages/integral/TeachingMethod";
import Classrooms from "./pages/facilities/Classrooms";
import Hostel from "./pages/facilities/Hostel";
import Mess from "./pages/facilities/Mess";
import Library from "./pages/facilities/Library";
import Playground from "./pages/facilities/Playground";
import Labs from "./pages/facilities/Labs";
import OtherFacilities from "./pages/facilities/OtherFacilities";
import Curriculum from "./pages/academics/Curriculum";
import ClassesPrograms from "./pages/academics/ClassesPrograms";
import Examination from "./pages/academics/Examination";
import AcademicCalendar from "./pages/academics/AcademicCalendar";
import Rules from "./pages/academics/Rules";
import AdmissionProcess from "./pages/admissions/AdmissionProcess";
import Eligibility from "./pages/admissions/Eligibility";
import FeeStructure from "./pages/admissions/FeeStructure";
import DownloadForms from "./pages/admissions/DownloadForms";
import CoCurricular from "./pages/events/CoCurricular";
import Sports from "./pages/events/Sports";
import Cultural from "./pages/events/Cultural";
import Celebrations from "./pages/events/Celebrations";
import PhotoGallery from "./pages/gallery/PhotoGallery";
import VideoGallery from "./pages/gallery/VideoGallery";
import Announcements from "./pages/notices/Announcements";
import Circulars from "./pages/notices/Circulars";
import EventsUpdates from "./pages/notices/EventsUpdates";
import Ebooks from "./pages/notices/Ebooks";
import Magazines from "./pages/notices/Magazines";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/parent-organization" element={<ParentOrganization />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/aims-objectives" element={<AimsObjectives />} />
          <Route path="/integral-education/overview" element={<IntegralOverview />} />
          <Route path="/integral-education/physical" element={<Physical />} />
          <Route path="/integral-education/vital" element={<Vital />} />
          <Route path="/integral-education/mental" element={<Mental />} />
          <Route path="/integral-education/psychic" element={<Psychic />} />
          <Route path="/integral-education/spiritual" element={<Spiritual />} />
          <Route path="/integral-education/teaching-method" element={<TeachingMethod />} />
          <Route path="/facilities/classrooms" element={<Classrooms />} />
          <Route path="/facilities/hostel" element={<Hostel />} />
          <Route path="/facilities/mess" element={<Mess />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/playground" element={<Playground />} />
          <Route path="/facilities/labs" element={<Labs />} />
          <Route path="/facilities/other" element={<OtherFacilities />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/classes-programs" element={<ClassesPrograms />} />
          <Route path="/academics/examination" element={<Examination />} />
          <Route path="/academics/calendar" element={<AcademicCalendar />} />
          <Route path="/academics/rules" element={<Rules />} />
          <Route path="/admissions/process" element={<AdmissionProcess />} />
          <Route path="/admissions/eligibility" element={<Eligibility />} />
          <Route path="/admissions/fee-structure" element={<FeeStructure />} />
          <Route path="/admissions/download-forms" element={<DownloadForms />} />
          <Route path="/events/co-curricular" element={<CoCurricular />} />
          <Route path="/events/sports" element={<Sports />} />
          <Route path="/events/cultural" element={<Cultural />} />
          <Route path="/events/celebrations" element={<Celebrations />} />
          <Route path="/gallery/photos" element={<PhotoGallery />} />
          <Route path="/gallery/videos" element={<VideoGallery />} />
          <Route path="/notices/announcements" element={<Announcements />} />
          <Route path="/notices/circulars" element={<Circulars />} />
          <Route path="/notices/events-updates" element={<EventsUpdates />} />
          <Route path="/notices/ebooks" element={<Ebooks />} />
          <Route path="/notices/magazines" element={<Magazines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
