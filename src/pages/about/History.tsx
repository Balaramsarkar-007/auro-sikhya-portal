import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Clock } from "lucide-react";

const History = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "History of the School" }]} />
      <h1 className="page-title">History of the School</h1>

      <div className="space-y-6">
        {[
          { year: "1978", title: "The Seed is Planted", desc: "A group of devotees of Sri Aurobindo, led by the founding members of Sri Aurobindo Sadhana Mandir, conceived the idea of starting a school based on integral education in the tribal heartland of Mayurbhanj." },
          { year: "1982", title: "Foundation of the School", desc: "Sri Aurobindo Purnanga Sikhya Kendra was formally established with a handful of students and a few dedicated teachers. Classes began under simple conditions with a focus on holistic learning." },
          { year: "1990", title: "Expansion and Growth", desc: "The school expanded to include classes up to Class VIII. New classrooms, a library, and a playground were added. The student strength grew to over 150." },
          { year: "2000", title: "Recognition and Affiliation", desc: "The school received recognition from the state government and began following a structured curriculum while maintaining its integral education approach." },
          { year: "2010", title: "Modern Facilities", desc: "A new science laboratory, computer room, and hostel facilities were inaugurated. The school became a residential institution catering to students from across the district." },
          { year: "2020", title: "Digital Era", desc: "Despite the challenges of the pandemic, the school adapted with digital learning tools and continued its mission of integral education. Online classes and digital resources were introduced." },
          { year: "Present", title: "A Thriving Community", desc: "Today, the school serves over 300 students with a team of 30+ dedicated educators. It stands as a model of integral education in Odisha, blending tradition with modern pedagogy." },
        ].map((item, i) => (
          <div key={i} className="content-card flex gap-4">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-display font-bold text-sm text-accent">{item.year}</span>
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
