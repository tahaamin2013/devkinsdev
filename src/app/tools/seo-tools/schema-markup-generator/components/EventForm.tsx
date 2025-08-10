'use client'

import { useState, useEffect } from 'react'
import { EventData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface EventFormProps {
  onChange: (data: EventData) => void
}

export default function EventForm({ onChange }: EventFormProps) {
  const [formData, setFormData] = useState<EventData>({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    eventStatus: '',
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Event Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Event Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Event Description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="endDate">End Date</Label>
        <Input
          id="endDate"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Event Location"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="eventStatus">Event Status</Label>
        <Input
          id="eventStatus"
          name="eventStatus"
          value={formData.eventStatus}
          onChange={handleInputChange}
          placeholder="e.g., EventScheduled, EventCancelled"
        />
      </div>
    </form>
  )
}

