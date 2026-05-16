import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Heart, Quote, Target, Activity, Sparkles, Star } from "lucide-react";

const aspects = [
  { title: "Searching Within", desc: "Searching for the psychic being in oneself — turning the attention inward to discover the evolving soul.", author: "Sri Aurobindo" },
  { title: "Union & Surrender", desc: "Finding and uniting with the psychic being, handing over the charge of the entire being to the psychic so it may guide mind, life, and body.", author: null },
];

const focusPoints = [
  "Growing awareness of the psychic being and its occult work and its influence on our outward life — by an inward turning of the senses",
  "Awakening the willpower to make a persistent effort for the psychic discovery and psychic realization",
  "Taking utmost care that the psychic being — which normally remains in front of little children — is not pushed to the background with the growth of mental education",
];

const activities = [
  "Creating and keeping a psychic ambience — an atmosphere of freedom, truth, love, joy, beauty, simplicity and harmony — conducive to the growth of the psychic being",
  "Prayers and meditations",
  "Moments of silent concentration at Sri Aurobindo's Sacred Relics Centre or in the Mother's Room",
  "Weekly Sri Aurobindo study circle classes — reading and discussing illuminating words of wisdom, or telling stories depicting psychic and spiritual values",
  "Reading the biographies of saints and spiritual seekers",
  "Occasional spiritual discussions and talks on special occasions and Darshan day celebrations",
  "Programmes of devotional songs or film-shows based on God-loving or God-realised persons (Krishna-Sudama, Bhakta Salabega, Sri Ramakrishna, Swami Vivekananda, etc.)",
  "Visits to Sri Aurobindo's Ashram and other centres of Sadhana for exposure to spiritually charged atmospheres",
  "Giving spiritual orientation to all subjects of study so they point to the omnipresent Spirit — the essential reality of life and existence",
  "Making an invocation to the Supreme Consciousness before and after each class to bring the entire class under Its influence",
];

const Psychic = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Psychic Education" }]} />
      <h1 className="page-title">Psychic Education</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
          <Heart size={22} className="text-white" />
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>From a very early age, children must be taught that there is a reality within themselves, within the earth, within the universe — and that all of existence functions only as an expression of this eternal truth. Because that is the efficient basis of the universe, it is that which will ultimately triumph.</p>
          <p>The psychic being is the evolving soul of the individual, the divine portion in him which evolves from life to life, growing by its experiences until it becomes a fully conscious being. From its place behind the heart centre, the psychic being supports the mind, life and body, aiding their growth and development.</p>
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
        <div className="grid md:grid-cols-2 gap-5">
          {aspects.map((item, i) => (
            <div key={i} className="content-card border-t-4 border-primary group hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-2 -mr-2" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full saffron-gradient flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">{item.desc}</p>
              {item.author && (
                <p className="text-xs font-semibold text-primary">— {item.author}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Focus */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Activity size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Focus Areas</h2>
        </div>
        <div className="space-y-4">
          {focusPoints.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Star size={15} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="mb-2">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg saffron-gradient flex items-center justify-center shrink-0">
            <Sparkles size={18} className="text-white" />
          </div>
          <h2 className="font-display text-xl font-semibold">Activities</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {activities.map((item, i) => (
            <div key={i} className="content-card flex items-start gap-3 hover:shadow-md transition-shadow group">
              <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                <Heart size={13} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing quote */}
      <div className="mt-8 content-card border-l-4 border-primary pl-5 bg-primary/5">
        <Quote size={22} className="text-primary/30 mb-2" />
        <p className="text-muted-foreground italic mb-3">"The psychic being is the one true guide in life."</p>
        <p className="text-sm font-semibold text-primary">— The Mother</p>
      </div>
    </div>
  </Layout>
);

export default Psychic;
