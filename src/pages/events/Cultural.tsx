import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Music } from "lucide-react";

const Cultural = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Events & Activities", path: "/events/co-curricular" }, { label: "Cultural Programs" }]} />
      <h1 className="page-title">Cultural Programs</h1>
      <div className="content-card mb-8">
        <Music size={36} className="text-primary mb-3" />
        <p className="text-muted-foreground">Cultural programs at Sri Aurobindo Purnanga Sikhya Kendra celebrate the rich heritage of Indian culture while encouraging creative expression. These programs play a vital role in the vital and aesthetic education of students.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "Samanvay – Annual Cultural Fest", desc: "A three-day extravaganza featuring dance, drama, music, art exhibition, and literary events. Students from all classes participate and showcase their talents." },
          { title: "Independence Day & Republic Day", desc: "Patriotic programs with flag hoisting, cultural performances, speeches, and community gatherings celebrate the spirit of the nation." },
          { title: "Sri Aurobindo's Birthday (August 15)", desc: "A special day of meditation, readings from Sri Aurobindo's works, devotional music, and community meals mark this significant occasion." },
          { title: "Festival Celebrations", desc: "Dussehra, Diwali, Saraswati Puja, and other festivals are celebrated with cultural programs, art activities, and community feasts." },
        ].map((e, i) => (
          <div key={i} className="content-card">
            <h3 className="font-display text-lg font-semibold mb-2">{e.title}</h3>
            <p className="text-muted-foreground text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Cultural;
