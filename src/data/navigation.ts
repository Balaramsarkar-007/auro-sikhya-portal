export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { title: "Home", path: "/" },
  {
    title: "About Us", path: "/about",
    children: [
      { title: "Our Vision & Mission", path: "/about/vision-mission" },
      { title: "Our Parent Organization", path: "/about/parent-organization" },
      { title: "History of the School", path: "/about/history" },
      { title: "Principal's Message", path: "/about/principal-message" },
      { title: "Aims & Objectives", path: "/about/aims-objectives" },
    ],
  },
  {
    title: "Integral Education", path: "/integral-education",
    children: [
      { title: "Overview", path: "/integral-education/overview" },
      { title: "Physical Education", path: "/integral-education/physical" },
      { title: "Vital Education", path: "/integral-education/vital" },
      { title: "Mental Education", path: "/integral-education/mental" },
      { title: "Psychic Education", path: "/integral-education/psychic" },
      { title: "Spiritual Education", path: "/integral-education/spiritual" },
      { title: "Teaching Method", path: "/integral-education/teaching-method" },
    ],
  },
  {
    title: "Facilities", path: "/facilities",
    children: [
      { title: "Classrooms", path: "/facilities/classrooms" },
      { title: "Hostel", path: "/facilities/hostel" },
      { title: "Mess", path: "/facilities/mess" },
      { title: "Library", path: "/facilities/library" },
      { title: "Playground", path: "/facilities/playground" },
      { title: "Labs", path: "/facilities/labs" },
      { title: "Other Facilities", path: "/facilities/other" },
    ],
  },
  {
    title: "Academics", path: "/academics",
    children: [
      { title: "Curriculum", path: "/academics/curriculum" },
      { title: "Classes & Programs", path: "/academics/classes-programs" },
      { title: "Examination & Evaluation", path: "/academics/examination" },
      { title: "Academic Calendar", path: "/academics/calendar" },
      { title: "Rules & Guidelines", path: "/academics/rules" },
    ],
  },
  {
    title: "Admissions", path: "/admissions",
    children: [
      { title: "Admission Process", path: "/admissions/process" },
      { title: "Eligibility", path: "/admissions/eligibility" },
      { title: "Fee Structure", path: "/admissions/fee-structure" },
      { title: "Download Forms", path: "/admissions/download-forms" },
    ],
  },
  {
    title: "Events & Activities", path: "/events",
    children: [
      { title: "Co-curricular Activities", path: "/events/co-curricular" },
      { title: "Sports & Physical Training", path: "/events/sports" },
      { title: "Cultural Programs", path: "/events/cultural" },
      { title: "Events & Celebrations", path: "/events/celebrations" },
    ],
  },
  {
    title: "Gallery", path: "/gallery",
    children: [
      { title: "Photo Gallery", path: "/gallery/photos" },
      { title: "Video Gallery", path: "/gallery/videos" },
    ],
  },
  {
    title: "Notice & Publications", path: "/notices",
    children: [
      { title: "Announcements", path: "/notices/announcements" },
      { title: "Circulars", path: "/notices/circulars" },
      { title: "Events Updates", path: "/notices/events-updates" },
      { title: "eBooks", path: "/notices/ebooks" },
      { title: "Magazines", path: "/notices/magazines" },
    ],
  },
  { title: "Contact Us", path: "/contact" },
];
