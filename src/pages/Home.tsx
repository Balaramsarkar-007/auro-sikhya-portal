import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { BookOpen, Users, Camera, Bell, Award, Calendar, ArrowRight, GraduationCap, Heart } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative saffron-gradient py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Sri Aurobindo Purnanga<br />Sikhya Kendra
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto font-body">
            Nurturing the complete being — body, mind, and spirit — through the integral education philosophy of Sri Aurobindo and The Mother.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions/process" className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <Link to="/about/vision-mission" className="inline-flex items-center gap-2 border-2 border-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Explore Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, label: "Admissions", path: "/admissions/process" },
            { icon: Bell, label: "Notices", path: "/notices/announcements" },
            { icon: Camera, label: "Gallery", path: "/gallery/photos" },
            { icon: BookOpen, label: "Academics", path: "/academics/curriculum" },
          ].map(({ icon: Icon, label, path }) => (
            <Link key={path} to={path} className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <Icon size={24} className="text-accent" />
              <span className="font-semibold text-sm">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="section-title text-foreground">A School Rooted in Integral Education</h2>
            <p className="text-muted-foreground mb-4">
              Established under the guidance of Sri Aurobindo Sadhana Mandir, our school is dedicated to the holistic development of every child. We go beyond conventional academics to nurture the physical, vital, mental, psychic, and spiritual dimensions of each student.
            </p>
            <p className="text-muted-foreground mb-6">
              Our campus in Rairangpur, Mayurbhanj, Odisha provides a serene and nurturing environment where children discover their inner potential and grow into conscious, responsible individuals.
            </p>
            <Link to="/about/vision-mission" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-secondary rounded-xl p-8 text-center">
            <Heart size={48} className="text-primary mx-auto mb-4" />
            <blockquote className="font-display text-lg italic text-foreground">
              "The aim of education is not to prepare a man to succeed in life and society, but to increase his perfectibility to its utmost."
            </blockquote>
            <cite className="block mt-3 text-sm text-muted-foreground">— Sri Aurobindo</cite>
          </div>
        </div>
      </section>

      {/* Principal's Message Preview */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-foreground">Principal's Message</h2>
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
              <Users size={32} className="text-accent" />
            </div>
            <p className="text-muted-foreground italic mb-4">
              "At Sri Aurobindo Purnanga Sikhya Kendra, we believe every child carries a divine spark. Our role as educators is to provide the right environment, guidance, and love to help that spark grow into a flame of knowledge, compassion, and self-awareness."
            </p>
            <p className="font-semibold text-foreground">Dr. Ananda Mohan Das</p>
            <p className="text-sm text-muted-foreground">Principal</p>
            <Link to="/about/principal-message" className="text-primary font-semibold text-sm inline-flex items-center gap-1 mt-3 hover:gap-2 transition-all">
              Read Full Message <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-foreground text-center mb-8">Latest Announcements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { date: "Mar 10, 2025", title: "Admissions Open for 2025-26", desc: "Applications are invited for Classes I to VIII for the upcoming academic session." },
              { date: "Mar 5, 2025", title: "Annual Sports Day", desc: "The Annual Sports Day will be held on 15th March. Parents are cordially invited." },
              { date: "Feb 28, 2025", title: "Science Olympiad Results", desc: "Congratulations to our students who won prizes at the State Science Olympiad." },
            ].map((item, i) => (
              <div key={i} className="content-card hover:shadow-md transition-shadow">
                <span className="text-xs text-primary font-semibold">{item.date}</span>
                <h3 className="font-display font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/notices/announcements" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              View All Announcements <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-foreground text-center mb-8">Upcoming Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, title: "Annual Sports Day", date: "March 15, 2025" },
              { icon: BookOpen, title: "Book Fair", date: "March 22, 2025" },
              { icon: Calendar, title: "Parent-Teacher Meeting", date: "April 1, 2025" },
              { icon: Camera, title: "Cultural Fest 'Samanvay'", date: "April 10, 2025" },
            ].map(({ icon: Icon, title, date }, i) => (
              <div key={i} className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <Icon size={28} className="text-primary mx-auto mb-3" />
                <h3 className="font-display font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-foreground mb-8">Campus Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {["School Building", "Morning Assembly", "Science Lab", "Library", "Playground", "Art Room", "Cultural Event", "Sports Day"].map((title, i) => (
              <div key={i} className="aspect-square bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground text-xs font-medium p-2 text-center hover:bg-secondary/80 transition-colors">
                <div>
                  <Camera size={24} className="mx-auto mb-2 text-accent" />
                  {title}
                </div>
              </div>
            ))}
          </div>
          <Link to="/gallery/photos" className="text-primary font-semibold inline-flex items-center gap-1 mt-6 hover:gap-2 transition-all">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="sky-gradient py-12 text-center text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Begin Your Child's Integral Journey</h2>
          <p className="opacity-90 mb-6">Admissions are now open for the 2025-26 academic session. Give your child the gift of holistic education.</p>
          <Link to="/admissions/process" className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Start Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
