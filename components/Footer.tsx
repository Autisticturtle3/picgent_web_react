import Link from "next/link";

const Footer: React.FC = () => {
    return (
      <footer className="bg-darkBg text-gray-400 py-8">
        <div className="text-center">
          <p>© 2024 Picgent</p>
          <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="./term-and-service"
            className="hover:text-primary text-sm"
          >
            Terms and service
          </Link>
          <Link
            href="./privacy-policy"
            className="hover:text-primary text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="./cookie-policy"
            className="hover:text-primary text-sm"
          >
            Cookie Policy
          </Link>
          <Link
            href="./dsar"
            className="hover:text-primary text-sm"
          >
            DSAR
          </Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  