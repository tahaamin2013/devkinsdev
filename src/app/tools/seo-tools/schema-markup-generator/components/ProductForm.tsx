'use client'

import { useState, useEffect } from 'react'
import { ProductData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductFormProps {
  onChange: (data: ProductData) => void
}

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR']

export default function ProductForm({ onChange }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductData>({
    name: '',
    description: '',
    imageUrl: '',
    sku: '',
    brand: '',
    price: '',
    currency: 'USD',
    shippingCost: '',
    merchantReturnPolicyUrl: '',
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCurrencyChange = (value: string) => {
    setFormData(prev => ({ ...prev, currency: value }))
  }

  return (
    <form className="space-y-4">
      <Input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <Input
        type="url"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleInputChange}
      />
      <Input
        name="sku"
        placeholder="SKU"
        value={formData.sku}
        onChange={handleInputChange}
      />
      <Input
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleInputChange}
      />
      <div className="flex space-x-4">
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          className="flex-grow"
        />
        <Select onValueChange={handleCurrencyChange} value={formData.currency}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency} value={currency}>{currency}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input
        type="number"
        name="shippingCost"
        placeholder="Shipping Cost"
        value={formData.shippingCost}
        onChange={handleInputChange}
      />
      <Input
        type="url"
        name="merchantReturnPolicyUrl"
        placeholder="Merchant Return Policy URL"
        value={formData.merchantReturnPolicyUrl}
        onChange={handleInputChange}
      />
    </form>
  )
}

