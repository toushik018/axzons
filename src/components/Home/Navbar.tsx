"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setActiveLink("/services");
    } else if (pathname.startsWith("/cdpap")) {
      setActiveLink("/cdpap");
    } else if (pathname.startsWith("/locations")) {
      setActiveLink("/locations");
    } else if (pathname.startsWith("/join-our-team")) {
      setActiveLink("/join-our-team");
    } else {
      setActiveLink(pathname);
    }
  }, [pathname]);

  return (
    <nav className="bg-white shadow-sm">
      <div className="bg-primary-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-2 sm:py-4 flex flex-wrap items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                size="sm"
                className="text-primary-600 font-semibold text-xs sm:text-sm md:text-base"
              >
                <div className="flex items-center justify-between w-full">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <span className="mx-2 text-xl">Find Axzons locations</span>
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary-600" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100vw] sm:w-[508px] p-3 sm:p-5 bg-[#F8F3FE] border border-[#797979] rounded-b-xl">
              <div className="flex flex-col gap-3 sm:gap-5">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                  Enter your ZIP Code
                </h4>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                  <div className="flex items-center px-3 py-2 sm:py-3 bg-white border border-[#797979] rounded-md w-full sm:w-[286px]">
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full text-base sm:text-lg text-[#797979] bg-transparent outline-none"
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="flex items-center justify-center gap-2 w-full sm:w-[162px] h-[40px] sm:h-[49px]"
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="text-base sm:text-lg md:text-xl font-semibold">
                      Search
                    </span>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-[#F8F3FE] border-b-2 border-[#7E22CE] rounded-t-md w-full sm:w-[286px]"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#7E22CE]" />
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-[#7E22CE]">
                    Use Current Location
                  </span>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-grow basis-0">
          <Link href="/" className="flex-shrink-0 mr-4">
            <Image
              src="/images/AXZONS_HOMECARE-Logo-2 2.png"
              alt="Axzons HomeCare Logo"
              width={215}
              height={90}
              className="w-auto h-12 sm:h-16 lg:h-[90px]"
              priority
            />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-8">
            {["ABOUT", "SERVICES", "CDPAP"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-black hover:text-gray-700 px-2 py-2 text-sm xl:text-base 2xl:text-xl font-semibold uppercase whitespace-nowrap ${
                  activeLink === `/${item.toLowerCase()}`
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4 flex-grow basis-0 justify-end">
          <Link
            href="/locations"
            className={`text-black px-2 py-2 text-sm xl:text-base 2xl:text-xl font-semibold uppercase whitespace-nowrap ${
              activeLink === "/locations"
                ? "text-primary-600 border-b-2 border-primary-600"
                : ""
            }`}
          >
            LOCATIONS
          </Link>
          <Link href="/request-care">
            <Button
              variant={activeLink === "/request-care" ? "default" : "outline"}
              className={`h-10 px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm 2xl:text-base font-semibold uppercase whitespace-nowrap ${
                activeLink === "/request-care"
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "text-black border-black hover:bg-gray-100"
              }`}
            >
              REQUEST CARE
            </Button>
          </Link>
          <Link href="/join-our-team">
            <Button
              variant={activeLink === "/join-our-team" ? "default" : "outline"}
              className={`h-10 px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm 2xl:text-base font-semibold uppercase whitespace-nowrap ${
                activeLink === "/join-our-team"
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "text-black border-black hover:bg-gray-100"
              }`}
            >
              JOIN OUR TEAM
            </Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 overflow-y-auto max-h-screen"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="flex justify-between items-center mb-6">
                <Link href="/">
                  <Image
                    src="/images/AXZONS_HOMECARE-Logo-2 2.png"
                    alt="Axzons HomeCare Logo"
                    width={150}
                    height={45}
                    className="w-auto h-8"
                    priority
                  />
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              {["ABOUT", "SERVICES", "CDPAP", "LOCATIONS"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`block py-2 text-xl font-semibold uppercase ${
                    activeLink === `/${item.toLowerCase()}`
                      ? "text-primary-600 border-b-2 border-primary-600 inline-block"
                      : "text-black hover:text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/request-care" onClick={() => setIsOpen(false)}>
                <Button
                  variant={
                    activeLink === "/request-care" ? "default" : "outline"
                  }
                  className={`w-full h-12 rounded-full text-base font-semibold uppercase my-2 ${
                    activeLink === "/request-care"
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "border border-black text-black hover:bg-gray-100"
                  }`}
                >
                  REQUEST CARE
                </Button>
              </Link>
              <Link href="/join-our-team" onClick={() => setIsOpen(false)}>
                <Button
                  variant={
                    activeLink === "/join-our-team" ? "default" : "outline"
                  }
                  className={`w-full h-12 rounded-full text-base font-semibold uppercase my-2 ${
                    activeLink === "/join-our-team"
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "border border-black text-black hover:bg-gray-100"
                  }`}
                >
                  JOIN OUR TEAM
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
