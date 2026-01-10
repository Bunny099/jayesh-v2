import { Badge } from "../ui/badge"

const coreTech = ["Next.js", "React", "TypeScript", "JavaScript"]
const backendTech = ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB"]
const infraTech = ["Docker", "GitHub", "Vercel", "AWS", "OAuth"]

export default function TechBadge() {
    return (
        <div className=" mt-3 flex flex-col gap-6">
            <div>
                <p className="text-sm text-muted-foreground">
                    I primarily build modern web applications using
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {coreTech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">
                    On the backend, I focus on APIs, data modeling, and auth with
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {backendTech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-sm text-muted-foreground">
                    For shipping and infrastructure, I work with
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {infraTech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

        </div>
    )
}
