import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Sun, Quote, Flame, Layers, Star, Crown } from "lucide-react";

const pillars = [
  {
    title: "Disciplined Physical",
    desc: "A body trained in self-control and readiness — the foundation that supports all higher development.",
  },
  {
    title: "Fulfilled & Potent Vital",
    desc: "A vibrant life-force, channelled purposefully, becomes the energy for spiritual aspiration.",
  },
  {
    title: "Clear & Free Mind",
    desc: "A mind freed from confusion and prejudice can receive the light of higher consciousness without distortion.",
  },
  {
    title: "Active Psychic",
    desc: "The psychic being, awake in all parts, becomes the soul's guide — uniting all dimensions of the being.",
  },
];

const practices = [
  "Prayer — a sincere call to the Divine that opens the heart and invokes higher consciousness",
  "Yoga — integration of body, vital, mind and psychic through dedicated practice",
  "Meditation — silent communion with the inner self and the omnipresent Spirit",
  "Moments of silent concentration at Sri Aurobindo's Sacred Relics Centre",
  "Preparing an inner base through physical, vital, mental and psychic education",
  "Giving spiritual orientation to every subject of study — pointing to the omnipresent Spirit",
  "Making an invocation before and after each class to bring the class under the influence of the Supreme Consciousness",
];

const Spiritual = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Spiritual Education" }]} />
      <h1 className="page-title">Spiritual Education</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <Sun size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Spiritual education is really the culmination of the entire education process. A disciplined physical, a fulfilled and potent vital, a clear and free mind and a psychic that is active in all parts of the being is the sure basis for a life constantly evolving towards its consummation and perfection.
          </p>
          <p>
            All education in its true sense aims at a spiritual perfection, because it is spiritual perfection alone that justifies and completes life. For spirituality to be integrated into a learning programme, a base has first to be prepared — which is the whole purpose of our education here.
          </p>
        </div>
      </div>

      {/* The Four Pillars */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Layers size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">The Four Pillars of Preparation</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((item, i) => (
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

      {/* Culmination banner */}
      <div className="mb-10 content-card bg-gradient-to-r from-primary/10 to-amber-50 border border-primary/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center shrink-0">
          <Crown size={22} className="text-white" />
        </div>
        <div>
          <p className="font-display font-semibold text-foreground mb-1">The Culmination of All Education</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Spiritual perfection is not separate from life — it is the very purpose that justifies and completes every dimension of human learning and growth.
          </p>
        </div>
      </div>

      {/* Practices */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Flame size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Practices & Activities</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {practices.map((item, i) => (
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
          "Spirituality is not a high intellectuality, not idealism, not an ethical turn of mind; it is an awakening to the inner reality of our being."
        </p>
        <p className="text-sm font-semibold text-primary">— Sri Aurobindo</p>
      </div>
    </div>
  </Layout>
);

export default Spiritual;
