'use client'

import { useState, useEffect } from 'react'
import { SoftwareApplicationData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SoftwareApplicationFormProps {
  onChange: (data: SoftwareApplicationData) => void
}

const categories = [
  "BusinessApplication", "GameApplication", "MultimediaApplication", "UtilitiesApplication"
]

const operatingSystems = [
  "Windows", "macOS", "Linux", "iOS", "Android"
]

export default function SoftwareApplicationForm({ onChange }: SoftwareApplicationFormProps) {
  const [formData, setFormData] = useState<SoftwareApplicationData>({
    name: '',
    description: '',
    author: '',
    operatingSystem: '',
    applicationCategory: '',
    price: '',
    downloadUrl: '',
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Application Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Application Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Application Description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author Name</Label>
        <Input
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          placeholder="Author Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="operatingSystem">Operating System</Label>
        <Select
          value={formData.operatingSystem}
          onValueChange={(value) => handleSelectChange('operatingSystem', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Operating System" />
          </SelectTrigger>
          <SelectContent>
            {operatingSystems.map((os) => (
              <SelectItem key={os} value={os}>{os}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="applicationCategory">Application Category</Label>
        <Select
          value={formData.applicationCategory}
          onValueChange={(value) => handleSelectChange('applicationCategory', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="0.00 for free"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="downloadUrl">Download URL</Label>
        <Input
          id="downloadUrl"
          name="downloadUrl"
          type="url"
          value={formData.downloadUrl}
          onChange={handleInputChange}
          placeholder="https://example.com/download"
        />
      </div>
    </form>
  )
}

