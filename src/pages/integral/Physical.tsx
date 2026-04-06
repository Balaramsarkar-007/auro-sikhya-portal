import IntegralPageTemplate from "@/components/IntegralPageTemplate";
import { Dumbbell } from "lucide-react";

const Physical = () => (
  <IntegralPageTemplate
    title="Physical Education"
    icon={<Dumbbell size={36} className="text-primary" />}
    intro="Physical education at Sri Aurobindo Purnanga Sikhya Kendra is not limited to games and sports. It encompasses the complete development and mastery of the body, including health, hygiene, discipline, grace of movement, and physical endurance."
    sections={[
      { heading: "Yoga & Asanas", content: "Daily yoga sessions form the cornerstone of our physical education program. Students practice asanas suited to their age, developing flexibility, balance, and inner calm from an early age." },
      { heading: "Sports & Games", content: "Students participate in a variety of sports including kabaddi, kho-kho, volleyball, badminton, athletics, and football. Inter-house and inter-school competitions are regularly organized." },
      { heading: "Health & Hygiene", content: "Regular health check-ups, hygiene awareness programs, and nutritional guidance are provided. Students learn to care for their bodies as instruments of the divine." },
      { heading: "Discipline & Grace", content: "Physical education extends to daily routines — walking, sitting, and moving with awareness and grace. Martial arts and self-defense training are offered for older students." },
    ]}
    quote={{ text: "The body is the temple of the spirit and it should be made a fit dwelling for the Divine.", author: "The Mother" }}
  />
);

export default Physical;
