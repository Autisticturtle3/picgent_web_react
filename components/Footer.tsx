const Footer: React.FC = () => {
    return (
      <footer className="bg-darkBg text-gray-400 py-8">
        <div className="text-center">
          <p>© 2024 Skyline</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="./terms-of-service"
              className="hover:text-primary text-sm"
            >
              Terms of Service
            </a>
            <a href="./privacy-policy" className="hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="./cookie-policy" className="hover:text-primary text-sm">
              Cookie Policy
            </a>
            <a href="./dsar" className="hover:text-primary text-sm">
              DSAR
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  