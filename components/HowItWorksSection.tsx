const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "AI-Powered Search",
      features: [
        {
          title: "Find Any Photo, Instantly",
          description:
            "Tired of scrolling endlessly to find that one photo? With Picgent's AI-Powered Search, you can locate any image in your gallery in seconds. Just type or speak a keyword—like \"sunset,\" \"wedding,\" or \"puppy\"—and our advanced AI does the rest.",
        },
        {
          title: "Search Smarter, Not Harder",
          description:
            "Picgent transforms your gallery into an intelligent library. Our AI recognizes faces, objects, and moments, so you can effortlessly search for photos by description. Whether it's \"family reunion\" or \"blue dress,\" finding memories has never been this easy.",
        },
        {
          title: "Your Gallery, Your Keywords",
          description:
            "Picgent puts the power of search in your hands. Simply describe the moment you're looking for, and our AI will retrieve it in no time. From vacations to celebrations, your memories are just a keyword away.",
        },
      ],
    },
    {
      title: "Contextual Photo Recognition",
      features: [
        {
          title: "Search Beyond the Surface",
          description:
            "With Contextual Photo Recognitio0n, Picgent doesn't just see objects—it understands moments. Whether it's “sunset at the beach” or “candid family dinner,” our AI matches your search with the context of your photos for spot-on results.",
        },
        {
          title: "Find Photos That Tell a Story",
          description:
            "Looking for more than just a snapshot? Picgent's Contextual Photo Recognition captures the essence of your moments, analyzing elements like activities, places, and people. Simply describe the memory, and Picgent brings it to life.",
        },
        {
          title: "Rediscover Hidden Moments",
          description:
            "Picgent's Contextual Photo Recognition dives deep into your gallery to uncover specific memories. Whether it's “picnic under the cherry blossoms” or “New Year's fireworks,” you'll find photos you forgot you had, effortlessly.",
        },
      ],
    },
    {
      title: "Event-Based Organization",
      features: [
        {
          title: "Your Memories, Perfectly Organized",
          description:
            "Picgent takes the hassle out of sorting photos by automatically grouping them into meaningful events. From birthdays to vacations, your gallery is transformed into a timeline of your life's special moments, making it easy to relive your favorite memories.",
        },
        {
          title: "Rediscover Moments That Matter",
          description:
            "Say goodbye to messy galleries. With Event-Based Organization, Picgent categorizes your photos by events like holidays, celebrations, and milestones. Now, you can effortlessly find and revisit the moments that mean the most to you.",
        },
        {
          title: "Turn Chaos into Clarity",
          description:
            "No more endless scrolling! Picgent's Event-Based Organization smartly arranges your photos into events, so you can browse by “family reunion” or “summer trip” instead of hunting for individual pictures. Your memories, made simple.",
        },
      ],
    },
  ];

  return (
    <section className="bg-lightBg text-textLight py-20 bg-cover bg-bottom"
     style={{ backgroundImage: "url('./Howitwork.jpg')" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl text-white font-bold">How It Works</h2>
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
            className="p-6 bg-[#f5e8d7] rounded-md shadow-md flex flex-col items-start"
          >
            <h3 className="text-lg font-bold mb-4 text-[#5a4033]">
              {step.title}
            </h3>
            {step.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="mb-4">
                <h4 className="text-sm text-[#000000] font-semibold mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-[#4f4f4f]">{feature.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
