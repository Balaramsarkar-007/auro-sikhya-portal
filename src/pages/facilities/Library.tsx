import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BookOpen, Quote, Sparkles, Heart, Star, Lightbulb, Globe, Sun } from "lucide-react";

const highlights = [
  {
    title: "Odia & English Collection",
    desc: "A rich selection of books in both Odia and English — covering literature, science, history, and more — ensuring every child finds a book in their own language.",
    icon: BookOpen,
  },
  {
    title: "Spiritual Books",
    desc: "Works of Sri Aurobindo, The Mother, and great spiritual figures that nourish the inner life alongside intellectual growth.",
    icon: Sun,
  },
  {
    title: "Timeless Stories",
    desc: "A curated collection of stories — moral tales, folk narratives, biographies of saints — that uplift the spirit and awaken imagination.",
    icon: Heart,
  },
  {
    title: "Beyond the Classroom",
    desc: "The library widens thought and curiosity far beyond what any textbook can offer, sparking a lifelong love of reading and self-discovery.",
    icon: Globe,
  },
];

const qualities = [
  "A quiet, calm atmosphere that fosters deep concentration and love of reading",
  "Encourages self-study and independent inquiry — children learn to seek knowledge on their own",
  "Curiosity and imagination nurtured through access to diverse genres and subjects",
  "Reading habits built from an early age through regular library periods for every class",
  "A space of inspiration where a child's inner world can grow alongside their outer learning",
];

const Library = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities" }, { label: "Library" }]} />
      <h1 className="page-title">Library</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <BookOpen size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The library serves as a quiet centre of knowledge and inspiration, offering a rich collection of Odia, English, and spiritual books, along with timeless stories that nourish the mind and uplift the spirit.
          </p>
          <p>
            It encourages reading habits, self-study, curiosity, imagination, and the widening of thought beyond the classroom.
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="mb-10 content-card bg-gradient-to-r from-primary/10 to-amber-50 border border-primary/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center shrink-0">
          <Lightbulb size={22} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-foreground text-lg mb-1">A Centre of Knowledge & Inspiration</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            More than a room of books — a space where the habit of thinking, questioning, and discovering is cultivated in every child.
          </p>
        </div>
      </div>

      {/* Four highlights */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Sparkles size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Our Collection</h2>
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
          <h2 className="font-display text-xl font-semibold">What the Library Nurtures</h2>
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
          "The wider and richer our mental field, the better can the inner being express and perfect itself."
        </p>
        <p className="text-sm font-semibold text-primary">— Sri Aurobindo</p>
      </div>
    </div>
  </Layout>
);

export default Library;
