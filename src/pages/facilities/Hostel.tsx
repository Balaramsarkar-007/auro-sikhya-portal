import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Home, Quote, ShieldCheck, Users, BookOpen, Heart, Star, Sun } from "lucide-react";

const highlights = [
  {
    title: "Safe & Disciplined",
    desc: "A secure environment with caring supervision ensures every boarder feels protected and supported around the clock.",
    icon: ShieldCheck,
  },
  {
    title: "Homely Atmosphere",
    desc: "Warm, comfortable spaces that feel like home — helping students settle in, feel at ease, and thrive away from family.",
    icon: Home,
  },
  {
    title: "Self-Reliance & Cooperation",
    desc: "Daily routines foster independence while shared living builds teamwork, responsibility, and mutual respect.",
    icon: Users,
  },
  {
    title: "Healthy Habits",
    desc: "Guided routines covering sleep, meals, hygiene, and recreation help establish lifelong healthy habits.",
    icon: Sun,
  },
];

const qualities = [
  "Regular study hours with a calm, focused atmosphere that supports academic progress",
  "Harmonious relationships among boarders encouraged through shared activities and collective responsibility",
  "Orderly living standards maintained with care — rooms, common areas, and personal spaces kept clean",
  "Caring wardens and supervisors available at all times for guidance and support",
  "A structured daily schedule that balances study, rest, recreation, and personal time",
];

const Hostel = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities" }, { label: "Hostel" }]} />
      <h1 className="page-title">Hostel</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <Home size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The hostel provides a safe, disciplined, and homely environment where students learn self-reliance, cooperation, and orderly living.
          </p>
          <p>
            Under caring supervision, boarders are guided to maintain healthy habits, regular study routines, and harmonious relationships with one another.
          </p>
        </div>
      </div>

      {/* Four highlights */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Heart size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">A Home Away from Home</h2>
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
            <BookOpen size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Life in the Hostel</h2>
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
          "True education is not just instruction of the mind — it is the formation of character, the building of a disciplined and harmonious life."
        </p>
        <p className="text-sm font-semibold text-primary">— Sri Aurobindo</p>
      </div>
    </div>
  </Layout>
);

export default Hostel;
