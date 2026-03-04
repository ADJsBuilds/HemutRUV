import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-pastel-orange text-black font-600 font-oldschool-grotesk hover:bg-pastel-orange-1 shadow-sm": variant === "primary",
                        "bg-transparent text-white font-600 font-oldschool-grotesk hover:bg-surface/50 border-2 border-border shadow-sm": variant === "secondary",
                        "border-2 border-pastel-orange text-pastel-orange font-600 font-oldschool-grotesk hover:bg-pastel-orange/10": variant === "outline",
                        "hover:bg-surface/50 text-white font-600 font-oldschool-grotesk": variant === "ghost",
                        "h-10 px-4 py-2": size === "default",
                        "h-8 px-3 text-xs": size === "sm",
                        "h-12 px-8 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
