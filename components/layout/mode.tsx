"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Mode() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);
  if (!mounted) return null;
  return ( <>

    <Button variant={"outline"} size="icon" className="relative rounded-full hover:cursor-pointer" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all  dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:scale-100 dark:rotate-0"/>  
    </Button>
  
  </>
  )
}
