import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { CheckCircle } from "lucide-react";

const AdmissionProcess = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Admissions", path: "/admissions/process" }, { label: "Admission Process" }]} />
      <h1 className="page-title">Admission Process</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Admissions to Sri Aurobindo Purnanga Sikhya Kendra are open for the academic session 2025-26. We welcome students who are eager to learn and grow in an environment of integral education.</p>
      </div>
      <h2 className="section-title mb-6">Steps to Apply</h2>
      <div className="space-y-4 mb-8">
        {[
          { step: 1, title: "Obtain Application Form", desc: "Download the application form from our website or collect it from the school office during working hours (9 AM - 4 PM)." },
          { step: 2, title: "Fill & Submit Form", desc: "Complete the form with all required details and submit it along with necessary documents and the registration fee of ₹200." },
          { step: 3, title: "Interaction Session", desc: "The student and parent will be invited for an informal interaction with the school staff. This is not a test but a mutual understanding session." },
          { step: 4, title: "Admission Confirmation", desc: "Selected students will receive an admission letter. Parents must complete the fee payment and submit remaining documents within 7 days." },
          { step: 5, title: "Orientation Day", desc: "New students and parents attend an orientation program to understand the school's philosophy, daily routine, and expectations." },
        ].map((s) => (
          <div key={s.step} className="content-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-primary-foreground font-bold shrink-0">{s.step}</div>
            <div>
              <h3 className="font-display font-semibold">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="content-card bg-secondary border-none">
        <h3 className="font-display font-semibold mb-2">Required Documents</h3>
        <ul className="text-muted-foreground text-sm space-y-1">
          {["Birth Certificate (original + photocopy)", "Transfer Certificate from previous school (if applicable)", "Report card / mark sheet of last class attended", "4 recent passport-size photographs", "Aadhaar card of student and parents", "Caste certificate (if applicable)", "Medical fitness certificate"].map((d, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle size={14} className="text-primary shrink-0" />{d}</li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);
export default AdmissionProcess;
