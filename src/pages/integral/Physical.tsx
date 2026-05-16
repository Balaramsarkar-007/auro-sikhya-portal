import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Dumbbell, CheckCircle, Target, Activity, Quote } from "lucide-react";

const focusPoints = [
  "Right postures, positions, movements of the body",
  "Coordination between various parts of the being",
  "Developing flexibility, agility, grace, and balance",
  "Developing strength and stamina",
  "Balanced food and diet",
  "Cleanliness and hygienic habits",
  "Rest and sleep",
  "Regular exercise for body fitness",
  "Prevention of and resistance to diseases",
  "Developing beauty and harmony in the body",
];

const activities = [
  "Various indoor and outdoor games, sports, and tournaments",
  "Yogasanas and Pranayama (breathing exercises)",
  "Gymnastics and Malakhamb",
  "Health checkups and health awareness programmes",
];

const Physical = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: "Physical Education" }]} />
      <h1 className="page-title">Physical Education</h1>

      {/* Intro */}
      <div className="content-card mb-6 flex items-start gap-4">
        <Dumbbell size={36} className="text-primary shrink-0 mt-1" />
        <p className="text-muted-foreground">The programme of Physical Education occupies an important place in the system of Integral Education. The physical or the body is our material basis — it houses in it all other beings: the vital, the mental, and the psychic. The body is a being of habits and needs culture or training with specific objectives for its development.</p>
      </div>

      {/* Quote */}
      <div className="content-card border-l-4 border-primary pl-5 mb-8">
        <Quote size={22} className="text-primary/30 mb-2" />
        <p className="text-muted-foreground italic mb-3">"…By means of a rational and discerning physical education, we must make our body strong and supple so that it may become in the material world a fit instrument for the truth-force which wills to manifest through us."</p>
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
            "Control and discipline of the functioning of the body",
            "An integral, methodical and harmonious development of all the parts of the body",
            "Correction of defects and deformities, if there are any",
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
          <Dumbbell size={22} className="text-accent" />
          <h2 className="font-display text-xl font-semibold">Activities</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {activities.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Physical;
