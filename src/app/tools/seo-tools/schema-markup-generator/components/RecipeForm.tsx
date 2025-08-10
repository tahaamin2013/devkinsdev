'use client'

import { useState, useEffect } from 'react'
import { RecipeData } from './schema'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface RecipeFormProps {
  onChange: (data: RecipeData) => void
}

export default function RecipeForm({ onChange }: RecipeFormProps) {
  const [formData, setFormData] = useState<RecipeData>({
    name: '',
    author: '',
    imageUrl: '',
    description: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    keywords: '',
    recipeYield: '',
    recipeCategory: '',
    recipeCuisine: '',
    calories: '',
    fatContent: '',
    ingredients: [''],
    instructions: [''],
  })

  useEffect(() => {
    onChange(formData)
  }, [formData, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleListChange = (index: number, value: string, field: 'ingredients' | 'instructions') => {
    setFormData(prev => {
      const newList = [...prev[field]]
      newList[index] = value
      return { ...prev, [field]: newList }
    })
  }

  const addListItem = (field: 'ingredients' | 'instructions') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeListItem = (index: number, field: 'ingredients' | 'instructions') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Recipe Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Recipe Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author Name</Label>
        <Input
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          placeholder="Author Name"
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
          placeholder="Image URL"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Recipe Description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prepTime">Prep Time</Label>
        <Input
          id="prepTime"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleInputChange}
          placeholder="e.g., PT15M"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cookTime">Cook Time</Label>
        <Input
          id="cookTime"
          name="cookTime"
          value={formData.cookTime}
          onChange={handleInputChange}
          placeholder="e.g., PT1H"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="totalTime">Total Time</Label>
        <Input
          id="totalTime"
          name="totalTime"
          value={formData.totalTime}
          onChange={handleInputChange}
          placeholder="e.g., PT1H15M"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="keywords">Keywords</Label>
        <Input
          id="keywords"
          name="keywords"
          value={formData.keywords}
          onChange={handleInputChange}
          placeholder="Comma separated keywords"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="recipeYield">Recipe Yield</Label>
        <Input
          id="recipeYield"
          name="recipeYield"
          value={formData.recipeYield}
          onChange={handleInputChange}
          placeholder="e.g., 4 servings"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="recipeCategory">Recipe Category</Label>
        <Input
          id="recipeCategory"
          name="recipeCategory"
          value={formData.recipeCategory}
          onChange={handleInputChange}
          placeholder="e.g., Dessert"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="recipeCuisine">Recipe Cuisine</Label>
        <Input
          id="recipeCuisine"
          name="recipeCuisine"
          value={formData.recipeCuisine}
          onChange={handleInputChange}
          placeholder="e.g., Italian"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="calories">Calories</Label>
        <Input
          id="calories"
          name="calories"
          value={formData.calories}
          onChange={handleInputChange}
          placeholder="e.g., 270 calories"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fatContent">Fat Content</Label>
        <Input
          id="fatContent"
          name="fatContent"
          value={formData.fatContent}
          onChange={handleInputChange}
          placeholder="e.g., 12 grams"
        />
      </div>

      <div className="space-y-2">
        <Label>Ingredients</Label>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              value={ingredient}
              onChange={(e) => handleListChange(index, e.target.value, 'ingredients')}
              placeholder={`Ingredient ${index + 1}`}
            />
            <button type="button" onClick={() => removeListItem(index, 'ingredients')}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addListItem('ingredients')}>Add Ingredient</button>
      </div>

      <div className="space-y-2">
        <Label>Instructions</Label>
        {formData.instructions.map((instruction, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Textarea
              value={instruction}
              onChange={(e) => handleListChange(index, e.target.value, 'instructions')}
              placeholder={`Step ${index + 1}`}
            />
            <button type="button" onClick={() => removeListItem(index, 'instructions')}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addListItem('instructions')}>Add Instruction</button>
      </div>
    </form>
  )
}
