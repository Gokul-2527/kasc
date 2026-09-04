import BackToTop from "../../components/common/BackToTop";
import WhatsAppButton from "../../components/common/WhatsAppButton";
import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    default: "Kaamadhenu Arts and Science College | Sathyamangalam",
    template: "%s | Kaamadhenu Arts and Science College",
  },
  description: "test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[var(--color-text)] antialiased">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
