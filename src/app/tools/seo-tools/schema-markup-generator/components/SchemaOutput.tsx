import { useState } from 'react'
import { SchemaType, LocalBusinessData, ProductData, YoutubeVideoData, FAQData, RecipeData, SoftwareApplicationData, OrganizationData, EventData, ArticleData, RatingData } from './schema'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardIcon, CheckIcon } from 'lucide-react'

interface SchemaOutputProps {
  schemaType: SchemaType | null
  schemaData: LocalBusinessData | ProductData | YoutubeVideoData | FAQData | RecipeData | SoftwareApplicationData | OrganizationData | EventData | ArticleData | RatingData | null
}

export default function SchemaOutput({ schemaType, schemaData }: SchemaOutputProps) {
  const [copied, setCopied] = useState(false)

  if (!schemaType || !schemaData) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">Select a schema type and fill in the form to generate the schema.</p>
        </CardContent>
      </Card>
    )
  }

  const generateLocalBusinessSchema = (data: LocalBusinessData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": data.businessType,
      "name": data.name,
      "image": data.imageUrl,
      "url": data.url,
      "telephone": data.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.street,
        "addressLocality": data.city,
        "addressRegion": data.state,
        "postalCode": data.zipCode,
        "addressCountry": data.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.latitude,
        "longitude": data.longitude
      },
      "openingHoursSpecification": data.open24x7
        ? [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          ]
        : Object.entries(data.openingHours).map(([day, hours]) => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": day,
            "opens": hours.open,
            "closes": hours.close
          })),
      "sameAs": Object.values(data.socialProfiles).filter(Boolean)
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateProductSchema = (data: ProductData) => {
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": data.name,
      "description": data.description,
      "image": data.imageUrl,
      "sku": data.sku,
      "brand": {
        "@type": "Brand",
        "name": data.brand
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": data.currency,
        "price": data.price,
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": data.shippingCost,
            "currency": data.currency
          }
        }
      },
      "merchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "url": data.merchantReturnPolicyUrl
      }
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateYoutubeVideoSchema = (data: YoutubeVideoData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": data.title,
      "description": data.description,
      "thumbnailUrl": data.thumbnailUrl,
      "uploadDate": data.uploadDate,
      "duration": data.duration,
      "embedUrl": data.embedUrl,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WatchAction",
        "userInteractionCount": data.interactionCount
      }
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateFAQSchema = (data: FAQData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateRecipeSchema = (data: RecipeData) => {
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": data.name,
      "author": {
        "@type": "Person",
        "name": data.author
      },
      "image": data.imageUrl,
      "description": data.description,
      "prepTime": data.prepTime,
      "cookTime": data.cookTime,
      "totalTime": data.totalTime,
      "keywords": data.keywords,
      "recipeYield": data.recipeYield,
      "recipeCategory": data.recipeCategory,
      "recipeCuisine": data.recipeCuisine,
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": data.calories,
        "fatContent": data.fatContent
      },
      "recipeIngredient": data.ingredients,
      "recipeInstructions": data.instructions.map(instruction => ({
        "@type": "HowToStep",
        "text": instruction
      }))
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateSoftwareApplicationSchema = (data: SoftwareApplicationData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": data.name,
      "description": data.description,
      "author": {
        "@type": "Person",
        "name": data.author
      },
      "operatingSystem": data.operatingSystem,
      "applicationCategory": data.applicationCategory,
      "offers": {
        "@type": "Offer",
        "price": data.price,
        "priceCurrency": "USD"
      },
      "downloadUrl": data.downloadUrl
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateOrganizationSchema = (data: OrganizationData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": data.organizationType,
      "name": data.name,
      "description": data.description,
      "url": data.url,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": data.contactPoint.telephone,
        "contactType": data.contactPoint.contactType,
        "email": data.contactPoint.email
      }
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateEventSchema = (data: EventData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": data.name,
      "description": data.description,
      "startDate": data.startDate,
      "endDate": data.endDate,
      "location": data.location,
      "eventStatus": data.eventStatus
    }

    return JSON.stringify(schema, null, 2)
  }

  const generateArticleSchema = (data: ArticleData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.headline,
      "author": {
        "@type": "Person",
        "name": data.authorName
      },
      "datePublished": data.datePublished,
      "dateModified": data.dateModified,
      "articleBody": data.articleBody,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.mainEntityOfPage
      }
    }

    return JSON.stringify(schema, null, 2)
  }

  interface RatingSchema {
    "@context": "https://schema.org";
    "@type": "AggregateRating" | "Review";
    "itemReviewed": {
      "@type": "Thing";
      "name": string;
    };
    "ratingValue": string;
    "bestRating": string;
    "ratingCount"?: string;
    "reviewBody"?: string;  
    "author"?: {
      "@type": "Person";
      "name": string;
    };
  }
  
  const generateRatingSchema = (data: RatingData) => {
    const schema: RatingSchema = {
      "@context": "https://schema.org",
      "@type": data.type === 'AggregateRating' ? 'AggregateRating' : 'Review',
      "itemReviewed": {
        "@type": "Thing",
        "name": data.itemName || ''
      },
      "ratingValue": data.ratingValue.toString(),
      "bestRating": data.bestRating.toString(),
    }
  
    if (data.type === 'AggregateRating' && data.ratingCount) {
      schema.ratingCount = data.ratingCount.toString();
    } else if (data.type !== 'AggregateRating') {
      schema.reviewBody = data.reviewBody;
      if (data.authorName) {
        schema.author = {
          "@type": "Person",
          "name": data.authorName
        };
      }
    }
  
    return JSON.stringify(schema, null, 2);
  }

  const schemaJson = schemaType === 'LocalBusiness'
    ? generateLocalBusinessSchema(schemaData as LocalBusinessData)
    : schemaType === 'Product'
    ? generateProductSchema(schemaData as ProductData)
    : schemaType === 'YoutubeVideo'
    ? generateYoutubeVideoSchema(schemaData as YoutubeVideoData)
    : schemaType === 'FAQ'
    ? generateFAQSchema(schemaData as FAQData)
    : schemaType === 'Recipe'
    ? generateRecipeSchema(schemaData as RecipeData)
    : schemaType === 'SoftwareApplication'
    ? generateSoftwareApplicationSchema(schemaData as SoftwareApplicationData)
    : schemaType === 'Organization'
    ? generateOrganizationSchema(schemaData as OrganizationData)
    : schemaType === 'Event'
    ? generateEventSchema(schemaData as EventData)
    : schemaType === 'Article'
    ? generateArticleSchema(schemaData as ArticleData)
    : generateRatingSchema(schemaData as RatingData)

  const fullSchema = `<script type="application/ld+json">
${schemaJson}
</script>

<!-- Generated by Schema Generator By Devkins -->`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullSchema).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Generated Schema</CardTitle>
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-full"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <ClipboardIcon className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
          <code>{fullSchema}</code>
        </pre>
      </CardContent>
    </Card>
  )
}

