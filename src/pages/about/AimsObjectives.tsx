import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Target, Quote } from "lucide-react";

const quotes = [
  {
    text: "We are not here to repeat what others have done, but to prepare ourselves for the blossoming of a new consciousness and a new life.",
    author: "The Mother",
  },
  {
    text: "The aim of education is not to prepare a man to succeed in life and society, but to increase his perfectibility to its utmost.",
    author: "The Mother",
  },
  {
    text: "The new aim is to help the child to develop his intellectual, aesthetic, emotional, moral, spiritual being and his communal life and impulses out of his own temperament and capacities – a very different object from that of the old education which was simply to pack so much stereotyped knowledge into his resisting brain and impose a stereotyped rule of conduct on his struggling and dominated impulses.",
    author: "Sri Aurobindo",
  },
];

const AimsObjectives = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "Aims & Objectives" }]} />
      <h1 className="page-title">Aims & Objectives</h1>

      {/* Intro card */}
      <div className="content-card mb-8">
        <div className="flex items-start gap-4">
          <Target size={40} className="text-primary shrink-0 mt-1" />
          <div className="space-y-3 text-muted-foreground">
            <p>The aim of the Institute is the humble implementation of the ideals of Integral Education as enunciated by Sri Aurobindo and The Mother in order to prepare the children for a higher and better life — to help them become the men of a new race.</p>
            <p><span className="font-semibold text-foreground">Total perfection is the ultimate aim.</span> What we set before us as our ideal is the Divine Life upon earth.</p>
            <p>In the real sense, ours is an attempt at evolving newer ways of learning and thinking — an attempt towards going beyond the structural schooling into the joyful freedom of inner growth, the growth that would flow from within to without.</p>
          </div>
        </div>
      </div>

      {/* Inspirational quotes */}
      <h2 className="font-display text-xl font-semibold mb-5 text-foreground">In the Words of the Masters</h2>
      <div className="space-y-5 mb-10">
        {quotes.map((q, i) => (
          <div key={i} className="content-card border-l-4 border-primary pl-5">
            <Quote size={22} className="text-primary/30 mb-2" />
            <p className="text-muted-foreground italic mb-3">"{q.text}"</p>
            <p className="text-sm font-semibold text-primary">— {q.author}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default AimsObjectives;
