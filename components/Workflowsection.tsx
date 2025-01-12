const WorkflowSection: React.FC = () => {
  const workflows = [
    {
      icon: "⚙️",
      title: "Find Any Photo, Fast",
      description:
        "With Picgent, searching your gallery is effortless. Whether it's a sunset, a birthday, or a smiling face, our AI-powered app finds it instantly. Stop scrolling—start finding! ",
    },
    {
      icon: "🚀",
      title: "Your Memories, Instantly Found",
      description:
        "Picgent uses smart AI to search your gallery by objects, people, places, or events. Just type or speak, and Picgent brings your memories to life in seconds.",
    },
    {
      icon: "⏱️",
      title: "Simplify Your Photo Search",
      description:
        "Lost in a sea of photos? Picgent is your AI-powered solution for finding the exact moment you're looking for. Search smarter, relive faster.",
    },
    {
      icon: "✨",
      title: "Turn Your Gallery into Magic",
      description:
        "Picgent transforms how you find photos. Whether it's a pet, a party, or your last vacation, let AI pinpoint your memories with ease. Rediscover your moments with Picgent!",
    },
  ];

  return (
    <section className="bg-lightBg text-textLight py-32 px-28">
      {/* Video Section with Workflows on Left and Right */}
            {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8">
        How our customers use <span className="text-primary">Picgent</span>:
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 mb-12">
        {/* Left Workflows */}
        <div className="flex flex-col gap-6 flex-1">
          {workflows.slice(0, 2).map((workflow, index) => (
            <div
              key={index}
              className="p-6 bg-[#f5e8d7] rounded-md shadow-md flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{workflow.icon}</div>
              <h3 className="text-xl text-[#5a4033] font-semibold mb-2">{workflow.title}</h3>
              <p className="text-lg text-[#4f4f4f]">{workflow.description}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="flex justify-center flex-1">
          <video
            className="w-full max-w-sm rounded-md shadow-lg"
            controls
            autoPlay
            loop
            muted
          >
            <source src="./WorkflowVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Workflows */}
        <div className="flex flex-col gap-6 flex-1">
          {workflows.slice(2).map((workflow, index) => (
            <div
              key={index}
              className="p-6 bg-[#f5e8d7] rounded-md shadow-md flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{workflow.icon}</div>
              <h3 className="text-xl text-[#5a4033] font-semibold mb-2">{workflow.title}</h3>
              <p className="text-lg text-[#4f4f4f]">{workflow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
