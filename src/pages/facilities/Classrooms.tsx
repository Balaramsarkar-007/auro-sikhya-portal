import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { School } from "lucide-react";
const Classrooms = () => (
  <FacilityPageTemplate title="Classrooms" icon={<School size={36} className="text-primary" />}
    intro="Our classrooms are designed to create an atmosphere of learning, creativity, and comfort. Well-ventilated and naturally lit, each classroom provides an ideal environment for both individual study and collaborative activities."
    features={[
      { title: "Spacious & Well-Lit", desc: "Each classroom accommodates 20-25 students with ample space for movement and group activities. Large windows ensure natural lighting and ventilation." },
      { title: "Learning Resources", desc: "Classrooms are equipped with display boards, educational charts, reference books, and hands-on learning materials relevant to each grade level." },
      { title: "Activity Corners", desc: "Dedicated corners for reading, art, and nature study encourage self-directed exploration and creative expression during free periods." },
      { title: "Digital Integration", desc: "Smart boards and projectors are available in select classrooms for multimedia-enhanced learning and presentations." },
    ]} />
);
export default Classrooms;
