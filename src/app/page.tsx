import Image from "next/image";
import Navbar from "./LandingPage_Component/Navbar";
import HeroSection from "./LandingPage_Component/HeroSection";
import InvestmentSection from "./LandingPage_Component/InvestmentSection";
import SavingsSection from "./LandingPage_Component/SavingsSection";
import HowItWorks from "./LandingPage_Component/HowItWorks";
import TestimonialsSection from "./LandingPage_Component/TestimonialsSection";
import FAQsSection from "./LandingPage_Component/FAQsSection";
import FooterSection from "./LandingPage_Component/FooterSection";
export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<InvestmentSection />
			<SavingsSection />
			<HowItWorks />
			<TestimonialsSection />
			<FAQsSection />
			<FooterSection />
		</>
	);
}
