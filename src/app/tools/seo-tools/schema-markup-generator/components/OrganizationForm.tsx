'use client'

import { useState, useEffect } from 'react'
import { OrganizationData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface OrganizationFormProps {
  onChange: (data: OrganizationData) => void
}

export default function OrganizationForm({ onChange }: OrganizationFormProps) {
  const [formData, setFormData] = useState<OrganizationData>({
    name: '',
    description: '',
    organizationType: '',
    url: '',
    contactPoint: {
      telephone: '',
      contactType: '',
      email: '',
    },
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleContactPointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      contactPoint: { ...prev.contactPoint, [name]: value }
    }))
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Organization Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Organization Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Organization Description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organizationType">Organization Type</Label>
        <Input
          id="organizationType"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleInputChange}
          placeholder="e.g., Corporation, NGO, EducationalOrganization"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          name="url"
          type="url"
          value={formData.url}
          onChange={handleInputChange}
          placeholder="https://www.example.com"
        />
      </div>

      <div className="space-y-2">
        <Label>Contact Point</Label>
        <Input
          name="telephone"
          value={formData.contactPoint.telephone}
          onChange={handleContactPointChange}
          placeholder="Telephone"
        />
        <Input
          name="contactType"
          value={formData.contactPoint.contactType}
          onChange={handleContactPointChange}
          placeholder="Contact Type (e.g., Customer Support)"
        />
        <Input
          name="email"
          type="email"
          value={formData.contactPoint.email}
          onChange={handleContactPointChange}
          placeholder="Email"
        />
      </div>
    </form>
  )
}

