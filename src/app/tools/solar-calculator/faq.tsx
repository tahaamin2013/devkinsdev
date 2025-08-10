"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FAQ } from "./calculator types"

const FAQS: FAQ[] = [
  {
    question: "How do I calculate how much solar power I need?",
    answer: "You have to select the appliance and its number. The calculator will show their power."
  },
  {
    question: "How do you calculate solar current?",
    answer: "To calculate the solar current divide power of the panel by the voltage. For example, if the rated power is 180 watts and voltage is 20 volts. Then the current will be 9 Amps."
  },
  {
    question: "How many kW per solar panel?",
    answer: "It depends on the efficiency of solar panels and the region where it is installed. Approximately it generates about 1 kW."
  }
]

export function FAQ() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-primary">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

