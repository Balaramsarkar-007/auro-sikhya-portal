import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { UtensilsCrossed, Quote, Leaf, Heart, Sparkles, Star, Sun, Users } from "lucide-react";

const highlights = [
  {
    title: "Nutritious & Balanced",
    desc: "Every meal is planned to meet the nutritional needs of growing children — balanced across grains, vegetables, proteins, and seasonal produce.",
    icon: Leaf,
  },
  {
    title: "Sattwic Food",
    desc: "Special emphasis on wholesome sattwic food — pure, light, and nourishing — prepared with care to support clarity of mind and inner well-being.",
    icon: Sun,
  },
  {
    title: "Hygienic Preparation",
    desc: "The kitchen and dining hall are maintained to high standards of cleanliness, ensuring every meal is safe and freshly prepared.",
    icon: Sparkles,
  },
  {
    title: "Collective Harmony",
    desc: "The shared dining experience fosters a spirit of togetherness, gratitude, and harmonious living among students and staff.",
    icon: Users,
  },
];

const qualities = [
  "Spacious and orderly dining hall that seats students and staff comfortably",
  "Meals prepared with care to support healthy physical growth and vitality",
  "Habits of cleanliness and discipline nurtured through the daily dining routine",
  "A spirit of gratitude cultivated — each meal received as a gift to be honoured",
  "Seasonal and locally sourced ingredients prioritised for freshness and health",
];

const Mess = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities" }, { label: "Mess" }]} />
      <h1 className="page-title">Mess</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <UtensilsCrossed size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The mess, with its spacious and orderly dining hall, ensures nutritious, hygienic, and balanced meals for students and staff.
          </p>
          <p>
            Special emphasis is given to wholesome sattwic food, prepared with care to support the healthy physical growth, clarity of mind, and well-being of children. The dining atmosphere also fosters habits of cleanliness, gratitude, discipline, and collective harmony.
          </p>
        </div>
      </div>

      {/* Sattwic banner */}
      <div className="mb-10 content-card bg-gradient-to-r from-primary/10 to-amber-50 border border-primary/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center shrink-0">
          <Leaf size={22} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-foreground text-lg mb-1">Sattwic Nourishment</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Food that is pure, light, and wholesome — nourishing not just the body but also the mind and spirit. Sattwic food supports concentration, calmness, and inner clarity.
          </p>
        </div>
      </div>

      {/* Four highlights */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Heart size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Our Approach to Food & Dining</h2>
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
            <UtensilsCrossed size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">The Dining Experience</h2>
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
          "The body is the temple of the Divine. To keep it clean, healthy, and nourished is itself a form of sadhana."
        </p>
        <p className="text-sm font-semibold text-primary">— The Mother</p>
      </div>
    </div>
  </Layout>
);

export default Mess;
