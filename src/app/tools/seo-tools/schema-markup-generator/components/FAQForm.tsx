import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FAQData, FAQItem } from './schema'

interface FAQFormProps {
  onChange: (data: FAQData) => void
}

export default function FAQForm({ onChange }: FAQFormProps) {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([{ question: '', answer: '' }])

  useEffect(() => {
    onChange({ items: faqItems })
  }, [faqItems])

  const handleInputChange = (index: number, field: 'question' | 'answer', value: string) => {
    const updatedItems = faqItems.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    )
    setFaqItems(updatedItems)
  }

  const addFAQItem = () => {
    setFaqItems([...faqItems, { question: '', answer: '' }])
  }

  const removeFAQItem = (index: number) => {
    setFaqItems(faqItems.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      {faqItems.map((item, index) => (
        <div key={index} className="space-y-4 bg-gray-900 p-4 rounded-lg relative">
          <Input
            placeholder="Question"
            value={item.question}
            onChange={(e) => handleInputChange(index, 'question', e.target.value)}
          />
          <Textarea
            placeholder="Answer"
            value={item.answer}
            className='max-h-64'
            onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
          />
          {index > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => removeFAQItem(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
      <Button onClick={addFAQItem} variant="outline" className="w-full">
        <PlusCircle className="mr-2 h-4 w-4" /> Add FAQ Item
      </Button>
    </div>
  )
}
