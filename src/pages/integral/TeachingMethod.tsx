import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Sparkles, Quote, Compass, Heart, Star, BookOpen, Users } from "lucide-react";

const freeProgressPoints = [
  "Children are not left to themselves or allowed to create disorder — they remain in contact with their inner guide",
  "Discipline that emerges from within becomes a strong support in all difficult circumstances",
  "Fostering the bright spontaneity that makes all learning a joyous discovery",
  "Encouraging the inquirer and explorer hidden in every child to burst forth and orient their own development",
  "Each child is unique — no class is rowdy; every child has ample scope to express their own way of thinking, experiencing, and discovering",
];

const teacherQualities = [
  {
    title: "Love for Children",
    desc: "The main pre-requisite. A teacher is driven by genuine love, not authority. Children and teachers naturally arrive at a warm relationship — calling them 'Apa' and 'Bhai'.",
  },
  {
    title: "No Fear as Incentive",
    desc: "A teacher knows from the depth of the heart that fear is never a good incentive for progress. Understanding and loving observation replace judgment.",
  },
  {
    title: "Learning Together",
    desc: "A teacher does not lay an adult pattern of thinking on the child's mind, but learns together with the children, understanding how they experience their world.",
  },
  {
    title: "Leading by Example",
    desc: "Conscious of their own motives and actions, because a child learns mainly through example — not instruction.",
  },
];

const concreteApproach = [
  "Learning starts from concrete experiences of the child — seeing, experiencing, and experimenting before any book",
  "Knowledge is not split into isolated subjects disconnected from the child's way of life — no mere bookish approach",
  "A three-year-old is never burdened with a page of alphabet writing or number work each day",
  "This integral approach is a tremendous help for understanding and gaining insight into the working of society and the world",
];

const TeachingMethod = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Teaching Method" }]} />
      <h1 className="page-title">Teaching Method</h1>

      {/* Intro quote from Sri Aurobindo */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <Sparkles size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The teacher is not an instructor or a taskmaster — he is a helper and guide. His business is to suggest and not to impose. He does not actually train the pupil's mind; he only shows him how to perfect his instruments of knowledge and helps and encourages him in the process.
          </p>
          <p>
            He does not impart knowledge to him, he shows him how to acquire knowledge for himself.
          </p>
          <p className="text-sm font-semibold text-primary">— Sri Aurobindo</p>
        </div>
      </div>

      {/* Free Progress banner */}
      <div className="mb-10 content-card bg-gradient-to-r from-primary/10 to-amber-50 border border-primary/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center shrink-0">
          <Compass size={22} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-foreground text-lg mb-1 tracking-wide uppercase">Free Progress</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The name given by the Mother to this approach in education. It does not mean children are left to themselves — it means fostering the discipline that emerges from within.
          </p>
        </div>
      </div>

      {/* Free Progress principles */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Star size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Principles of Free Progress</h2>
        </div>
        <div className="space-y-4">
          {freeProgressPoints.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Star size={15} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Concrete learning approach */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <BookOpen size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Learning from Concrete Experience</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {concreteApproach.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-3 hover:shadow-md transition-shadow group">
              <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                <Sparkles size={13} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Teacher section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Users size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">The Teacher</h2>
        </div>
        <p className="text-xs text-muted-foreground italic mb-5 ml-12">
          "One must be a saint and hero to be a good teacher. One must be a great Yogi to become a good teacher." — The Mother
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {teacherQualities.map((item, i) => (
            <div key={i} className="content-card border-t-4 border-primary group hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-2 -mr-2" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Apa & Bhai note */}
      <div className="mb-10 content-card flex items-start gap-4 bg-amber-50/60 border border-amber-200">
        <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center shrink-0 mt-0.5">
          <Heart size={18} className="text-white" />
        </div>
        <div>
          <p className="font-display font-semibold text-foreground mb-1">Apa &amp; Bhai</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Children here do not address their teachers as Miss, Madam, or Sir. During the first month of school a warm and deep relationship naturally emerges, and children call their teachers <span className="font-semibold text-primary">'Apa'</span> and <span className="font-semibold text-primary">'Bhai'</span>. This is never imposed — it simply flowers on its own.
          </p>
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

export default TeachingMethod;
