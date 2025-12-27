import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import CoreTechnology from "@/components/CoreTechnology";
import Profitability from "@/components/Profitability";
import SuccessProof from "@/components/SuccessProof";
import FranchiseBenefit from "@/components/FranchiseBenefit";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <CoreTechnology />
      <Profitability />
      <SuccessProof />
      <FranchiseBenefit />
      <ContactForm />
      <Footer />
    </main>
  );
}
