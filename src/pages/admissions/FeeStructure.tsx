import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";

const FeeStructure = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Admissions", path: "/admissions/process" }, { label: "Fee Structure" }]} />
      <h1 className="page-title">Fee Structure 2025-26</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Our fees are kept affordable to ensure that quality integral education is accessible to all families. Scholarships and fee concessions are available for deserving students.</p>
      </div>
      <div className="overflow-x-auto content-card mb-6">
        <table className="w-full text-sm">
          <thead><tr className="border-b font-display"><th className="py-3 pr-4 text-left">Fee Component</th><th className="py-3 pr-4 text-left">Day Scholar</th><th className="py-3 text-left">Hostel Student</th></tr></thead>
          <tbody className="text-muted-foreground">
            {[
              ["Admission Fee (one-time)", "₹1,000", "₹1,000"],
              ["Annual Fee", "₹2,400", "₹2,400"],
              ["Tuition Fee (monthly)", "₹500", "₹500"],
              ["Hostel Fee (monthly)", "—", "₹1,500"],
              ["Mess Fee (monthly)", "—", "₹1,200"],
              ["Activity Fee (annual)", "₹600", "₹600"],
              ["Examination Fee (annual)", "₹300", "₹300"],
            ].map(([item, day, hostel], i) => (
              <tr key={i} className="border-b last:border-0"><td className="py-2 pr-4 font-medium text-foreground">{item}</td><td className="py-2 pr-4">{day}</td><td className="py-2">{hostel}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="content-card">
          <h3 className="font-display font-semibold mb-2">Payment Options</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>• Monthly, quarterly, or annual payment options</li>
            <li>• Cash, cheque, or bank transfer accepted</li>
            <li>• UPI payments accepted at school office</li>
          </ul>
        </div>
        <div className="content-card">
          <h3 className="font-display font-semibold mb-2">Scholarships</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>• Merit scholarships for top performers</li>
            <li>• Need-based fee concessions available</li>
            <li>• Sibling discount of 10% on tuition</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);
export default FeeStructure;
