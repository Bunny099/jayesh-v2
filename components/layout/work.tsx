import { experience } from "@/data/experience"
import { ExperienceItem } from "./expItem"
export default function Work() {
    return (
        <div className="mt-2">
            {experience.map((exp)=>(
                <ExperienceItem key={exp.company} {...exp}/>
            ))}
        </div>
    )
}
