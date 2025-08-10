"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDownIcon as ArrowsUpDownIcon } from 'lucide-react'

export function PowerConverter() {
  const [fromValue, setFromValue] = useState<number>(0)
  const [fromUnit, setFromUnit] = useState<"W" | "kW">("W")

  const toggleUnits = () => {
    setFromUnit(fromUnit === "W" ? "kW" : "W")
  }

  const convertedValue = fromUnit === "W" ? fromValue / 1000 : fromValue * 1000

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-primary">Power Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center text-lg">
            {fromValue} {fromUnit} equals to {convertedValue} {fromUnit === "W" ? "kW" : "W"}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                value={fromValue}
                onChange={(e) => setFromValue(parseFloat(e.target.value) || 0)}
                className="text-right bg-background"
              />
              <span className="ml-2">{fromUnit}</span>
            </div>
            <Button variant="outline" size="icon" onClick={toggleUnits}>
              <ArrowsUpDownIcon className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <Input
                type="number"
                value={convertedValue}
                readOnly
                className="text-right bg-background"
              />
              <span className="ml-2">{fromUnit === "W" ? "kW" : "W"}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

