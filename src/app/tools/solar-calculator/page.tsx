import { Calculator } from "./calculator"
import { PowerConverter } from "./power-converter"
import { FAQ } from "./faq"

export default function SolarCalculatorPage() {
  return (
    <main className="min-h-screen bg-background my-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Solar Calculator</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate your power requirements and get an estimate for your solar system needs. 
            Use our calculator to determine the total power consumption of your appliances.
          </p>
        </div>

        <section className="space-y-8">
          <Calculator />
          
          <div className="my-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">
              Convert Between Watts and Kilowatts
            </h2>
            <PowerConverter />
          </div>

          <div className="my-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">
              Common Questions About Solar Power
            </h2>
            <FAQ />
          </div>
        </section>
    </main>
  )
}

