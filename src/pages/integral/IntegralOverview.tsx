import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Link } from "react-router-dom";
import { Brain, Heart, Flame, Sun, Sparkles, Dumbbell, ArrowRight } from "lucide-react";

const IntegralOverview = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Overview" }]} />
      <h1 className="page-title">Integral Education</h1>

      <div className="content-card mb-8">
        <p className="text-muted-foreground mb-3">Integral Education, as envisioned by Sri Aurobindo and The Mother, is a comprehensive approach to the development of the human being. It addresses five principal aspects of the personality: Physical, Vital, Mental, Psychic, and Spiritual.</p>
        <p className="text-muted-foreground">Unlike conventional education that focuses primarily on intellectual development, integral education recognizes that a human being is a complex entity with multiple dimensions, each of which needs to be nurtured and developed harmoniously.</p>
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
