import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { UtensilsCrossed } from "lucide-react";
const Mess = () => (
  <FacilityPageTemplate title="Mess / Dining" icon={<UtensilsCrossed size={36} className="text-primary" />}
    intro="The school mess provides nutritious, hygienic, and balanced vegetarian meals to all hostel residents. The menu is carefully planned to ensure proper nutrition for growing children."
    features={[
      { title: "Balanced Menu", desc: "A weekly menu rotated monthly includes rice, dal, vegetables, salad, fruits, and milk. Special meals are prepared for festivals and celebrations." },
      { title: "Hygiene Standards", desc: "The kitchen maintains strict hygiene standards with regular inspections. Clean drinking water is available through RO purification systems." },
      { title: "Dining Hall", desc: "A spacious dining hall accommodates all hostel students at once. Meals are served family-style, promoting community and good table manners." },
      { title: "Special Dietary Needs", desc: "Students with specific dietary requirements or health conditions are accommodated with appropriate meal modifications upon parental request." },
    ]} />
);
export default Mess;
