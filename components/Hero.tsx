const Hero: React.FC = () => {
    return (
      <div 
      className="flex flex-col items-center text-center bg-darkBg text-textLight py-60 px-4 bg-cover bg-center"
      // style={{ backgroundImage: "url('./Heroback.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Skyline <span className="text-primary">for AWS Setup</span>
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Skyline provides the easiest experience to set up your AWS component
        </p>
        <a
          href="./request-demo"
          className="px-6 py-3 bg-primary text-darkBg rounded-md font-semibold hover:opacity-90"
        >
          Request Demo
        </a>
      </div>
    );
  };
  
  export default Hero;
  