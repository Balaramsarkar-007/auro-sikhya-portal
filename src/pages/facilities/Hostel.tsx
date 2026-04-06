import FacilityPageTemplate from "@/components/FacilityPageTemplate";
import { Home } from "lucide-react";
const Hostel = () => (
  <FacilityPageTemplate title="Hostel" icon={<Home size={36} className="text-primary" />}
    intro="Our residential hostel provides a home-like environment for students from distant areas. The hostel is managed by experienced wardens who ensure safety, discipline, and a warm, caring atmosphere."
    features={[
      { title: "Accommodation", desc: "Separate hostels for boys and girls with clean, well-maintained dormitories. Each room is furnished with beds, study tables, and adequate storage." },
      { title: "Supervision & Care", desc: "Resident wardens and caretakers are available 24/7. A structured daily routine includes study hours, recreation, meals, and lights-out time." },
      { title: "Recreation", desc: "Common rooms with indoor games, a small library, and TV for age-appropriate content. Weekend activities include movie screenings, sports, and nature walks." },
      { title: "Safety & Hygiene", desc: "Regular room inspections, medical check-ups, and round-the-clock security ensure the well-being and safety of all residents." },
    ]} />
);
export default Hostel;
