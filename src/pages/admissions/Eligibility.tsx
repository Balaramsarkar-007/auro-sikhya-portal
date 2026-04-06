import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";

const Eligibility = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Admissions", path: "/admissions/process" }, { label: "Eligibility" }]} />
      <h1 className="page-title">Eligibility Criteria</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Admissions are based on age criteria, available seats, and an informal interaction. We welcome students from all backgrounds, communities, and regions.</p>
      </div>
      <div className="overflow-x-auto content-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b font-display"><th className="py-3 pr-4 text-left">Class</th><th className="py-3 pr-4 text-left">Minimum Age (as on April 1)</th><th className="py-3 text-left">Previous Qualification</th></tr></thead>
          <tbody className="text-muted-foreground">
            {[
              ["Nursery", "3 years", "None"],
              ["LKG", "4 years", "None"],
              ["UKG", "5 years", "Nursery or equivalent"],
              ["Class I", "6 years", "UKG or equivalent"],
              ["Class II", "7 years", "Class I passed"],
              ["Class III", "8 years", "Class II passed"],
              ["Class IV", "9 years", "Class III passed"],
              ["Class V", "10 years", "Class IV passed"],
              ["Class VI", "11 years", "Class V passed"],
              ["Class VII", "12 years", "Class VI passed"],
              ["Class VIII", "13 years", "Class VII passed"],
            ].map(([cls, age, qual], i) => (
              <tr key={i} className="border-b last:border-0"><td className="py-2 pr-4 font-medium text-foreground">{cls}</td><td className="py-2 pr-4">{age}</td><td className="py-2">{qual}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
);
export default Eligibility;
