import IntegralPageTemplate from "@/components/IntegralPageTemplate";
import { Sparkles } from "lucide-react";

const TeachingMethod = () => (
  <IntegralPageTemplate
    title="Teaching Method"
    icon={<Sparkles size={36} className="text-accent" />}
    intro="Our teaching methodology is rooted in the principles laid down by Sri Aurobindo and The Mother. We follow the 'Free Progress System' where the role of the teacher is that of a guide and facilitator, not a mere instructor."
    sections={[
      { heading: "Free Progress System", content: "Students are given freedom to explore subjects at their own pace, guided by their natural interests. Teachers observe each child carefully and offer direction based on the child's unique nature and readiness." },
      { heading: "Project-Based Learning", content: "Learning is often organized around projects that integrate multiple subjects. A project on 'Water' might include science experiments, mathematical calculations, poetry writing, and environmental awareness activities." },
      { heading: "Individual Attention", content: "With small class sizes (typically 20-25 students), teachers can provide personalized attention. Regular one-on-one conversations help understand each child's progress and challenges." },
      { heading: "No Fear-Based Learning", content: "We believe that fear kills creativity and genuine learning. There are no punishments; instead, we use understanding, dialogue, and natural consequences to guide behavior." },
    ]}
    quote={{ text: "The teacher is not an instructor or taskmaster; he is a helper and guide.", author: "Sri Aurobindo" }}
  />
);

export default TeachingMethod;
