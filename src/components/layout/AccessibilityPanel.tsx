import { useState } from "react";
import { Eye, Type, Sun } from "lucide-react";

const AccessibilityPanel = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const changeFontSize = (delta: number) => {
    const newSize = Math.min(24, Math.max(12, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  return (
    <div className="flex items-center gap-1">
      <button onClick={() => changeFontSize(-2)} className="p-1.5 rounded hover:bg-muted text-xs font-bold" title="Decrease font size">A-</button>
      <button onClick={() => changeFontSize(2)} className="p-1.5 rounded hover:bg-muted text-sm font-bold" title="Increase font size">A+</button>
      <button onClick={toggleContrast} className="p-1.5 rounded hover:bg-muted" title="High Contrast">
        <Sun size={16} />
      </button>
    </div>
  );
};

export default AccessibilityPanel;
