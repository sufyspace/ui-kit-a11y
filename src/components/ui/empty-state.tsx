import * as React from "react"
import { cn } from "cn"

function EmptyState({
                        className,
                        ...props
                    }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty-state"
            data-cui-slot="empty-state"
            className={cn(
                "flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-center",
                className
            )}
            {...props}
        />
    )
}

function EmptyStateIcon({
                            className,
                            ...props
                        }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty-state-icon"
            data-cui-slot="empty-state-icon"
            className={cn(
                "mb-2 flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground [&>svg]:size-5",
                className
            )}
            {...props}
        />
    )
}

function EmptyStateTitle({
                             className,
                             ...props
                         }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="empty-state-title"
            data-cui-slot="empty-state-title"
            className={cn(
                "text-base font-semibold",
                className
            )}
            {...props}
        />
    )
}

function EmptyStateDescription({
                                   className,
                                   ...props
                               }: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="empty-state-description"
            data-cui-slot="empty-state-description"
            className={cn(
                "max-w-sm text-sm text-muted-foreground",
                className
            )}
            {...props}
        />
    )
}

function EmptyStateAction({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty-state-action"
            data-cui-slot="empty-state-action"
            className={cn(
                "mt-2 flex items-center justify-center gap-2",
                className
            )}
            {...props}
        />
    )
}

export {
    EmptyState,
    EmptyStateIcon,
    EmptyStateTitle,
    EmptyStateDescription,
    EmptyStateAction,
}
