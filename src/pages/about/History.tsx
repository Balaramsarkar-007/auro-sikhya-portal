import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";

const History = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "History of the School" }]} />
      <h1 className="page-title">History of the School</h1>

      <div className="space-y-6">
        {[
          {
            year: "1977",
            title: "Foundation",
            desc: "Sri Aurobindo Purnanga Sikhya Kendra, Ganailo was established on 16th September, 1977 with the noble aspiration of spreading the ideals of Integral Education as envisioned by Sri Aurobindo and The Mother.",
          },
          {
            year: "Early Days",
            title: "Humble Beginnings",
            desc: "Founded as a humble yet sincere effort, the school began with modest resources and a small number of students, creating an atmosphere of discipline, harmony, simplicity, and joyful learning.",
          },
          {
            year: "Growth",
            title: "Steady Expansion",
            desc: "Guided by the blessings of Sri Aurobindo and The Mother, the institution gradually developed into a respected centre of learning in the region — expanding its facilities and strengthening its academic standards through the dedication of teachers, students, parents, and the wider community.",
          },
          {
            year: "Values",
            title: "Beyond the Classroom",
            desc: "Alongside academics, emphasis has always been placed on character building, self-discipline, physical fitness, cultural refinement, and service to society — nurturing the physical, vital, mental, psychic, and spiritual growth of every child.",
          },
          {
            year: "Legacy",
            title: "Generations Shaped",
            desc: "The school has played an important role in shaping generations of students into responsible, confident, and compassionate individuals. Many former students have carried forward the values learned here, becoming worthy citizens and contributors to society.",
          },
          {
            year: "Today",
            title: "A Living Symbol",
            desc: "Sri Aurobindo Purnanga Sikhya Kendra, Ganailo stands as a living symbol of Integral Education — combining tradition with progress, knowledge with wisdom, and outer success with inner growth. With gratitude to its pioneers, the school continues its journey towards excellence and a brighter future for coming generations.",
          },
        ].map((item, i) => (
          <div key={i} className="content-card flex gap-4">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-display font-bold text-xs text-accent text-center leading-tight px-1">{item.year}</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default History;
