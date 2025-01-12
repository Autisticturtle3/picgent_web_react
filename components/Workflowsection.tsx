const WorkflowSection: React.FC = () => {
    const workflows = [
      {
        icon: "⚙️",
        title: "Streamlined AWS Setup, AI-Driven Precision",
        description:
          "Let AI handle your AWS configuration while you sit back. From EC2 to S3, our intelligent system automates it all with unmatched accuracy.",
      },
      {
        icon: "🚀",
        title: "Accelerate Cloud Deployment with AI Control",
        description:
          "Transform how you manage AWS. Our AI takes the wheel, configuring your infrastructure in record time without lifting a finger.",
      },
      {
        icon: "⏱️",
        title: "Effortless Cloud Management at Your Fingertips",
        description:
          "Save hours of manual work. Our AI-driven screen control sets up your AWS environment perfectly—every time.",
      },
      {
        icon: "✨",
        title: "Smarter AWS Automation with Cutting-Edge AI",
        description:
          "Experience the future of cloud setup. With AI controlling your screen, you'll achieve seamless AWS deployment and management like never before.",
      },
    ];
  
    return (
      <section className="bg-lightBg text-textLight py-60">
        {/* Video Section */}
      <div className="flex justify-center mb-12">
        <video
          className="w-full max-w-4xl rounded-md shadow-lg"
          controls
          autoPlay
          loop
          muted
        >
          <source src="./WorkflowVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <h2 className="text-center text-3xl font-bold mb-8">
          How leading enterprises use <span className="text-primary">Skyline&apos;</span> AWS agent:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className="p-6 bg-[#11212E] rounded-md shadow-md flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{workflow.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{workflow.title}</h3>
              <p className="text-sm text-gray-300">{workflow.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WorkflowSection;
  