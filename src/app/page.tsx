import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CoreTechnology from "@/components/CoreTechnology";
import AutoGrillSystem from "@/components/AutoGrillSystem";
import Profitability from "@/components/Profitability";
import SuccessProof from "@/components/SuccessProof";
import MenuSection from "@/components/MenuSection";
import StartupCost from "@/components/StartupCost";
import StartupProcess from "@/components/StartupProcess";
import FranchiseBenefit from "@/components/FranchiseBenefit";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <CoreTechnology />
      <AutoGrillSystem />
      <Profitability />
      <SuccessProof />
      <MenuSection />
      <StartupCost />
      <StartupProcess />
      <FranchiseBenefit />
      <ContactForm />
      <Footer />
    </main>
  );
}
