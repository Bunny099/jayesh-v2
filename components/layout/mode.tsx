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
  return (<>

    <Button variant={"outline"} size="icon" className="rounded-full hover:cursor-pointer" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>

      {resolvedTheme === "dark" ? (<Sun className="h-6 w-6 text-foreground" />) : (<Moon className="h-6 w-6 text-foreground" />
      )}
    </Button>

  </>
  )
}
