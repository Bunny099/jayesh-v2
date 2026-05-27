import { Badge } from "../ui/badge"

const backendTech = [
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "REST APIs"
]

const systemTech = [
  "Docker",
  "Webhooks",
  "Authentication",
  "GitHub Apps",
  "Transactions"
]

const frontendTech = [
  "Next.js",
  "React",
  "Tailwind CSS"
]

export default function TechBadge() {
    return (
        <div className=" mt-3 flex flex-col gap-6">
            <div>
                <p className="text-sm text-muted-foreground">
                    I primarily work on backend systems, APIs, transactional workflows, and developer tooling using
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
                    I frequently build authentication systems, webhook integrations, and production-oriented backend workflows with
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {systemTech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-sm text-muted-foreground">
                    For frontend and product interfaces, I use
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {frontendTech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

        </div>
    )
}
