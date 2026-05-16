import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Flame, CheckCircle, Target, Activity, Quote } from "lucide-react";

const focusPoints = [
  "Development and use of sense organs",
  "Education of the senses",
  "Cultivation of the discrimination and aesthetic sense",
  "Purification of the emotions",
  "Channelisation of vital energy in a constructive or creative way",
  "Observation of inner movements (reactions, desires, passions etc.)",
  "Growth of effective will for progress and perfection",
  "Transformation of character",
];

const activities = [
  "Games and classroom activities specially engineered for sense training",
  "Fine arts (drawing, painting, sculpture, etc.)",
  "Performing arts (music, dance, drama, etc.)",
  "Handicrafts (weaving, stitching, origami, making clay things, etc.)",
  "Wide exposure of senses to things beautiful through excursions, visits, art and craft exhibitions, etc.",
  "Meditation and spiritual education classes",
  "Reading biographies of great men and women who have obtained mastery over their character",
  "Reading or telling stories and parables illustrating higher values",
  "Educational films",
  "Personal example and counseling",
  "Stimulation for self-introspection and use of reason to control vital impulses",
];

const Vital = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Vital Education" }]} />
      <h1 className="page-title">Vital Education</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <Flame size={36} className="text-lotus shrink-0 mt-1" />
        <p className="text-muted-foreground">The vital is the fountainhead of life, the energy without which nothing can be accomplished. It is also the source of all our emotions, feelings, desires, and impulses. Purified, it can become the perfect instrument for all we have to realise in the physical world.</p>
      </div>

      {/* Quote */}
      <div className="content-card border-l-4 border-primary pl-5 mb-8">
        <Quote size={22} className="text-primary/30 mb-2" />
        <p className="text-muted-foreground italic mb-3">"The vital being in us is the seat of impulses and desires, of enthusiasm and violence, of dynamic energy and desperate depressions, of passions and revolts."</p>
        <p className="text-sm font-semibold text-primary">— The Mother</p>
      </div>

      {/* Aspects */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Target size={22} className="text-primary" />
          <h2 className="font-display text-xl font-semibold">Aspects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Development and utilisation of sense organs",
            "Becoming conscious and gradually master of one's character",
          ].map((item, i) => (
            <div key={i} className="content-card flex items-start gap-3">
              <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Focus */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={22} className="text-primary" />
          <h2 className="font-display text-xl font-semibold">Focus Areas</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {focusPoints.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="content-card bg-secondary border-none">
        <div className="flex items-center gap-2 mb-4">
          <Flame size={22} className="text-lotus" />
          <h2 className="font-display text-xl font-semibold">Activities</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {activities.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-lotus shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Vital;
