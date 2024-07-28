import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:border-accent focus-visible:ring-offset-0 disabled:curosr-not-allowed disabled:opacity-50",
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
