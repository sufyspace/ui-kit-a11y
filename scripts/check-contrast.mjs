import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tokenFile = path.resolve(__dirname, "../src/styles/token.css")
const css = fs.readFileSync(tokenFile, "utf8")

const pairs = [
    ["Primary", "--cui-color-primary", "--cui-color-on-primary"],
    [
        "Primary Container",
        "--cui-color-primary-container",
        "--cui-color-on-primary-container",
    ],
    ["Surface", "--cui-color-surface", "--cui-color-on-surface"],
    [
        "Surface Variant",
        "--cui-color-surface-variant",
        "--cui-color-on-surface-variant",
    ],
    ["Error", "--cui-color-error", "--cui-color-on-error"],
    [
        "Error Container",
        "--cui-color-error-container",
        "--cui-color-on-error-container",
    ],
    ["Success", "--cui-color-success", "--cui-color-on-success"],
    [
        "Success Container",
        "--cui-color-success-container",
        "--cui-color-on-success-container",
    ],
    ["Warning", "--cui-color-warning", "--cui-color-on-warning"],
    [
        "Warning Container",
        "--cui-color-warning-container",
        "--cui-color-on-warning-container",
    ],
]

function getToken(name, visited = new Set()) {
    if (visited.has(name)) {
        throw new Error(`Circular token reference: ${name}`)
    }

    visited.add(name)

    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const regex = new RegExp(`${escapedName}\\s*:\\s*([^;]+);`)
    const match = css.match(regex)

    if (!match) {
        throw new Error(`Token not found: ${name}`)
    }

    const value = match[1].trim()

    const variable = value.match(/^var\((--[^)]+)\)$/)

    if (variable) {
        return getToken(variable[1], visited)
    }

    return value
}

function hexToRgb(hex) {
    const normalized = hex.replace("#", "")

    if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
        throw new Error(`Unsupported color value: ${hex}`)
    }

    return {
        r: Number.parseInt(normalized.slice(0, 2), 16),
        g: Number.parseInt(normalized.slice(2, 4), 16),
        b: Number.parseInt(normalized.slice(4, 6), 16),
    }
}

function linearize(value) {
    const channel = value / 255

    return channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4
}

function luminance(hex) {
    const { r, g, b } = hexToRgb(hex)

    return (
        0.2126 * linearize(r) +
        0.7152 * linearize(g) +
        0.0722 * linearize(b)
    )
}

function contrastRatio(foreground, background) {
    const foregroundLuminance = luminance(foreground)
    const backgroundLuminance = luminance(background)

    const lighter = Math.max(foregroundLuminance, backgroundLuminance)
    const darker = Math.min(foregroundLuminance, backgroundLuminance)

    return (lighter + 0.05) / (darker + 0.05)
}

let failed = false

console.log("\nCUI Color Contrast Check\n")

for (const [label, backgroundToken, foregroundToken] of pairs) {
    const background = getToken(backgroundToken)
    const foreground = getToken(foregroundToken)

    const ratio = contrastRatio(foreground, background)
    const aa = ratio >= 4.5
    const aaa = ratio >= 7

    if (!aa) {
        failed = true
    }

    const level = aaa ? "AAA" : aa ? "AA" : "Fail"

    console.log(
        `${aa ? "✓" : "✗"} ${label.padEnd(20)} ${ratio.toFixed(2)}:1 ${level}`,
    )
}

console.log("")

if (failed) {
    console.error("Contrast check failed. Text contrast must be at least 4.5:1.")
    process.exit(1)
}

console.log("All color pairs pass WCAG AA text contrast.")
