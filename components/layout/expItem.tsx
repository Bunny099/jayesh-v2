"use client"
import { MoveDownRight } from "lucide-react";
import { useState } from "react"

interface Props {
    company: String,
    role: String,
    stack: String,
    period: String,
    description: String,
}
export function ExperienceItem({ company, role, stack, period, description }: Props) {
    const [open, setOpen] = useState(false);

    return <div onClick={() => setOpen(!open)} className="group px-2 py-3 cursor-pointer">  
        <div className="flex justify-between items-start gap-6">
            <div className="max-w-100">

                <h1 className="text-sm font-medium">{company}</h1>
                <p className="pt-1 text-xs text-neutral-500">{role}{" . "}
                    <span className="text-neutral-400">{stack}</span>
                </p>

                <p className="mt-1 text-xs text-neutral-400 sm:hidden">{period}</p>

                <div className={`
              mt-2
              flex gap-2
              overflow-hidden
              transition-all
              duration-300
              text-xs
              text-neutral-400
              leading-relaxed
              ${open ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
              group-hover:max-h-32
              group-hover:opacity-100
            `}>
                    <MoveDownRight className="h-4 w-4 mt-2 shrink-0" />
                    <p>{description}</p>

                </div>
            </div>
            <p className="hidden sm:block text-xs text-neutral-400 whitespace-nowrap">{period}</p>
        </div>

    </div>
}