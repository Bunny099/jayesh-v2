import Link from "next/link"
import { Mode } from "./mode"

export function Navbar() {
    return (
        <nav className="pt-15 ">
            <div className="flex justify-between mx-8 sm:mx-10 md:mx-20 lg:mx-50 xl:mx-89 2xl:mx-88">
                <div className="flex flex-wrap flex-col">
                    <h1 className="text-5xl sm:text-6xl font-semibold leading-tight">
                        Jayesh Khuman
                    </h1>

                    <div className="mt-4 flex flex-wrap gap-x-2 text-sm font-semibold">
                        <Link className="hover:underline" href="https://github.com/Bunny099">Github</Link>
                        <span className="text-gray-400">/</span>
                        <Link className="hover:underline" href="https://linkedin.com/in/jayeshkhuman">LinkedIn</Link>
                        <span className="text-gray-400">/</span>
                        <Link className="hover:underline" href="https://x.com/JayeshKhuman5">X</Link>
                    </div>
                </div>
                <div className="flex pt-2">
                    <Mode />
                </div>
            </div>
        </nav>
    )
}
