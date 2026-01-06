import Link from "next/link"
import { Mode } from "./mode"
export function Navbar() {
    return <nav className="flex justify-between mt-15">
        <div className="flex flex-col  ">
            <h1 className="text-5xl font-semibold">Jayesh Khuman</h1>
            <div className="font-semibold mt-6 text-sm">
                <Link className="hover:underline" href={"https://github.com/Bunny099"}>Github</Link> <span className="text-gray-400">/ </span> 
                <Link className="hover:underline" href={"https://linkedin.com/in/jayeshkhuman"}>LinkedIn</Link> <span className="text-gray-400">/ </span>
                <Link className="hover:underline" href={"https://x.com/JayeshKhuman5"}>X</Link>
            </div>
        </div>
        <Mode/>


    </nav>
}