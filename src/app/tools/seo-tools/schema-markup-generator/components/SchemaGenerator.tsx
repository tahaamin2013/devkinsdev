'use client'

import { Card, CardContent } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import FAQForm from './FAQForm'
import LocalBusinessForm from './LocalBusinessForm'
import ProductForm from './ProductForm'
import RecipeForm from './RecipeForm'
import SoftwareApplicationForm from './SoftwareApplicationForm'
import { FAQData, LocalBusinessData, ProductData, RecipeData, SchemaType, SoftwareApplicationData, YoutubeVideoData, OrganizationData, EventData, ArticleData, RatingData } from './schema'
import YoutubeVideoForm from './YoutubeVideoForm'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import OrganizationForm from './OrganizationForm'
import EventForm from './EventForm'
import ArticleForm from './ArticleForm'
import RatingForm from './RatingForm'

const DynamicSchemaOutput = dynamic(() => import('./SchemaOutput'), { ssr: false })

const schemaTypes: SchemaType[] = [
  'LocalBusiness',
  'Product',
  'YoutubeVideo',
  'FAQ',
  'Recipe',
  'SoftwareApplication',
  'Organization',
  'Event',
  'Article',
  'Rating',
]

export default function SchemaGenerator() {
  const [schemaType, setSchemaType] = useState<SchemaType>('LocalBusiness')
  const [schemaData, setSchemaData] = useState<LocalBusinessData | ProductData | YoutubeVideoData | FAQData | RecipeData | SoftwareApplicationData | OrganizationData | EventData | ArticleData | RatingData | null>(null)

  const handleSchemaTypeChange = (type: SchemaType) => {
    setSchemaType(type)
    setSchemaData(null)
  }

  const handleDataChange = (data: LocalBusinessData | ProductData | YoutubeVideoData | FAQData | RecipeData | SoftwareApplicationData | OrganizationData | EventData | ArticleData | RatingData) => {
    setSchemaData(data)
  }

  return (
    <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="mb-6">
            <Select onValueChange={(value) => handleSchemaTypeChange(value as SchemaType)} value={schemaType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Schema Type" />
              </SelectTrigger>
              <SelectContent>
                {schemaTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-6">
            {schemaType === 'LocalBusiness' && <LocalBusinessForm onChange={handleDataChange} />}
            {schemaType === 'Product' && <ProductForm onChange={handleDataChange} />}
            {schemaType === 'YoutubeVideo' && <YoutubeVideoForm onChange={handleDataChange} />}
            {schemaType === 'FAQ' && <FAQForm onChange={handleDataChange} />}
            {schemaType === 'Recipe' && <RecipeForm onChange={handleDataChange} />}
            {schemaType === 'SoftwareApplication' && <SoftwareApplicationForm onChange={handleDataChange} />}
            {schemaType === 'Organization' && <OrganizationForm onChange={handleDataChange} />}
            {schemaType === 'Event' && <EventForm onChange={handleDataChange} />}
            {schemaType === 'Article' && <ArticleForm onChange={handleDataChange} />}
            {schemaType === 'Rating' && <RatingForm onChange={handleDataChange} />}
          </div>
        </CardContent>
      </Card>
      <div className="lg:col-start-2 lg:row-start-1 lg:row-end-3">
        <DynamicSchemaOutput schemaType={schemaType} schemaData={schemaData} />
      </div>
    </div>
  )
}

