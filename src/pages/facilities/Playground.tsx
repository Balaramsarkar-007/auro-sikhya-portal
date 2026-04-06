import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { Trophy } from "lucide-react";
const Playground = () => (
  <FacilityPageTemplate title="Playground" icon={<Trophy size={36} className="text-primary" />}
    intro="Physical activity and outdoor play are essential components of integral education. Our school campus includes a large playground and multiple sports facilities for holistic physical development."
    features={[
      { title: "Main Ground", desc: "A large open ground for football, cricket, athletics, and morning assemblies. The ground is maintained regularly for safe play." },
      { title: "Multi-Sport Courts", desc: "Dedicated courts for volleyball, badminton, and kabaddi. Equipment is provided for all students during physical education periods and after school." },
      { title: "Play Area for Juniors", desc: "A separate, fenced play area for younger children with age-appropriate equipment including slides, swings, and climbing structures." },
      { title: "Yoga & Meditation Space", desc: "An open-air platform under a large tree serves as a peaceful space for yoga sessions and outdoor meditation practices." },
    ]} />
);
export default Playground;
