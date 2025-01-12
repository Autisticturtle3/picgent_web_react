import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WorkflowSection from "../../components/Workflowsection";
import HowItWorksSection from "../../components/HowItWorksSection";
import RequestDemoSection from "../../components/RequestDemoSection";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-lightBg min-h-screen text-textDark">
      <Navbar />
      <Hero />
      <WorkflowSection />
      <HowItWorksSection />
      <RequestDemoSection />
      <Footer />
      {/* Add additional sections here */}
    </div>
  );
};

export default Home;
