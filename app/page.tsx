import { Navbar } from "@/components/layout/navbar";
import { ProjectsScroller } from "@/components/layout/projectsScroller";

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

    </div>
  );
}
