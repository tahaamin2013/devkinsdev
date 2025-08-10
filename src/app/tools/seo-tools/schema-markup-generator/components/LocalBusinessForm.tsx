'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from 'react'
import { BusinessType, LocalBusinessData } from './schema'

const businessTypes: BusinessType[] = [
  'LocalBusiness', 'AnimalShelter', 'AutomotiveBusiness', 'ChildCare', 'Dentist',
  'DryCleaningOrLaundry', 'EmergencyService', 'EmploymentAgency', 'EntertainmentBusiness',
  'FinancialService', 'FoodEstablishment', 'GovernmentOffice', 'HealthAndBeautyBusiness',
  'HomeAndConstructionBusiness', 'InternetCafe', 'LegalService', 'Library', 'LodgingBusiness',
  'MedicalBusiness', 'ProfessionalService', 'RadioStation', 'RealEstateAgent', 'RecyclingCenter',
  'SelfStorage', 'ShoppingCenter', 'Store', 'TelevisionStation', 'TouristInformationCenter', 'TravelAgency'
]

interface LocalBusinessFormProps {
  onChange: (data: LocalBusinessData) => void
}

export default function LocalBusinessForm({ onChange }: LocalBusinessFormProps) {
  const [formData, setFormData] = useState<LocalBusinessData>({
    businessType: 'LocalBusiness',
    name: '',
    imageUrl: '',
    url: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    latitude: '',
    longitude: '',
    open24x7: false,
    openingHours: {
      monday: { open: '', close: '' },
      tuesday: { open: '', close: '' },
      wednesday: { open: '', close: '' },
      thursday: { open: '', close: '' },
      friday: { open: '', close: '' },
      saturday: { open: '', close: '' },
      sunday: { open: '', close: '' },
    },
    socialProfiles: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      website: '',
    },
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBusinessTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, businessType: value as BusinessType }))
  }

  const handleOpeningHoursChange = (day: string, field: 'open' | 'close', value: string) => {
    setFormData(prev => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: { ...prev.openingHours[day as keyof typeof prev.openingHours], [field]: value }
      }
    }))
  }

  const handleSocialProfileChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialProfiles: {
        ...prev.socialProfiles,
        [platform]: value
      }
    }))
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type</Label>
        <Select onValueChange={handleBusinessTypeChange} value={formData.businessType}>
          <SelectTrigger>
            <SelectValue placeholder="Select Business Type" />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Business Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Business Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url">Business URL</Label>
        <Input
          id="url"
          name="url"
          type="url"
          value={formData.url}
          onChange={handleInputChange}
          placeholder="https://example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="street">Street</Label>
        <Input
          id="street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          placeholder="123 Main St"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
          placeholder="12345"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="latitude">Latitude</Label>
        <Input
          id="latitude"
          name="latitude"
          value={formData.latitude}
          onChange={handleInputChange}
          placeholder="Latitude"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="longitude">Longitude</Label>
        <Input
          id="longitude"
          name="longitude"
          value={formData.longitude}
          onChange={handleInputChange}
          placeholder="Longitude"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="open24x7"
          checked={formData.open24x7}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, open24x7: checked }))}
        />
        <Label htmlFor="open24x7">Open 24/7</Label>
      </div>

      {!formData.open24x7 && (
        <div className="space-y-2">
          <Label>Opening Hours</Label>
          {Object.entries(formData.openingHours).map(([day, hours]) => (
            <div key={day} className="flex space-x-2">
              <span className="w-24 text-gray-700 dark:text-gray-300">{day}</span>
              <Input
                type="time"
                value={hours.open}
                onChange={(e) => handleOpeningHoursChange(day, 'open', e.target.value)}
                className="w-24"
              />
              <Input
                type="time"
                value={hours.close}
                onChange={(e) => handleOpeningHoursChange(day, 'close', e.target.value)}
                className="w-24"
              />
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <Label>Social Profiles</Label>
        {Object.entries(formData.socialProfiles).map(([platform, url]) => (
          <div key={platform} className="space-y-2">
            <Label htmlFor={platform}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</Label>
            <Input
              id={platform}
              type="url"
              value={url}
              onChange={(e) => handleSocialProfileChange(platform, e.target.value)}
              placeholder={`https://${platform}.com/yourbusiness`}
            />
          </div>
        ))}
      </div>
    </form>
  )
}
