import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Link } from "react-router-dom";
import { Brain, Heart, Flame, Sun, Sparkles, Dumbbell, ArrowRight } from "lucide-react";

const IntegralOverview = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Overview" }]} />
      <h1 className="page-title">Integral Education</h1>

      {/* Intro card */}
      <div className="content-card mb-6">
        <p className="text-muted-foreground mb-3">The holistic approach to education followed here is known as Integral Education. It is essentially a preparatory and collective work — by the organizers, teachers, students and their parents — with a view to the all-round development of human individuals for the next evolutionary leap beyond man.</p>
      </div>

      {/* Quotes */}
      <div className="space-y-5 mb-10">
        <div className="content-card border-l-4 border-primary pl-5">
          <p className="text-muted-foreground italic mb-3">"Education to be complete must have five principal aspects corresponding to the five principal activities of the human being: the physical, the vital, the mental, the psychic and the spiritual. Usually, these phases of education succeed each other in a chronological order following the growth of the individual. This, however, does not mean that the one should replace the other but that all must continue, completing one another, till the end of his life."</p>
          <p className="text-sm font-semibold text-primary">— The Mother</p>
        </div>
        <div className="content-card border-l-4 border-primary pl-5">
          <p className="text-muted-foreground italic mb-3">"…The truth we seek is made up of four major aspects: Love, Knowledge, Power and Beauty. These four attributes of the Truth will express themselves spontaneously in our being. The psychic will be the vehicle of true and pure love, the mind will be the vehicle of infallible knowledge, the vital will manifest an invincible power and strength and the body will be the expression of perfect beauty and perfect harmony."</p>
          <p className="text-sm font-semibold text-primary">— The Mother</p>
        </div>
      </div>

      <h2 className="section-title text-center mb-8">The Five Aspects of Education</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Dumbbell, title: "Physical Education", path: "/integral-education/physical", color: "text-primary", desc: "Development of the body through exercise, sports, hygiene, and discipline." },
          { icon: Flame, title: "Vital Education", path: "/integral-education/vital", color: "text-lotus", desc: "Training of the emotions, feelings, and life-energies for mastery and balance." },
          { icon: Brain, title: "Mental Education", path: "/integral-education/mental", color: "text-accent", desc: "Cultivation of the intellect, concentration, memory, and analytical skills." },
          { icon: Heart, title: "Psychic Education", path: "/integral-education/psychic", color: "text-primary", desc: "Awakening the inner soul and developing intuition and inner guidance." },
          { icon: Sun, title: "Spiritual Education", path: "/integral-education/spiritual", color: "text-gold", desc: "Opening to higher consciousness and discovering one's true nature." },
          { icon: Sparkles, title: "Teaching Method", path: "/integral-education/teaching-method", color: "text-accent", desc: "Our unique approach to implementing integral education in the classroom." },
        ].map(({ icon: Icon, title, path, color, desc }) => (
          <Link key={path} to={path} className="content-card hover:shadow-md transition-shadow group">
            <Icon size={32} className={`${color} mb-3`} />
            <h3 className="font-display font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{desc}</p>
            <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default IntegralOverview;
