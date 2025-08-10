'use client'

import { useState, useEffect } from 'react'
import { YoutubeVideoData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon } from 'lucide-react'

interface YoutubeVideoFormProps {
  onChange: (data: YoutubeVideoData) => void
}

export default function YoutubeVideoForm({ onChange }: YoutubeVideoFormProps) {
  const [formData, setFormData] = useState<YoutubeVideoData>({
    title: '',
    description: '',
    thumbnailUrl: '',
    uploadDate: '',
    duration: '',
    embedUrl: '',
    interactionCount: '',
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
        <Label htmlFor="title">Video Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Video Title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Video Description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
        <Input
          id="thumbnailUrl"
          type="url"
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          value={formData.thumbnailUrl}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="uploadDate">Upload Date</Label>
        <Input
          id="uploadDate"
          type="date"
          name="uploadDate"
          value={formData.uploadDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="duration">Duration (ISO 8601 format)</Label>
        <Input
          id="duration"
          name="duration"
          placeholder="PT1H30M (for 1 hour 30 minutes)"
          value={formData.duration}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="embedUrl">Embed URL</Label>
        <Input
          id="embedUrl"
          type="url"
          name="embedUrl"
          placeholder="https://www.youtube.com/embed/VIDEO_ID"
          value={formData.embedUrl}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="interactionCount" className="flex items-center">
          Interaction Count
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="w-4 h-4 ml-2 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>The total number of interactions (likes, comments, etc.) for the video.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Label>
        <Input
          id="interactionCount"
          type="number"
          name="interactionCount"
          placeholder="Total interactions"
          value={formData.interactionCount}
          onChange={handleInputChange}
        />
      </div>
    </form>
  )
}

