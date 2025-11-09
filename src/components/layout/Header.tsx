/* eslint-disable @typescript-eslint/no-explicit-any */
import { landingPageNavs } from "@src/constants/landingPageNavs";
import React, { useState } from "react";
import Button from "@src/components/button/Button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { loginWithGoogle } from "@src/firebase/authService";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [activeRef, setActiveRef] = useState<string>("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const router = useRouter()


  const handleScroll = (ref: string) => {
    const section = document.getElementById(ref);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveRef(ref);
      setMenuOpen(false)
    }
  };

  const handleLogin = async () => {
    try {
      const loggedUser = await loginWithGoogle();
      setUser(loggedUser);
      console.log("User logged in:", loggedUser);
      router.push('/admin')
    } catch (error) {
      alert("Đăng nhập thất bại!");
      console.error("Error: ", error)
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="sticky top-0 z-10 bg-white flex items-center justify-center h-22 w-screen">
        <div className="flex items-center justify-between px-4 py-4 md:py-4 max-w-300 mx-auto w-full">
          <div className="flex items-center gap-7">
            <Image
              src="/logo.png"
              alt="logo"
              width={112}
              height={27}
              className="object-cover mb-2 mr-1"
            />

            <nav className="hidden md:flex items-center gap-7 whitespace-nowrap">
              {landingPageNavs.map((nav) => (
                <button
                  key={nav.ref}
                  onClick={() => handleScroll(nav.ref)}
                  className="transition cursor-pointer"
                >
                  <span
                    className={`text-[1.125rem] font-semibold ${
                      activeRef === nav.ref
                        ? "text-blue-500"
                        : "text-black hover:text-blue-500"
                    }`}
                  >
                    {nav.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div onClick={handleLogin} className="text-[1.125rem] font-semibold cursor-pointer whitespace-nowrap">
              Đăng nhập
            </div>
            <Button variant="outline" size="md">
              Dùng thử
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white shadow-lg
               flex flex-col gap-4 px-6 py-8 z-20"
        >
          {landingPageNavs.map((nav) => (
            <button
              key={nav.ref}
              onClick={() => handleScroll(nav.ref)}
              className={`transition cursor-pointer text-left ${
                activeRef === nav.ref
                  ? "text-blue-500"
                  : "text-black hover:text-blue-500"
              }`}
            >
              <span className="text-[1.125rem] font-semibold">{nav.label}</span>
            </button>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="text-[1.125rem] font-semibold cursor-pointer">
              Đăng nhập
            </div>
            <Button variant="outline" size="md">
              Dùng thử
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
