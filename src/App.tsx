import { Button } from "@/components/ui/button"
function App() {
  return (
      <main>
        <h1>Accessible UI Kit</h1>
          <Button>Default</Button>
          <Button onClick={() => console.log("Button clicked!")} variant="outline">Outline</Button>
          <Button variant="destructive">Delete</Button>
          <Button disabled>Disabled</Button>
      </main>
  )
}

export default App
