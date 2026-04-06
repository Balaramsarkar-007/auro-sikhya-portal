import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { BookOpen } from "lucide-react";
const Library = () => (
  <FacilityPageTemplate title="Library" icon={<BookOpen size={36} className="text-accent" />}
    intro="Our library is the heart of the school's academic life. With a growing collection of over 5,000 books, it serves as a resource center for students, teachers, and staff."
    features={[
      { title: "Rich Collection", desc: "Books covering all subjects, age-appropriate fiction, encyclopedias, reference books, and works of Sri Aurobindo and The Mother. New titles are added regularly." },
      { title: "Reading Room", desc: "A quiet, well-lit reading area with comfortable seating encourages students to develop a habit of reading. Newspapers and magazines are available daily." },
      { title: "Digital Resources", desc: "A small collection of e-books and educational CDs/DVDs supplements the physical collection. Plans for a fully digital library section are underway." },
      { title: "Library Hours", desc: "Open from 8 AM to 5 PM on all school days. Each class has a designated library period, and students can borrow up to 2 books at a time for one week." },
    ]} />
);
export default Library;
