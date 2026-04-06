const announcements = [
  "📢 Admissions open for 2025-26 academic session — Apply Now!",
  "🏆 Our students won State-level Science Olympiad — Congratulations!",
  "📅 Annual Sports Day on 15th March 2025 — All parents are invited.",
  "📚 New library books collection added — Visit the library today!",
  "🎭 Cultural Fest 'Samanvay' scheduled for April 2025.",
];

const AnnouncementTicker = () => {
  return (
    <div className="saffron-gradient text-primary-foreground py-1.5 overflow-hidden text-sm">
      <div className="animate-ticker whitespace-nowrap inline-block">
        {announcements.map((a, i) => (
          <span key={i} className="mx-8">{a}</span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementTicker;
