import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Bell } from "lucide-react";

const Announcements = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Notice & Publications", path: "/notices/announcements" }, { label: "Announcements" }]} />
      <h1 className="page-title">Announcements</h1>
      <div className="space-y-4">
        {[
          { date: "March 10, 2025", title: "Admissions Open for 2025-26", desc: "Applications are invited for Nursery to Class VIII. Last date for submission: April 30, 2025. Forms available at school office and website.", badge: "New" },
          { date: "March 5, 2025", title: "Annual Sports Day — March 15", desc: "All parents and guardians are cordially invited to attend the Annual Sports Day. Events begin at 8:00 AM.", badge: "Event" },
          { date: "Feb 28, 2025", title: "State Science Olympiad Results", desc: "Congratulations to Priya Ranjan (Class VII) — Gold Medal and Suresh Mohan (Class VI) — Silver Medal at the State Science Olympiad.", badge: "Achievement" },
          { date: "Feb 20, 2025", title: "Parent-Teacher Meeting — March 1", desc: "PTM for all classes will be held on March 1, 2025 from 10:00 AM to 1:00 PM. Please carry your child's report card.", badge: "Notice" },
          { date: "Feb 15, 2025", title: "Winter Uniform to Summer Uniform Transition", desc: "Students may begin wearing summer uniforms from March 1, 2025. Winter uniforms will be optional until March 15.", badge: "Notice" },
          { date: "Feb 10, 2025", title: "New Library Books Added", desc: "Over 200 new books across subjects have been added to the library. Students are encouraged to visit and explore the new collection.", badge: "Update" },
        ].map((a, i) => (
          <div key={i} className="content-card">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Bell size={18} className="text-primary shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                  <h3 className="font-display font-semibold">{a.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{a.desc}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-secondary text-secondary-foreground whitespace-nowrap">{a.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Announcements;
