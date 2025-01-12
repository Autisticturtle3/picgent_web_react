const RequestDemoSection: React.FC = () => {
    return (
      <section className="bg-darkBg text-textLight py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Request a Demo</h2>
          <p className="text-[#4f4f4f] mt-4 max-w-xl mx-auto">
          Discover your past, powered by the future. Picgent redefines how you connect with your memories, making every photo easy to find and relive. With advanced AI technology at your fingertips, your gallery becomes a window to the moments that matter most. The future of photo searching is here—rediscover your memories with Picgent.
          </p>
          <div className="mt-6">
            <a
              href="./request-demo"
              className="px-6 py-3 bg-primary text-darkBg rounded-md font-semibold hover:opacity-90 inline-block"
            >
              Request Demo
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative">
            {/* Decorative grid with icon */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-darkBg shadow-lg">
                💡 {/* Replace with your icon */}
              </div>
            </div>
            <div className="grid grid-cols-12 gap-1 w-full h-20">
              {Array.from({ length: 12 }).map((_, row) =>
                Array.from({ length: 12 }).map((_, col) => (
                  <div
                    key={`${row}-${col}`}
                    className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                  ></div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RequestDemoSection;
  