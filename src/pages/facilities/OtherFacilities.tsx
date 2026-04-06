import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { Star } from "lucide-react";
const OtherFacilities = () => (
  <FacilityPageTemplate title="Other Facilities" icon={<Star size={36} className="text-gold" />}
    intro="Beyond classrooms and labs, our school provides a range of facilities that support the holistic development and well-being of our students."
    features={[
      { title: "Medical Room", desc: "A first-aid room with basic medical supplies and a visiting doctor who conducts weekly health check-ups. Emergency contacts are maintained for all students." },
      { title: "Art & Craft Room", desc: "A creative space with materials for painting, pottery, paper crafts, and textile art. Students have dedicated art periods each week." },
      { title: "Music Room", desc: "Instruments including harmonium, tabla, flute, and guitar are available. Students learn both classical Indian music and devotional songs." },
      { title: "School Garden", desc: "A maintained garden where students learn organic farming, plant care, and environmental responsibility. Each class maintains its own garden plot." },
      { title: "Assembly Hall", desc: "A covered hall for morning assemblies, cultural programs, parent meetings, and examinations. It accommodates the entire school comfortably." },
      { title: "Drinking Water & Sanitation", desc: "RO-purified drinking water stations on every floor. Clean, well-maintained washrooms with regular sanitation schedules." },
    ]} />
);
export default OtherFacilities;
