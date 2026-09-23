import { Button } from "@/components/ui/button"

const colors = [
    {
        name: "Primary",
        variable: "--cui-color-primary",
        style: {
            backgroundColor: "var(--cui-color-primary)",
            color: "var(--cui-color-on-primary)",
        },
    },
    {
        name: "Primary Container",
        variable: "--cui-color-primary-container",
        style: {
            backgroundColor: "var(--cui-color-primary-container)",
            color: "var(--cui-color-on-primary-container)",
        },
    },

    {
        name: "Surface",
        variable: "--cui-color-surface",
        style: {
            backgroundColor: "var(--cui-color-surface)",
            color: "var(--cui-color-on-surface)",
        },
    },
    {
        name: "Surface Variant",
        variable: "--cui-color-surface-variant",
        style: {
            backgroundColor: "var(--cui-color-surface-variant)",
            color: "var(--cui-color-on-surface-variant)",
        },
    },

    {
        name: "Error",
        variable: "--cui-color-error",
        style: {
            backgroundColor: "var(--cui-color-error)",
            color: "var(--cui-color-on-error)",
        },
    },
    {
        name: "Error Container",
        variable: "--cui-color-error-container",
        style: {
            backgroundColor: "var(--cui-color-error-container)",
            color: "var(--cui-color-on-error-container)",
        },
    },

    {
        name: "Success",
        variable: "--cui-color-success",
        style: {
            backgroundColor: "var(--cui-color-success)",
            color: "var(--cui-color-on-success)",
        },
    },
    {
        name: "Success Container",
        variable: "--cui-color-success-container",
        style: {
            backgroundColor: "var(--cui-color-success-container)",
            color: "var(--cui-color-on-success-container)",
        },
    },

    {
        name: "Warning",
        variable: "--cui-color-warning",
        style: {
            backgroundColor: "var(--cui-color-warning)",
            color: "var(--cui-color-on-warning)",
        },
    },
    {
        name: "Warning Container",
        variable: "--cui-color-warning-container",
        style: {
            backgroundColor: "var(--cui-color-warning-container)",
            color: "var(--cui-color-on-warning-container)",
        },
    },
]

function App() {
    return (
        <main className="min-h-screen bg-background p-8 text-foreground">
            <div className="mx-auto max-w-5xl space-y-10">
                <header>
                    <h1 className="text-3xl font-semibold">Design Tokens</h1>
                    <p className="mt-2 text-muted-foreground">
                        CUI color token preview
                    </p>
                </header>

                <section>
                    <h2 className="mb-4 text-xl font-semibold">Colors</h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {colors.map(({ name, variable, style }) => (
                            <div
                                key={variable}
                                className="flex min-h-36 flex-col justify-end rounded-lg border p-4"
                                style={style}
                            >
                                <strong>{name}</strong>
                                <code className="mt-1 text-xs opacity-75">{variable}</code>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-xl font-semibold">Buttons</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 text-sm font-medium">Variants</h3>

                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="link">Link</Button>
                                <Button size="icon-md" aria-label="搜尋">
                                    icon按鈕
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-sm font-medium">Sizes</h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-sm font-medium">States</h3>

                            <div className="flex flex-wrap gap-3">
                                <Button>Default</Button>
                                <Button disabled>Disabled</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-xl font-semibold">Example</h2>

                    <div className="max-w-md rounded-lg border bg-card p-6 text-card-foreground">
                        <h3 className="text-lg font-semibold">建言系統</h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            請填寫您的建議內容，我們將於收到資料後進行處理。
                        </p>

                        <div className="mt-5 flex gap-2">
                            <Button>送出建議</Button>
                            <Button variant="outline">取消</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default App
