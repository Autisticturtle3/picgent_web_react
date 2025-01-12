"use client";

import Link from "next/link";

const Navbar: React.FC = () => {
  const handleCareerClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent navigation if the link is just for the alert
    alert("Please contact us in email");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-darkBg text-textLight">
      <div className="text-2xl font-bold">
        <Link href="./" className="hover:text-primary">
          Skyline
        </Link>
      </div>
      <div className="flex space-x-8">
        {/* Add onClick handler to Career link */}
        <Link href="./About-us" className="hover:text-primary">
          About us
        </Link>
        <a
          href="#"
          onClick={handleCareerClick}
          className="hover:text-primary cursor-pointer"
        >
          Career
        </a>
      </div>
      <Link
        href="./request-demo"
        className="px-4 py-2 bg-primary text-darkBg rounded-md hover:opacity-90"
      >
        Request Demo
      </Link>
    </nav>
  );
};

export default Navbar;
