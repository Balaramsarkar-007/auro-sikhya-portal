import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Trophy, Quote, Zap, Users, Heart, Star, Shield, Smile } from "lucide-react";

const highlights = [
  {
    title: "Strength & Endurance",
    desc: "Games and sports build physical stamina, coordination, and resilience — laying the foundation for a strong, capable body.",
    icon: Zap,
  },
  {
    title: "Teamwork & Cooperation",
    desc: "Team sports teach children to work together, communicate, and support one another — skills that extend far beyond the field.",
    icon: Users,
  },
  {
    title: "Discipline & Focus",
    desc: "Structured play and games instil the values of fairness, rule-following, and the self-discipline that comes from healthy competition.",
    icon: Shield,
  },
  {
    title: "Joy & Friendship",
    desc: "The playground is above all a place of joy — where bonds of friendship are formed and the spirit of play is cherished.",
    icon: Smile,
  },
];

const qualities = [
  "Space for a wide variety of games, sports, and free physical activity throughout the day",
  "Physical development nurtured alongside mental and inner growth — an integral approach to education",
  "Healthy competition encouraged in a spirit of friendship, not rivalry",
  "Students learn to win gracefully and lose with equanimity — qualities that build character",
  "Outdoor movement and fresh air as a natural support for concentration and well-being in the classroom",
];

const Playground = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities" }, { label: "Playground" }]} />
      <h1 className="page-title">Playground</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <Trophy size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The playground provides students with space for games, sports, exercise, and physical development.
          </p>
          <p>
            It helps cultivate strength, endurance, teamwork, discipline, and the joy of healthy competition in a spirit of friendship.
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="mb-10 content-card bg-gradient-to-r from-primary/10 to-amber-50 border border-primary/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center shrink-0">
          <Heart size={22} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-foreground text-lg mb-1">Physical Education as Integral Education</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A strong, disciplined, and joyful body is the foundation of all growth. Play is not separate from learning — it is one of its deepest forms.
          </p>
        </div>
      </div>

      {/* Four highlights */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Trophy size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">What the Playground Cultivates</h2>
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
            <Zap size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">The Spirit of Play</h2>
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
          "A perfect body, a strong and disciplined vital, a clear mind — these are the instruments the Divine needs for its work upon earth."
        </p>
        <p className="text-sm font-semibold text-primary">— The Mother</p>
      </div>
    </div>
  </Layout>
);

export default Playground;
