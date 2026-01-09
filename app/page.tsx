import { Navbar } from "@/components/layout/navbar";
import { ProjectsScroller } from "@/components/layout/projectsScroller";
import TechBadge from "@/components/layout/techBadges";
import { Mail } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full  ">
      <Navbar />
      <section className="mt-10">
        <h2 className=" text-sm font-semibold tracking-widest text-neutral-400 px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          THINGS I MADE
        </h2>

      </section>
      <section>
        <ProjectsScroller />
      </section>

    <section className="mt-10">
      <h2 className=" text-sm font-semibold tracking-widest text-neutral-400 px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          WORK | CONTRIBUTION
        </h2>
      
    </section>
    <section className="mt-10">
      <h2 className=" text-sm font-semibold tracking-widest text-neutral-400 px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          TECH
        </h2>
        <TechBadge/>
      
    </section>
     <section className="mt-10">
      <h2 className=" text-sm font-semibold tracking-widest text-neutral-400 px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          ABOUT
        </h2>
      
    </section>
     <section className="py-10 ">
      <h2 className=" text-sm font-semibold tracking-widest text-neutral-400 px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          CONTACT
        </h2>
        <div className="px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89 mt-4 ">
          <Link href={"mailto:jayeshkhuman121@gmail.com"} target="_blank"><Mail  className="border text-muted-foreground rounded-full h-9 w-9 p-2"/></Link>
          
        </div>
      
    </section>
    </div>
  );
}
