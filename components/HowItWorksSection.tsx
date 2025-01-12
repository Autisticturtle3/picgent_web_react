const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Automated Screen Control",
      features: [
        {
          title: "Human-Like Interaction",
          description:
            "The AI mimics user actions, navigating AWS, clicking buttons, and configuring settings seamlessly.",
        },
        {
          title: "Error-Free Execution",
          description:
            "Advanced algorithms ensure accurate, error-free configurations every time.",
        },
        {
          title: "Secure Operations",
          description:
            "All actions are encrypted, safeguarding your credentials and maintaining cloud security.",
        },
      ],
    },
    {
      title: "Dynamic Configuration Adjustment",
      features: [
        {
          title: "Adaptive Error Handling",
          description:
            "The AI detects and resolves configuration issues in real time, ensuring smooth and uninterrupted setup processes.",
        },
        {
          title: "Real-Time Resource Optimization",
          description:
            "It dynamically adjusts settings, such as instance types or storage configurations, based on workload requirements to maximize performance and minimize costs.",
        },
        {
          title: "Intelligent Decision-Making",
          description:
            "Using built-in logic and machine learning, the AI makes adjustments that align with best practices, adapting to your specific needs without manual intervention.",
        },
      ],
    },
    {
      title: "Real-Time AWS Update Integration",
      features: [
        {
          title: "Continuous Monitoring",
          description:
            "We actively tracks AWS updates, including new features, service changes, and API revisions, ensuring the agent is always aware of the latest developments.",
        },
        {
          title: "Automatic Workflow Adjustments",
          description:
            "When AWS introduces changes, the AI modifies its workflows in real time to incorporate new capabilities or adapt to updated requirements.",
        },
        {
          title: "Seamless Compatibility",
          description:
            "The system ensures all configurations remain functional, leveraging the latest AWS updates without disrupting your existing setup or services.",
        },
      ],
    },
  ];

  return (
    <section className="bg-lightBg text-textLight py-20 bg-cover bg-center"
    // style={{ backgroundImage: "url('./Howitwork.jpg')" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="flex justify-center mt-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl text-lightBg shadow-lg">
            💡 {/* Replace with an actual icon */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-[#11212E] rounded-md shadow-md flex flex-col items-start"
          >
            <h3 className="text-lg font-bold mb-4 text-primary">
              {step.title}
            </h3>
            {step.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="mb-4">
                <h4 className="text-sm font-semibold mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
