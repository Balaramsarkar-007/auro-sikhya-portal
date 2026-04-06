import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <Layout>
      <div className="page-container">
        <Breadcrumb items={[{ label: "Contact Us" }]} />
        <h1 className="page-title">Contact Us</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="content-card mb-6">
              <h2 className="section-title mb-4">Get in Touch</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3"><MapPin size={20} className="text-primary shrink-0 mt-0.5" /><div><strong className="text-foreground">Address</strong><br />Sri Aurobindo Purnanga Sikhya Kendra<br />Near Sri Aurobindo Sadhana Mandir<br />Rairangpur, Mayurbhanj - 757043<br />Odisha, India</div></div>
                <div className="flex items-start gap-3"><Phone size={20} className="text-primary shrink-0 mt-0.5" /><div><strong className="text-foreground">Phone</strong><br />+91 94371 XXXXX<br />+91 67290 XXXXX</div></div>
                <div className="flex items-start gap-3"><Mail size={20} className="text-primary shrink-0 mt-0.5" /><div><strong className="text-foreground">Email</strong><br />info@sapsk.edu.in<br />admissions@sapsk.edu.in</div></div>
                <div className="flex items-start gap-3"><Clock size={20} className="text-primary shrink-0 mt-0.5" /><div><strong className="text-foreground">Office Hours</strong><br />Mon–Sat: 9:00 AM – 5:00 PM<br />Sunday: Closed</div></div>
              </div>
            </div>
            <div className="content-card">
              <h3 className="font-display font-semibold mb-3">Location Map</h3>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                <div className="text-center"><MapPin size={32} className="mx-auto mb-2 text-accent" />Google Map — Rairangpur, Mayurbhanj, Odisha</div>
              </div>
            </div>
          </div>
          <div className="content-card">
            <h2 className="section-title mb-4">Enquiry Form</h2>
            {submitted ? (
              <div className="text-center py-12"><div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-2xl">✓</div><h3 className="font-display font-semibold text-lg mb-2">Thank You!</h3><p className="text-muted-foreground">Your enquiry has been submitted successfully. We will get back to you within 2 working days.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium mb-1">Full Name *</label><input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" placeholder="Enter your full name" /></div>
                <div><label className="block text-sm font-medium mb-1">Email Address *</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" placeholder="Enter your email" /></div>
                <div><label className="block text-sm font-medium mb-1">Phone Number</label><input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" placeholder="Enter your phone number" /></div>
                <div><label className="block text-sm font-medium mb-1">Message *</label><textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background resize-none" placeholder="Write your enquiry here..." /></div>
                <button type="submit" className="w-full saffron-gradient text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Submit Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
