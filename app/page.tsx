import { Navbar } from "@/components/layout/navbar";
import { ProjectsScroller } from "@/components/layout/projectsScroller";
import TechBadge from "@/components/layout/techBadges";
import Work from "@/components/layout/work";
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
        <div className=" px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          <h2 className=" text-sm font-semibold tracking-widest text-neutral-400">
            WORK & CONTRIBUTION
          </h2>
          <Work />
        </div>
      </section>
      <section className="mt-10">
        <div className=" px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          <h2 className=" text-sm font-semibold tracking-widest text-neutral-400">
            TECH
          </h2>
          <TechBadge />
        </div>
      </section>
      <section className="mt-10">
        <div className="px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          <h2 className="py-2 text-sm font-semibold tracking-widest text-neutral-400 ">
            ABOUT
          </h2>
          <p className=" text-sm text-accent-foreground dark:text-neutral-400">I'm drawn to the part of building where things break, don't make sense, and force you to slow down and think. I mostly enjoy working on backend problems, where half-baked logic simply doesn't work and understanding what you're writing actually matters. I don't care much for fake signals or surface-level polish  if I can't understand my own code after some time, I consider it a failure.</p>
        </div>
      </section>

      <section className="py-10 mt-2">
        <div className="px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89">
          <h2 className=" text-sm font-semibold tracking-widest text-neutral-400 ">
            CONTACT
          </h2>
          <div className="mt-4 ">
            <Link href={"mailto:jayeshkhuman121@gmail.com"} target="_blank"><Mail className="border text-muted-foreground rounded-full h-9 w-9 p-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
