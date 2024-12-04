"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, HomeIcon, Icon, Link, LockIcon, LucideIcon, Search, Settings, User, Users, X,} from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSIdebarCollapsed } from "@/state";
import Home from "@/app/page";

const Sidebar=()=>{
    const [showProjects, setShowProject] = useState(true) 
    const [setPriority, setShowPriority] = useState(true)

    
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
      (state) =>state.global.isSidebarCollapsed,
  )

    const sidebarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-auto bg-white ${isSidebarCollapsed ? "w-0 hidden":"w-64"}`;

  return ( 
  <div className={sidebarClassName}
  >
    <div className="flex h-[100%] w-full flex-col justify-start">
        {/*TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3  dark:bg-black">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              CR7
            </div>
            {isSidebarCollapsed ? null : (
              <button className=" py-3" onClick={()=>{dispatch(setIsSIdebarCollapsed(!isSidebarCollapsed))}}
              >
                  <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white"></X>
              </button>
            )}
             </div>
             {/*Team*/}
             <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                <Image src="/Cr7logo.png" alt="Logo" width={40} height={40}/>
             <div>

            
             <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              CR7-Team
             </h3>
             <div className="flex items-center">
           <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
            <p className="text-xs ml-4 dark:text-gray-500">Private</p>
                </div>
             </div>
             </div>
             {/* NavBar Link*/}
             <nav className="z-10 w-full ">
              <SidebarLink icon={Home} label="Home" href="/"></SidebarLink>
             <SidebarLink icon={Briefcase} label="Timeline" href="/timeline"></SidebarLink>
             <SidebarLink icon={Search} label="Search" href="/search"></SidebarLink>
             <SidebarLink icon={Settings} label="Settings" href="/settings"></SidebarLink>
             <SidebarLink icon={User} label="Users" href="/users"></SidebarLink>
             <SidebarLink icon={Users} label="Teams" href="/teams"></SidebarLink>

             </nav>
    </div>
  </div>
  )
}

interface SidebarLinkProps{
  href: string;
  icon:React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

function SidebarLink({
  href,label, icon: Icon,
}: SidebarLinkProps) {
  const pathname = usePathname(); 
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""} justify-start px-8 py-3`}>
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200"></div>
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" ></Icon>
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
} 




export default Sidebar