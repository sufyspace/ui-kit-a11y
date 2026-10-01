import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
    "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors [&>svg]:pointer-events-none [&>svg]:size-3!",
    {
        variants: {
            variant: {
                neutral:
                    "bg-muted text-muted-foreground",

                primary:
                    "bg-primary text-primary-foreground",

                success:
                    "bg-success-container text-on-success-container",

                warning:
                    "bg-warning-container text-on-warning-container",

                error:
                    "bg-error-container text-on-error-container",

                outline:
                    "border-border text-foreground",
            },
        },

        defaultVariants: {
            variant: "neutral",
        },
    }
)

function Badge({
                   className,
                   variant = "neutral",
                   ...props
               }: React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants>) {
    return (
        <span
            data-slot="badge"
            data-cui-slot="badge"
            data-cui-variant={variant}
            className={cn(
                badgeVariants({ variant }),
                className
            )}
            {...props}
        />
    )
}

export { Badge, badgeVariants }
