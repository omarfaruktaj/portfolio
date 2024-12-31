"use client";

import { BookTextIcon } from "@/icons/book-text-icon";
import { BriefcaseIcon } from "@/icons/Briefcase-icon";
import { ChevronsLeftRightIcon } from "@/icons/code-icon";
import { HomeIcon } from "@/icons/home-icon";
import { MessageCircleIcon } from "@/icons/message-icon";
import { UserIcon } from "@/icons/user-icon";
import { FloatingNav } from "../ui/floating-navbar";
export function Navbar() {
  const navItems = [
    { name: "Home", link: "/", label: <HomeIcon name="Home" /> },
    {
      name: "About",
      link: "/#about",
      label: <UserIcon name="About" />,
    },
    {
      name: "Skills",
      link: "/#skills",
      label: <ChevronsLeftRightIcon name="Skills" />,
    },
    {
      name: "Projects",
      link: "/projects",
      label: <BriefcaseIcon name="Projects" />,
    },
    {
      name: "Blogs",
      link: "/blogs",
      label: <BookTextIcon name="Blogs" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      label: <MessageCircleIcon name="Contact" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
