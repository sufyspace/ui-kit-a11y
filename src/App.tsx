import { Button } from "@/components/ui/button"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldLabel,
    FieldLegend,
    FieldSet
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Search, Plus, Save, Trash2 } from "lucide-react"
import {useState} from "react";


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
    const [message, setMessage] = useState("")

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

                        <div>
                            <h3 className="mb-3 text-sm font-medium">Shape</h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <Button>
                                    Default
                                </Button>

                                <Button shape="square">
                                    Square corners Button
                                </Button>

                                <Button shape="pill">
                                    Pill Button
                                </Button>

                                <Button shape="pill" variant="secondary">
                                    Secondary
                                </Button>

                                <Button shape="pill" variant="outline">
                                    Outline
                                </Button>

                                <Button shape="pill">
                                    <Plus aria-hidden="true" />
                                    Add Item
                                </Button>

                                <Button
                                    size="icon-md"
                                    shape="pill"
                                    aria-label="新增"
                                >
                                    <Plus aria-hidden="true" />
                                </Button>

                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-xl font-semibold">Button with Icons</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 text-sm font-medium">With Icon</h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="sm">
                                    <Search />
                                    Search
                                </Button>

                                <Button size="md">
                                    <Search />
                                    Search
                                </Button>

                                <Button size="lg">
                                    <Search />
                                    Search
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-sm font-medium">Icon Only</h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="icon-sm" aria-label="新增">
                                    <Plus />
                                </Button>

                                <Button size="icon-md" aria-label="新增">
                                    <Plus />
                                </Button>

                                <Button size="icon-lg" aria-label="新增">
                                    <Plus />
                                </Button>

                                <Button
                                    size="icon-md"
                                    shape="pill"
                                    aria-label="刪除"
                                    variant="destructive"
                                >
                                    <Trash2 aria-hidden="true" />
                                </Button>
                            </div>
                        </div>

                        {/* States */}
                        <div>
                            <h3 className="mb-3 font-medium">States</h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <Button disabled>
                                    Disabled
                                </Button>

                                <Button loading>
                                    儲存
                                </Button>

                                <Button loading shape="pill">
                                    送出資料
                                </Button>

                                <Button loading>
                                    <Save aria-hidden="true" />
                                    儲存
                                </Button>

                                <Button
                                    loading
                                    size="icon-md"
                                    aria-label="儲存"
                                >
                                    <Save aria-hidden="true" />
                                </Button>
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

                <section className="max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Input
                    </h2>

                    <Input placeholder="Default" />

                    <Input
                        value="已有內容"
                        readOnly
                    />

                    <Input
                        placeholder="Invalid"
                        aria-invalid="true"
                    />

                    <Input
                        placeholder="Disabled"
                        disabled
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                    />

                    <Input
                        type="number"
                        placeholder="0"
                    />

                    <Input type="file" />
                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Field
                    </h2>

                    {/* Normal */}
                    <Field>
                        <FieldLabel htmlFor="normal-email">
                            Email
                        </FieldLabel>

                        <Input
                            id="normal-email"
                            type="email"
                            placeholder="example@example.com"
                            aria-describedby="normal-email-description"
                        />

                        <FieldDescription id="normal-email-description">
                            我們會使用這個 Email 寄送通知。
                        </FieldDescription>
                    </Field>

                    {/* Required */}
                    <Field>
                        <FieldLabel htmlFor="required-name">
                            姓名
                            <span
                                aria-hidden="true"
                                className="text-destructive"
                            >
                                *
                            </span>
                        </FieldLabel>

                        <Input
                            id="required-name"
                            required
                            placeholder="請輸入姓名"
                        />
                    </Field>

                    {/* Invalid */}
                    <Field data-invalid="true">
                        <FieldLabel htmlFor="invalid-email">
                            Email
                        </FieldLabel>

                        <Input
                            id="invalid-email"
                            type="email"
                            value="abc"
                            readOnly
                            aria-invalid="true"
                            aria-describedby="invalid-email-description invalid-email-error"
                        />

                        <FieldDescription id="invalid-email-description">
                            我們會使用這個 Email 寄送通知。
                        </FieldDescription>

                        <FieldError id="invalid-email-error">
                            請輸入有效的 Email 格式。
                        </FieldError>
                    </Field>
                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Textarea
                    </h2>

                    <Textarea placeholder="請輸入內容" />

                    <Textarea
                        placeholder="Invalid"
                        aria-invalid="true"
                    />

                    <Textarea
                        placeholder="Disabled"
                        disabled
                    />

                    <Field>
                        <FieldLabel htmlFor="message">
                            意見內容
                        </FieldLabel>

                        <Textarea
                            id="message"
                            placeholder="請輸入您的意見"
                            aria-describedby="message-description"
                        />

                        <FieldDescription id="message-description">
                            請簡單描述您的問題或建議。
                        </FieldDescription>
                    </Field>

                    <Field data-invalid="true">
                        <FieldLabel htmlFor="invalid-message">
                            意見內容
                        </FieldLabel>

                        <Textarea
                            id="invalid-message"
                            value="太短"
                            readOnly
                            aria-invalid="true"
                            aria-describedby="invalid-message-description invalid-message-error"
                        />

                        <FieldDescription id="invalid-message-description">
                            請至少輸入 10 個字。
                        </FieldDescription>

                        <FieldError id="invalid-message-error">
                            內容長度不足。
                        </FieldError>
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="feedback">
                            意見內容
                        </FieldLabel>

                        <Textarea
                            id="feedback"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            maxLength={500}
                            placeholder="請輸入您的意見"
                            aria-describedby="feedback-description feedback-count"
                        />

                        <div className="flex items-start justify-between gap-4">
                            <FieldDescription id="feedback-description">
                                請簡單描述您的問題或建議。
                            </FieldDescription>

                            <span
                                id="feedback-count"
                                className="shrink-0 text-sm text-muted-foreground"
                            >
                              {message.length} / 500
                            </span>
                        </div>
                    </Field>
                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Checkbox
                    </h2>

                    <div className="flex items-center gap-2">
                        <Checkbox id="terms" />

                        <label htmlFor="terms">
                            我同意使用條款
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="newsletter"
                            defaultChecked
                        />

                        <label htmlFor="newsletter">
                            接收 Email 通知
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="disabled-checkbox"
                            disabled
                        />

                        <label htmlFor="disabled-checkbox">
                            Disabled
                        </label>
                    </div>
                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Checkbox + Field
                    </h2>

                    <Field orientation="horizontal">
                        <Checkbox id="terms-field" />

                        <FieldLabel htmlFor="terms-field">
                            我同意使用條款
                        </FieldLabel>
                    </Field>

                    <Field orientation="horizontal">
                        <Checkbox
                            id="notifications"
                            aria-describedby="notifications-description"
                        />

                        <FieldContent>
                            <FieldLabel htmlFor="notifications">
                                接收 Email 通知
                            </FieldLabel>

                            <FieldDescription id="notifications-description">
                                我們會寄送重要通知與系統更新。
                            </FieldDescription>
                        </FieldContent>
                    </Field>

                    <Field
                        orientation="horizontal"
                        data-invalid="true"
                    >
                        <Checkbox
                            id="privacy"
                            aria-invalid="true"
                            aria-describedby="privacy-error"
                        />

                        <FieldContent>
                            <FieldLabel htmlFor="privacy">
                                我已閱讀隱私權政策
                            </FieldLabel>

                            <FieldError id="privacy-error">
                                請先閱讀並同意隱私權政策。
                            </FieldError>
                        </FieldContent>
                    </Field>
                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Radio Group
                    </h2>

                    <FieldSet>
                        <FieldLegend>付款方式</FieldLegend>

                        <RadioGroup defaultValue="card">
                            <Field orientation="horizontal">
                                <RadioGroupItem
                                    value="card"
                                    id="payment-card"
                                />

                                <FieldLabel htmlFor="payment-card">
                                    信用卡
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal">
                                <RadioGroupItem
                                    value="atm"
                                    id="payment-atm"
                                    disabled
                                />

                                <FieldLabel htmlFor="payment-atm">
                                    ATM
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal">
                                <RadioGroupItem
                                    value="store"
                                    id="payment-store"
                                />

                                <FieldLabel htmlFor="payment-store">
                                    超商付款
                                </FieldLabel>
                            </Field>
                        </RadioGroup>
                    </FieldSet>

                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Switch
                    </h2>

                    <div className="flex items-center gap-2">
                        <Switch id="email-switch" />

                        <label htmlFor="email-switch">
                            Email 通知
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Switch
                            id="enabled-switch"
                            defaultChecked
                        />

                        <label htmlFor="enabled-switch">
                            自動更新
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Switch
                            id="disabled-switch"
                            disabled
                        />

                        <label htmlFor="disabled-switch">
                            Disabled
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Switch
                            id="small-switch"
                            size="sm"
                        />

                        <label htmlFor="small-switch">
                            Small
                        </label>
                    </div>

                    <Field orientation="horizontal">
                        <FieldContent>
                            <FieldLabel htmlFor="notification-switch">
                                Email 通知
                            </FieldLabel>

                            <FieldDescription id="notification-description">
                                接收重要的帳號與系統通知。
                            </FieldDescription>
                        </FieldContent>

                        <Switch
                            id="notification-switch"
                            aria-describedby="notification-description"
                        />
                    </Field>
                </section>

                <section className="mt-12 max-w-md space-y-6">
                    <h2 className="text-xl font-semibold">
                        Select
                    </h2>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="請選擇城市" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="taipei">
                                台北
                            </SelectItem>

                            <SelectItem value="taoyuan">
                                桃園
                            </SelectItem>

                            <SelectItem value="taichung">
                                台中
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    <Select disabled>
                        <SelectTrigger>
                            <SelectValue placeholder="Disabled" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="taipei">台北</SelectItem>
                            <SelectItem value="taoyuan">桃園</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="請選擇城市" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="taipei">
                                台北
                            </SelectItem>

                            <SelectItem value="taoyuan">
                                桃園
                            </SelectItem>

                            <SelectItem value="taichung" disabled>
                                台中（暫停使用）
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    <Field>
                        <FieldLabel htmlFor="city">
                            城市
                        </FieldLabel>

                        <Select>
                            <SelectTrigger
                                id="city"
                                aria-describedby="city-description"
                            >
                                <SelectValue placeholder="請選擇城市" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="taipei">
                                    台北
                                </SelectItem>

                                <SelectItem value="taoyuan">
                                    桃園
                                </SelectItem>

                                <SelectItem value="taichung">
                                    台中
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <FieldDescription id="city-description">
                            請選擇目前居住的城市。
                        </FieldDescription>
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="city">
                            城市
                        </FieldLabel>

                        <Select>
                            <SelectTrigger
                                id="city"
                                aria-invalid="true"
                                aria-describedby="invalid-city-description invalid-city-error"
                            >
                                <SelectValue placeholder="請選擇城市" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="taipei">
                                    台北
                                </SelectItem>

                                <SelectItem value="taoyuan">
                                    桃園
                                </SelectItem>

                                <SelectItem value="taichung">
                                    台中
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <FieldDescription id="city-description">
                            請選擇目前居住的城市。
                        </FieldDescription>

                        <FieldError id="invalid-city-error">
                            請選擇城市。
                        </FieldError>
                    </Field>
                </section>

            </div>
        </main>
    )
}

export default App
