export type SchemaType = 'LocalBusiness' | 'Product' | 'YoutubeVideo' | 'FAQ' | 'Recipe' | 'SoftwareApplication' | 'Organization' | 'Event' | 'Article' | 'Rating' | "ProductGroup"

export type BusinessType = 'LocalBusiness' | 'AnimalShelter' | 'AutomotiveBusiness' | 'ChildCare' | 'Dentist' | 'DryCleaningOrLaundry' | 'EmergencyService' | 'EmploymentAgency' | 'EntertainmentBusiness' | 'FinancialService' | 'FoodEstablishment' | 'GovernmentOffice' | 'HealthAndBeautyBusiness' | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'LegalService' | 'Library' | 'LodgingBusiness' | 'MedicalBusiness' | 'ProfessionalService' | 'RadioStation' | 'RealEstateAgent' | 'RecyclingCenter' | 'SelfStorage' | 'ShoppingCenter' | 'Store' | 'TelevisionStation' | 'TouristInformationCenter' | 'TravelAgency'

export interface LocalBusinessData {
  businessType: BusinessType
  name: string
  imageUrl: string
  url: string
  phone: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  latitude: string
  longitude: string
  open24x7: boolean
  openingHours: {
    [key: string]: { open: string; close: string }
  }
  socialProfiles: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
    website: string
  }
}

export interface ProductData {
  name: string
  description: string
  imageUrl: string
  sku: string
  brand: string
  price: string
  currency: string
  shippingCost: string
  merchantReturnPolicyUrl: string
}

export interface YoutubeVideoData {
  title: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  embedUrl: string
  interactionCount: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQData {
  items: FAQItem[]
}

export interface RecipeData {
  name: string
  author: string
  imageUrl: string
  description: string
  prepTime: string
  cookTime: string
  totalTime: string
  keywords: string
  recipeYield: string
  recipeCategory: string
  recipeCuisine: string
  calories: string
  fatContent: string
  ingredients: string[]
  instructions: string[]
}

export interface SoftwareApplicationData {
  name: string
  description: string
  author: string
  operatingSystem: string
  applicationCategory: string
  price: string
  downloadUrl: string
}

export interface OrganizationData {
  name: string
  description: string
  organizationType: string
  url: string
  contactPoint: {
    telephone: string
    contactType: string
    email: string
  }
}

export interface EventData {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  eventStatus: string
}

export interface ArticleData {
  authorName: string
  headline: string
  datePublished: string
  dateModified: string
  articleBody: string
  mainEntityOfPage: string
}

export type RatingType = 'AggregateRating' | 'Review'

export interface RatingData {
  type: RatingType
  itemName: string
  ratingValue: string
  bestRating: string
  ratingCount?: string
  reviewBody?: string
  authorName?: string;
}
