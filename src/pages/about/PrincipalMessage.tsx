import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Users, Quote } from "lucide-react";

const PrincipalMessage = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "Principal's Message" }]} />
      <h1 className="page-title">Principal's Message</h1>

      <div className="content-card max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="shrink-0 text-center">
            <div className="w-32 h-32 rounded-lg bg-secondary flex items-center justify-center mx-auto">
              <Users size={48} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold mt-3">Nirupama Chaini</h3>
            <p className="text-sm text-muted-foreground">Principal</p>
          </div>
          <div>
            <Quote size={32} className="text-primary/30 mb-2" />
            <div className="space-y-4 text-muted-foreground">
              <p>Dedicated to the noble cause of Integral Education as envisioned by Sri Aurobindo and The Mother, our school stands as an experimental centre striving, with humility and sincerity, to prepare the children, the budding souls for the blossoming of a new consciousness and a new life.</p>
              <p>Our endeavour is to awaken the hidden potentials within each child and help them grow towards their highest perfection by creating a harmonious and inspiring atmosphere of learning. We seek the holistic development of every student — Physical, Vital, Mental, Psychic, and Spiritual — so that they may become balanced individuals and conscious instruments of the future.</p>
              <p>Though our resources may be modest, our aspiration is great. With steadfast faith and collective effort, we continue to move forward toward this luminous and glorious goal.</p>
              <p>I earnestly appeal for the cooperation and collaboration of all — present and former students, teachers, parents, Managing Committee members and well-wishers of the school — for the fulfillment of this grand mission. Let us come together in unity, goodwill, and dedication to ensure the integral progress of our institution on the path of perfection.</p>
              <p>Let us also remember with deep gratitude that at the inception of the school in 1974, The Mother and Sri Aurobindo have guided and blessed this institution, showering their infinite Grace upon us. Whoever has entered this sacred atmosphere must have surely felt the Divine Presence vibrating in every corner of the campus.</p>
              <p>May we prove worthy of manifesting this mighty mission in our lives and actions. May these luminous words of the Mother forever inspire us, guide us, and propel us toward ever higher achievements.</p>
              <p className="font-semibold text-foreground">With warm regards and blessings,<br />Nirupama Chaini<br /><span className="font-normal text-muted-foreground">Principal</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PrincipalMessage;
