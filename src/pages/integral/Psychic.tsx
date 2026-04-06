import IntegralPageTemplate from "@/components/IntegralPageTemplate";
import { Heart } from "lucide-react";

const Psychic = () => (
  <IntegralPageTemplate
    title="Psychic Education"
    icon={<Heart size={36} className="text-primary" />}
    intro="Psychic education is the most unique aspect of integral education. It concerns the discovery and development of the innermost being — the psychic being or the soul. This education helps the child develop an inner compass of truth and beauty that guides all aspects of life."
    sections={[
      { heading: "Inner Awareness", content: "Through meditation, silence, and self-reflection, students gradually develop awareness of their inner being. Morning concentrations create an atmosphere of stillness and receptivity." },
      { heading: "Intuitive Learning", content: "Students are encouraged to trust their intuitive understanding alongside rational thinking. This develops a deeper connection to knowledge and truth." },
      { heading: "Value of Sincerity", content: "Sincerity is considered the foundation of psychic development. Students learn to be truthful with themselves and others, and to align their actions with their deepest aspirations." },
      { heading: "Connection with Nature", content: "Regular nature walks, gardening, and environmental activities help students connect with the living world around them, fostering a sense of wonder and reverence for life." },
    ]}
    quote={{ text: "The psychic being is the one true guide in life.", author: "The Mother" }}
  />
);

export default Psychic;
