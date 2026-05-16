import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Brain, CheckCircle, Target, Activity, Quote, BookOpen, Lightbulb } from "lucide-react";

const aspects = [
  "Development of the power of concentration, the capacity of attention",
  "Development of the capacities of expansion, widening, complexity and richness",
  "Organisation of one's thoughts around a central idea or higher ideal",
  "Thought control",
  "Mental silence, calm and receptivity to inspiration coming from the higher regions of the being",
];

const leftFaculties = [
  "Critical thinking", "Analysis", "Reasoning", "Differentiation",
  "Comparison", "Classification", "Generalisation", "Deduction", "Inference and conclusion",
];

const rightFaculties = [
  "Comprehension", "Synthesis", "Creativity", "Command and control",
  "Judgement", "Imagination", "Memory", "Observation", "Grasp and manipulation",
];

const activities = [
  "Studies of various subjects — Languages, Mathematics, Science, History, Geography, etc.",
  "Playway method of teaching and learning (especially in lower classes)",
  "Project work and scrapbook",
  "Subject-wise exhibitions",
  "Group discussions",
  "Creative writing and literary competitions",
  "Publication of annual school magazine along with periodical wall magazines",
  "Debate and eloquence classes",
  "Library classes",
  "Memorisation and recitation of poems, Sanskrit verses, etc.",
  "Concentration, meditation, and prayer classes",
];

const Mental = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Mental Education" }]} />
      <h1 className="page-title">Mental Education</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <Brain size={36} className="text-accent shrink-0 mt-1" />
        <p className="text-muted-foreground">The words 'mind' and 'mental' are used to connote especially the part of nature which has to do with cognition, intelligence, ideas, mental or thought perceptions, reactions of thought to things, with the truly mental movements and formations, mental vision and will.</p>
      </div>

      {/* Two quotes side by side */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="content-card border-l-4 border-primary pl-5">
          <Quote size={22} className="text-primary/30 mb-2" />
          <p className="text-muted-foreground italic mb-3">"The true role of the mind is the formation and organisation of action."</p>
          <p className="text-sm font-semibold text-primary">— The Mother</p>
        </div>
        <div className="content-card border-l-4 border-primary pl-5">
          <Quote size={22} className="text-primary/30 mb-2" />
          <p className="text-muted-foreground italic mb-3">"These are the two uses of the mind: it is a controlling force, an instrument of control, and it is a power of organisation."</p>
          <p className="text-sm font-semibold text-primary">— The Mother</p>
        </div>
      </div>

      {/* Aspects */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Target size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Aspects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {aspects.map((item, i) => (
            <div key={i} className="relative content-card flex items-start gap-4 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <span className="w-8 h-8 rounded-full saffron-gradient text-white text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Focus — left vs right brain */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Activity size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Focus Areas</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Left-brain */}
          <div className="content-card border-t-4 border-accent">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Lightbulb size={16} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold">Left-brain Faculties</h3>
            </div>
            <div className="space-y-2">
              {leftFaculties.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1 border-b border-border/40 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right-brain */}
          <div className="content-card border-t-4 border-primary">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain size={16} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold">Right-brain Faculties</h3>
            </div>
            <div className="space-y-2">
              {rightFaculties.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1 border-b border-border/40 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Formative action */}
        <div className="mt-4 content-card bg-primary/5 border-primary/20 flex items-center gap-4">
          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
            <CheckCircle size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Formative Action</p>
            <p className="text-muted-foreground text-sm">Applying the cultivated faculties purposefully in work and life.</p>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="mb-2">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <BookOpen size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Activities</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-3 hover:shadow-md transition-shadow group">
              <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <BookOpen size={14} className="text-accent" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Mental;
