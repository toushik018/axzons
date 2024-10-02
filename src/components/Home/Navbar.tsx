"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      <div className="flex justify-end py-2 px-4 md:px-6 lg:px-8 bg-primary-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              size="sm"
              className="text-primary-600 font-semibold text-sm md:text-base"
            >
              <div className="flex items-center justify-between w-full">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                <span className="mx-2">Find Axzons locations</span>
                <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>New York</DropdownMenuItem>
            <DropdownMenuItem>New Jersey</DropdownMenuItem>
            <DropdownMenuItem>Georgia</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
          <Sheet>
            <SheetTrigger asChild>
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
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-sm">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
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
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {["ABOUT", "SERVICES", "CDPAP", "LOCATIONS"].map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-6 px-5 space-y-4">
                <Button className="w-full h-10 rounded-full text-sm font-semibold uppercase">
                  REQUEST CARE
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-10 rounded-full text-sm font-semibold uppercase"
                >
                  JOIN OUR TEAM
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
