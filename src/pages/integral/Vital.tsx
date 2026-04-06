import IntegralPageTemplate from "@/components/IntegralPageTemplate";
import { Flame } from "lucide-react";

const Vital = () => (
  <IntegralPageTemplate
    title="Vital Education"
    icon={<Flame size={36} className="text-lotus" />}
    intro="Vital education focuses on the development of the emotional and dynamic life-energies within the child. It includes training of character, willpower, emotions, aesthetic sensibility, and interpersonal relationships."
    sections={[
      { heading: "Emotional Intelligence", content: "Through storytelling, group discussions, and reflective journaling, students learn to understand and manage their emotions. We create safe spaces for emotional expression and growth." },
      { heading: "Character Building", content: "Values such as honesty, courage, perseverance, and kindness are woven into daily life at school. Students learn through real-life situations and the example of their teachers." },
      { heading: "Art & Aesthetics", content: "Music, dance, painting, and craft activities develop the aesthetic sense and provide channels for emotional expression. Cultural programs celebrate the rich traditions of India." },
      { heading: "Leadership & Teamwork", content: "Group projects, house activities, and student council responsibilities build leadership skills and the ability to work collaboratively with others." },
    ]}
    quote={{ text: "To master the vital is to become free from all bondage.", author: "Sri Aurobindo" }}
  />
);

export default Vital;
