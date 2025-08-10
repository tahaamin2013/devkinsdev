"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import type { Appliance } from "./calculator types"

const APPLIANCES: Omit<Appliance, "count">[] = [
  { name: "1 Ton Inverter AC", power: 1000 },
  { name: "Iron", power: 1100 },
  { name: "Refrigerator", power: 750 },
  { name: "Water Pump", power: 1000 },
  { name: "Fan", power: 120 },
  { name: "Bulb (LED)", power: 25 },
  { name: "LED/TV", power: 150 },
  { name: "Washing Machine", power: 300 },
]

export function Calculator() {
  const [appliances, setAppliances] = useState<Appliance[]>(
    APPLIANCES.map(a => ({ ...a, count: 0 }))
  )

  const updateCount = (index: number, count: number) => {
    const newAppliances = [...appliances]
    newAppliances[index] = {
      ...newAppliances[index],
      count: Math.max(0, count)
    }
    setAppliances(newAppliances)
  }

  const totalPower = appliances.reduce((sum, app) => sum + (app.power * app.count), 0)

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-primary">Solar Power Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary">Appliance</TableHead>
              <TableHead className="text-primary">No. of Appliances</TableHead>
              <TableHead className="text-primary">Total Power (Watts)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appliances.map((appliance, index) => (
              <TableRow key={appliance.name} className="hover:bg-muted/50">
                <TableCell>{appliance.name}</TableCell>
                <TableCell>
                  <Input
                    value={appliance.count}
                    onChange={(e) => updateCount(index, parseInt(e.target.value) || 0)}
                    className="w-24 bg-background"
                  />
                </TableCell>
                <TableCell>{appliance.power * appliance.count} Watts</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2} className="font-bold">Total Power</TableCell>
              <TableCell className="font-bold">{totalPower} Watts</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

