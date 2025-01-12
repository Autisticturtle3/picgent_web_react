const Hero: React.FC = () => {
    return (
      <div 
      className="flex flex-col inset-0 items-center text-center bg-darkBg text-textLight py-60 px-4 bg-cover bg-center"
       style={{ backgroundImage: "url('./Heroback.jpg')" }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">
          Picgent, <span className="text-primary">find your best moment</span>
        </h1>
        <p className="text-lg text-white max-w-2xl mb-8">
        Find the perfect photo in seconds with Picgent, your AI-powered gallery assistant.
        </p>
        <a
          href="./request-demo"
          className="px-6 py-3 bg-primary text-white rounded-md font-semibold hover:opacity-90"
        >
          Request Demo
        </a>
      </div>
    );
  };
  
  export default Hero;
  