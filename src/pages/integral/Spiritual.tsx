import IntegralPageTemplate from "@/components/IntegralPageTemplate";
import { Sun } from "lucide-react";

const Spiritual = () => (
  <IntegralPageTemplate
    title="Spiritual Education"
    icon={<Sun size={36} className="text-gold" />}
    intro="Spiritual education opens the doors to a higher consciousness beyond the ordinary mental awareness. At our school, spirituality is not religious instruction but an aspiration towards truth, harmony, and the discovery of one's highest potential."
    sections={[
      { heading: "Morning Concentration", content: "Each day begins with a period of collective concentration and silence. Students sit quietly, focusing on a thought or aspiration, creating a foundation of calm and receptivity for the day." },
      { heading: "Study of Sri Aurobindo's Works", content: "Age-appropriate selections from the writings of Sri Aurobindo and The Mother are read and discussed. Students engage with concepts of consciousness, evolution, and the meaning of life." },
      { heading: "Service & Selflessness", content: "Community service activities, care for the environment, and helping others are integral parts of the school culture. Students learn that true spirituality expresses itself through action and service." },
      { heading: "Celebration of Inner Life", content: "Special days like Sri Aurobindo's birthday (August 15), The Mother's birthday (February 21), and other significant dates are observed with readings, music, and collective meditation." },
    ]}
    quote={{ text: "Spirituality is not a high intellectuality, not idealism, not an ethical turn of mind; it is an awakening to the inner reality of our being.", author: "Sri Aurobindo" }}
  />
);

export default Spiritual;
