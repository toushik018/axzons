/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
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

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-end py-2 px-4 md:px-6 lg:px-40 bg-primary-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              size="sm"
              className="text-primary-600 font-semibold text-base md:text-xl leading-[25.3px]"
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
      <div className="w-full max-w-[1920px] mx-auto h-auto md:h-[110px] px-4 md:px-6 lg:px-40 py-2.5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/AXZONS_HOMECARE-Logo-2 2.png"
                alt="Axzons HomeCare Logo"
                width={150}
                height={45}
                className="w-auto h-auto md:w-[200px] md:h-[80px]"
                priority
              />
            </Link>
          </div>
          <div className="md:hidden">
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
              <SheetContent side="right">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <Image
                          src="/images/AXZONS_HOMECARE-Logo-2 2.png"
                          alt="Axzons HomeCare Logo"
                          width={150}
                          height={45}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link
                        href="/about"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          ABOUT
                        </span>
                      </Link>
                      <Link
                        href="/services"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          SERVICES
                        </span>
                      </Link>
                      <Link
                        href="/cdpap"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          CDPAP
                        </span>
                      </Link>
                      <Link
                        href="/locations"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          LOCATIONS
                        </span>
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="mt-6 px-5">
                  <Button className="w-full">REQUEST CARE</Button>
                  <Button variant="outline" className="mt-3 w-full">
                    JOIN OUR TEAM
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    className="mt-3 w-full text-purple-600"
                  >
                    <MapPin className="w-4 h-4 mr-1" /> Find Axzons locations
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-8 mt-4 md:mt-0">
          <Link
            href="/about"
            className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg lg:text-xl font-semibold uppercase leading-[25.3px]"
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg lg:text-xl font-semibold uppercase leading-[25.3px]"
          >
            SERVICES
          </Link>
          <Link
            href="/cdpap"
            className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg lg:text-xl font-semibold uppercase leading-[25.3px]"
          >
            CDPAP
          </Link>
        </div>
        <div className="hidden md:flex md:items-center gap-3 mt-4 md:mt-0">
          <div className="text-black px-3 py-2 text-lg lg:text-xl font-semibold uppercase leading-[25.3px]">
            LOCATIONS
          </div>
          <div className="rounded-3xl text-black px-3 lg:px-5 py-2 lg:py-2.5 border border-black text-sm lg:text-xl font-semibold uppercase leading-[25.3px]">
            REQUEST CARE
          </div>
          <div className="rounded-3xl text-black px-3 lg:px-5 py-2 lg:py-2.5 border border-black text-sm lg:text-xl font-semibold uppercase leading-[25.3px]">
            JOIN OUR TEAM
          </div>
        </div>
      </div>
    </nav>
  );
}
