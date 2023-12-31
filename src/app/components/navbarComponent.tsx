"use client";

import React, { useEffect } from "react";

import { Navbar, Typography, Button, IconButton, Collapse, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>

      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Typography variant="small" color="blue-gray" style={{ cursor: "pointer" }}>
            Dropdown Menu
          </Typography>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link href="/#">Menu Item 1 </Link>
          </MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className=" fixed top-0 left-0 z-50 h-max max-w-full rounded-none  py-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 container mx-auto">
          {/* <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            This is logo
          </Typography> */}

          <Image src="/next.svg" height={100} width={100} alt="Logo"></Image>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
