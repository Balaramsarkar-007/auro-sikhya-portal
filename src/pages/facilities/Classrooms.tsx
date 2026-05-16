import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { School, Quote, Sun, Users, Lightbulb, Leaf, Star } from "lucide-react";

const highlights = [
  {
    title: "Peaceful Atmosphere",
    desc: "Designed to foster calm and concentration — every detail of the space supports a quiet mind ready for learning.",
    icon: Leaf,
  },
  {
    title: "Clean & Inspiring",
    desc: "Spaces kept clean, orderly, and beautiful so that students feel a natural sense of pride and responsibility.",
    icon: Sun,
  },
  {
    title: "Active Participation",
    desc: "Layouts that encourage movement, discussion, and hands-on engagement rather than passive listening.",
    icon: Users,
  },
  {
    title: "Creativity & Joy",
    desc: "Room for imagination — corners, displays, and open arrangements that invite creative and joyful interaction.",
    icon: Lightbulb,
  },
];

const qualities = [
  "Natural light and ventilation creating an environment where knowledge can grow naturally",
  "Warm interaction between teachers and students — not a lecture hall but a shared space of discovery",
  "Display boards and learning corners reflecting the children's own work and ideas",
  "Sufficient space for each child to think, move, and explore without crowding",
  "An atmosphere that balances structure with the freedom to concentrate deeply",
];

const Classrooms = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities" }, { label: "Classrooms" }]} />
      <h1 className="page-title">Classrooms</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <School size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The classrooms of Sri Aurobindo Purnanga Sikhya Kendra, Ganailo are designed to provide a peaceful, clean, and inspiring atmosphere for learning.
          </p>
          <p>
            They encourage concentration, active participation, creativity, and joyful interaction between teachers and students — creating an environment where knowledge can grow naturally.
          </p>
        </div>
      </div>

      {/* Four highlights */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Sun size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">What Makes Our Classrooms Special</h2>
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

      {/* Qualities list */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Leaf size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">The Learning Environment</h2>
        </div>
        <div className="space-y-4">
          {qualities.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Star size={15} className="text-primary" />
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
          "What is important in educating young children is to foster and protect the bright spontaneity that makes all learning a joyous discovery."
        </p>
        <p className="text-sm font-semibold text-primary">— The Mother</p>
      </div>
    </div>
  </Layout>
);

export default Classrooms;
