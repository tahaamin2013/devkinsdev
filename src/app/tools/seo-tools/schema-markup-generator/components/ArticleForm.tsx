'use client'

import { useState, useEffect } from 'react'
import { ArticleData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ArticleFormProps {
  onChange: (data: ArticleData) => void
}

export default function ArticleForm({ onChange }: ArticleFormProps) {
  const [formData, setFormData] = useState<ArticleData>({
    authorName: '',
    headline: '',
    datePublished: '',
    dateModified: '',
    articleBody: '',
    mainEntityOfPage: '',
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
        <Label htmlFor="authorName">Author Name</Label>
        <Input
          id="authorName"
          name="authorName"
          value={formData.authorName}
          onChange={handleInputChange}
          placeholder="Author Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="headline">Headline</Label>
        <Input
          id="headline"
          name="headline"
          value={formData.headline}
          onChange={handleInputChange}
          placeholder="Article Headline"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="datePublished">Date Published</Label>
        <Input
          id="datePublished"
          name="datePublished"
          type="date"
          value={formData.datePublished}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateModified">Date Modified</Label>
        <Input
          id="dateModified"
          name="dateModified"
          type="date"
          value={formData.dateModified}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="articleBody">Article Body</Label>
        <Textarea
          id="articleBody"
          name="articleBody"
          value={formData.articleBody}
          onChange={handleInputChange}
          placeholder="Article Body"
          rows={6}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mainEntityOfPage">Main Entity of Page URL</Label>
        <Input
          id="mainEntityOfPage"
          name="mainEntityOfPage"
          type="url"
          value={formData.mainEntityOfPage}
          onChange={handleInputChange}
          placeholder="https://example.com/article"
        />
      </div>
    </form>
  )
}

