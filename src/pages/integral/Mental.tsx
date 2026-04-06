import IntegralPageTemplate from "@/components/IntegralPageTemplate";
import { Brain } from "lucide-react";

const Mental = () => (
  <IntegralPageTemplate
    title="Mental Education"
    icon={<Brain size={36} className="text-accent" />}
    intro="Mental education at our school goes beyond information-gathering. It aims to develop the powers of concentration, observation, logical thinking, imagination, and independent judgment. The goal is to create minds that are flexible, open, and capable of genuine understanding."
    sections={[
      { heading: "Concentration & Attention", content: "Special exercises in concentration are practised daily. Students learn to focus their mind on a single subject for increasing periods, developing deep attention and mental clarity." },
      { heading: "Observation & Discovery", content: "Learning through observation of nature, experiments, and field trips is encouraged. Students develop the ability to notice details and draw conclusions from their observations." },
      { heading: "Critical Thinking", content: "Rather than rote memorization, students are encouraged to question, analyze, and form their own understanding. Socratic discussions and project-based learning are key methods." },
      { heading: "Creative Expression", content: "Creative writing, debate, drama, and essay competitions develop the ability to express thoughts clearly and imaginatively. Students learn multiple languages including English, Hindi, Odia, and Sanskrit." },
    ]}
    quote={{ text: "The first principle of true teaching is that nothing can be taught.", author: "Sri Aurobindo" }}
  />
);

export default Mental;
