import Navbar from "./components/LandingPage_Component/Navbar";
import HeroSection from "./components/LandingPage_Component/HeroSection";
import InvestmentSection from "./components/LandingPage_Component/InvestmentSection";
import SavingsSection from "./components/LandingPage_Component/SavingsSection";
import HowItWorks from "./components/LandingPage_Component/HowItWorks";
import TestimonialsSection from "./components/LandingPage_Component/TestimonialsSection";
import FAQsSection from "./components/LandingPage_Component/FAQsSection";
import FooterSection from "./components/LandingPage_Component/FooterSection";
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
