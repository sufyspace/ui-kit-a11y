import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
    "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:pointer-events-none [&>svg]:size-3!",
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
                 render,
                 ...props
               }: useRender.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
        {
          "data-cui-slot": "badge",
          "data-cui-variant": variant,
          className: cn(
              badgeVariants({ variant }),
              className
          ),
        },
        props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
