import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
    return <div className="px-8 sm:px-10 md:px-20 lg:px-50 xl:px-89 mt-4 flex flex-col gap-8">
        {projects.map((p, i) => (
            <div key={i} className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-medium text-foreground">{p.title}</h3>
                    {p.link && (
                        <Link href={p.link} className="underline text-sm text-neutral-500 hover:text-foreground transition" target="_blank">Link</Link>
                    )}
                    {p.github && (
                        <Link href={p.github} className="underline text-sm text-neutral-500 hover:text-foreground transition" target="_blank">GitHub</Link>
                    )}
                </div>
                <p className="text-sm text-muted-foreground max-w-3xl">{p.description}</p>
                <p className="text-xs text-neutral-500">{p.tech}</p>
            </div>
        ))}
    </div>
}