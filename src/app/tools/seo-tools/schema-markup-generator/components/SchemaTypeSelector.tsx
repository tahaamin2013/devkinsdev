import { SchemaType } from './schema'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  'ProductGroup',
]

interface SchemaSelectorProps {
  onSelect: (type: SchemaType) => void
}

export default function SchemaTypeSelector({ onSelect }: SchemaSelectorProps) {
  return (
    <div className="mb-6">
      <label htmlFor="schemaType" className="block mb-2 text-sm font-medium text-gray-200">
        Select Schema Type
      </label>
      <Select onValueChange={(value) => onSelect(value as SchemaType)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a schema type" />
        </SelectTrigger>
        <SelectContent>
          {schemaTypes.map((type) => (
            <SelectItem key={type} value={type}>{type}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

