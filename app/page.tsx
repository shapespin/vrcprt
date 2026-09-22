"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // The prebuilt Vite/React bundle mounts into #root and injects the Services
    // section. React won't execute a rendered module <script>, so append it
    // imperatively to guarantee the module runs exactly once.
    if (document.getElementById("lv-bundle")) return
    const s = document.createElement("script")
    s.id = "lv-bundle"
    s.type = "module"
    s.crossOrigin = "anonymous"
    s.src = "/assets/index-BLb08Oxi.js"
    document.body.appendChild(s)
  }, [])

  return <div id="root" suppressHydrationWarning />
}
