import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Download, FileText } from "lucide-react";

const DownloadForms = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Admissions", path: "/admissions/process" }, { label: "Download Forms" }]} />
      <h1 className="page-title">Download Forms</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Download the required forms for admission, transfer, and other purposes. Print, fill in, and submit them to the school office.</p>
      </div>
      <div className="space-y-3">
        {[
          { name: "Admission Application Form", desc: "For new admissions to all classes", size: "PDF, 245 KB" },
          { name: "Hostel Application Form", desc: "For hostel admission request", size: "PDF, 180 KB" },
          { name: "Transfer Certificate Request", desc: "For students leaving the school", size: "PDF, 120 KB" },
          { name: "Medical Fitness Certificate", desc: "To be filled by a registered medical practitioner", size: "PDF, 95 KB" },
          { name: "Fee Concession Application", desc: "For scholarship / fee reduction request", size: "PDF, 150 KB" },
          { name: "Parent Consent Form", desc: "For excursions and outdoor activities", size: "PDF, 110 KB" },
        ].map((form, i) => (
          <div key={i} className="content-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={24} className="text-accent" />
              <div>
                <h3 className="font-semibold text-sm">{form.name}</h3>
                <p className="text-xs text-muted-foreground">{form.desc} — {form.size}</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Download size={16} /> Download
            </button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default DownloadForms;
