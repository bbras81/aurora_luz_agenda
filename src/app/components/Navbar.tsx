import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mt-4 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo Terapia Holística.png"
              alt="Aurora Luz AI Logo"
              width={200}
              height={100}
              className="w-auto"
            />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-4" />
      </div>
    </nav>
  );
};

export default Navbar;