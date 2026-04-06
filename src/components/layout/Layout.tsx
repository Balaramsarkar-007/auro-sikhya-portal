import { ReactNode } from "react";
import AnnouncementTicker from "./AnnouncementTicker";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementTicker />
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Layout;
