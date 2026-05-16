import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { FlaskConical, Quote, Cpu, Lightbulb, Star, Microscope, Rocket, Wrench } from "lucide-react";

const highlights = [
  {
    title: "Observation & Experimentation",
    desc: "Students develop a scientific eye — learning to observe carefully, form hypotheses, and test ideas through hands-on experiments.",
    icon: Microscope,
  },
  {
    title: "Scientific Thinking",
    desc: "Practical labs build the habit of evidence-based reasoning, nurturing a genuine scientific temperament from an early age.",
    icon: FlaskConical,
  },
  {
    title: "Deeper Understanding",
    desc: "Hands-on activities turn abstract concepts into lived experience — students gain insight and confidence that no textbook alone can provide.",
    icon: Lightbulb,
  },
  {
    title: "Creative Application",
    desc: "Learners are encouraged to apply knowledge creatively — bridging science with imagination to solve real-world problems.",
    icon: Wrench,
  },
];

const atalFeatures = [
  "Robotics — building and programming machines that bring ideas to life",
  "Design Thinking — structured creative problem-solving from ideation to prototype",
  "Coding — foundational programming skills that develop logical and computational thinking",
  "Innovation Challenges — open-ended projects that reward curiosity and original thinking",
  "Problem-Solving Skills — tackling real-world challenges with creativity and persistence",
  "A nurturing space where the scientist, engineer, and innovator in every child can emerge",
];

const Labs = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities" }, { label: "Laboratories" }]} />
      <h1 className="page-title">Laboratories</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <FlaskConical size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The laboratories offer practical learning experiences that help students develop observation, experimentation, and scientific thinking.
          </p>
          <p>
            Through hands-on activities, learners gain deeper understanding and confidence in applying knowledge creatively.
          </p>
        </div>
      </div>

      {/* Four highlights */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <FlaskConical size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Science Laboratories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="content-card border-t-4 border-primary group hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-2 -mr-2" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ATL Banner */}
      <div className="mb-6 content-card bg-gradient-to-r from-primary/10 to-amber-50 border border-primary/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center shrink-0">
          <Rocket size={22} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-foreground text-lg mb-1">Atal Tinkering Laboratory</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The institution is enriched with an Atal Tinkering Laboratory — a dedicated space where students explore innovation, robotics, design thinking, coding, and problem-solving, nurturing a scientific temperament and creativity for the future.
          </p>
        </div>
      </div>

      {/* ATL features */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Cpu size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">What Students Explore in the ATL</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {atalFeatures.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-3 hover:shadow-md transition-shadow group">
              <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                <Star size={13} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing quote */}
      <div className="mt-8 content-card border-l-4 border-primary pl-5 bg-primary/5">
        <Quote size={22} className="text-primary/30 mb-2" />
        <p className="text-muted-foreground italic mb-3">
          "Science is the discovery of the ways of God; the scientific spirit is one of the greatest gifts of knowledge to mankind."
        </p>
        <p className="text-sm font-semibold text-primary">— Sri Aurobindo</p>
      </div>
    </div>
  </Layout>
);

export default Labs;
