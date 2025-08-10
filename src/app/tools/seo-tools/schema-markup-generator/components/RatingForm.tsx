'use client'

import { useState, useEffect } from 'react'
import { RatingData, RatingType } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RatingFormProps {
  onChange: (data: RatingData) => void
}

export default function RatingForm({ onChange }: RatingFormProps) {
  const [formData, setFormData] = useState<RatingData>({
    type: 'AggregateRating',
    itemName: '',
    ratingValue: '',
    bestRating: '',
    ratingCount: '',
    reviewBody: '',
    authorName: '',
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, type: value as RatingType }))
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="type">Rating Type</Label>
        <Select onValueChange={handleTypeChange} value={formData.type}>
          <SelectTrigger>
            <SelectValue placeholder="Select Rating Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AggregateRating">Aggregate Rating</SelectItem>
            <SelectItem value="Review">Review Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="itemName">Item Name</Label>
        <Input
          id="itemName"
          name="itemName"
          value={formData.itemName}
          onChange={handleInputChange}
          placeholder="Item Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ratingValue">Rating Value</Label>
        <Input
          id="ratingValue"
          name="ratingValue"
          type="number"
          step="0.1"
          value={formData.ratingValue}
          onChange={handleInputChange}
          placeholder="Rating Value"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bestRating">Best Rating</Label>
        <Input
          id="bestRating"
          name="bestRating"
          type="number"
          value={formData.bestRating}
          onChange={handleInputChange}
          placeholder="Best Rating"
        />
      </div>

      {formData.type === 'AggregateRating' && (
        <div className="space-y-2">
          <Label htmlFor="ratingCount">Rating Count</Label>
          <Input
            id="ratingCount"
            name="ratingCount"
            type="number"
            value={formData.ratingCount}
            onChange={handleInputChange}
            placeholder="Rating Count"
          />
        </div>
      )}

      {formData.type === 'Review' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="reviewBody">Review Body</Label>
            <Textarea
              id="reviewBody"
              name="reviewBody"
              value={formData.reviewBody}
              onChange={handleInputChange}
              placeholder="Review Body"
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="authorName">Author Name</Label>
            <Input
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              placeholder="Author Name"
            />
          </div>
        </>
      )}
    </form>
  )
}

