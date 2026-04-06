import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Calendar } from "lucide-react";

const AcademicCalendar = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Academics", path: "/academics/curriculum" }, { label: "Academic Calendar" }]} />
      <h1 className="page-title">Academic Calendar 2025-26</h1>
      <div className="space-y-3">
        {[
          { month: "April 2025", events: ["School reopens (April 1)", "New session orientation for parents (April 3)", "Earth Day celebrations (April 22)"] },
          { month: "May 2025", events: ["Summer break begins (May 15)", "Teacher training workshop (May 20-25)"] },
          { month: "June 2025", events: ["School reopens after summer break (June 16)", "Yoga Day celebrations (June 21)", "Monsoon nature walks begin"] },
          { month: "July 2025", events: ["Guru Purnima celebrations", "Inter-house debate competition", "First unit test (July 21-25)"] },
          { month: "August 2025", events: ["Independence Day & Sri Aurobindo's birthday (August 15)", "Raksha Bandhan celebrations", "Science exhibition"] },
          { month: "September 2025", events: ["Teacher's Day celebrations (September 5)", "Second unit test", "Annual Sports Day preparations begin"] },
          { month: "October 2025", events: ["Half-Yearly Examinations", "Durga Puja / Dussehra holidays", "Parent-Teacher Meeting"] },
          { month: "November 2025", events: ["Children's Day celebrations (November 14)", "Art & craft exhibition", "Cultural fest 'Samanvay' preparations"] },
          { month: "December 2025", events: ["Winter break (December 24 - January 1)", "Annual cultural program", "Third unit test"] },
          { month: "January 2026", events: ["Republic Day celebrations (January 26)", "Saraswati Puja", "Book fair"] },
          { month: "February 2026", events: ["The Mother's birthday (February 21)", "Annual Sports Day", "Pre-annual revision begins"] },
          { month: "March 2026", events: ["Annual Examinations", "Result preparation", "Session closing ceremony"] },
        ].map((m, i) => (
          <div key={i} className="content-card flex items-start gap-4">
            <Calendar size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-semibold">{m.month}</h3>
              <ul className="text-muted-foreground text-sm mt-1 space-y-0.5">
                {m.events.map((e, j) => <li key={j}>• {e}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default AcademicCalendar;
