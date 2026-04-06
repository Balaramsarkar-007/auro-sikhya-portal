import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { FlaskConical } from "lucide-react";
const Labs = () => (
  <FacilityPageTemplate title="Laboratories" icon={<FlaskConical size={36} className="text-accent" />}
    intro="Hands-on learning is a vital part of our educational approach. Our laboratories provide students with practical experience in science, technology, and exploration."
    features={[
      { title: "Science Lab", desc: "A well-equipped science laboratory with apparatus for physics, chemistry, and biology experiments. Students from Class V onwards have regular practical sessions." },
      { title: "Computer Lab", desc: "A computer lab with 15 workstations provides students access to digital literacy, basic programming, and educational software. Internet access is monitored and filtered." },
      { title: "Mathematics Lab", desc: "A dedicated space with manipulatives, geometric models, and activity kits that make abstract mathematical concepts tangible and understandable." },
      { title: "Nature Study Lab", desc: "Specimens, charts, a herbarium, and a small aquarium help students learn about the natural world. Connected to the school garden for live plant studies." },
    ]} />
);
export default Labs;
