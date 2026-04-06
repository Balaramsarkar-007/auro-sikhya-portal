import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { FileText, Download } from "lucide-react";

const Circulars = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Notice & Publications", path: "/notices/announcements" }, { label: "Circulars" }]} />
      <h1 className="page-title">Circulars</h1>
      <div className="space-y-3">
        {[
          { date: "March 8, 2025", no: "SAPSK/2025/032", title: "Annual Examination Schedule — March 2025" },
          { date: "Feb 25, 2025", no: "SAPSK/2025/028", title: "Change in School Timings from March 2025" },
          { date: "Feb 18, 2025", no: "SAPSK/2025/025", title: "Fee Payment Reminder — Quarterly Installment Due" },
          { date: "Feb 10, 2025", no: "SAPSK/2025/022", title: "Parent-Teacher Meeting Schedule" },
          { date: "Jan 30, 2025", no: "SAPSK/2025/018", title: "Republic Day Celebration — Program Schedule" },
          { date: "Jan 15, 2025", no: "SAPSK/2025/012", title: "Winter Session Resumption Notice" },
        ].map((c, i) => (
          <div key={i} className="content-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-accent shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">{c.title}</h3>
                <p className="text-xs text-muted-foreground">Circular No: {c.no} | {c.date}</p>
              </div>
            </div>
            <button className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"><Download size={14} /> PDF</button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Circulars;
