"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Download, FileJson, FileSpreadsheet } from "lucide-react"

export default function JsonToCsvConverter() {
  const [jsonInput, setJsonInput] = useState("")
  const [csvOutput, setCsvOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const convertJsonToCsv = () => {
    try {
      setError(null)

      // Parse JSON input
      const jsonData = JSON.parse(jsonInput)

      // Handle empty array or object
      if (Array.isArray(jsonData) && jsonData.length === 0) {
        setCsvOutput("")
        setError("JSON array is empty")
        return
      }

      if (Object.keys(jsonData).length === 0) {
        setCsvOutput("")
        setError("JSON object is empty")
        return
      }

      // Convert JSON to CSV
      let csv = ""

      // Handle array of objects (most common case)
      if (Array.isArray(jsonData)) {
        // Get headers from the first object
        const headers = Object.keys(jsonData[0])
        csv += headers.join(",") + "\n"

        // Add data rows
        jsonData.forEach((item) => {
          const row = headers.map((header) => {
            const value = item[header]
            // Handle different data types
            if (value === null || value === undefined) return ""
            if (typeof value === "object") return JSON.stringify(value).replace(/"/g, '""')
            return typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : value
          })
          csv += row.join(",") + "\n"
        })
      } else {
        // Handle single object
        const headers = Object.keys(jsonData)
        csv += headers.join(",") + "\n"

        const row = headers.map((header) => {
          const value = jsonData[header]
          if (value === null || value === undefined) return ""
          if (typeof value === "object") return JSON.stringify(value).replace(/"/g, '""')
          return typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : value
        })
        csv += row.join(",") + "\n"
      }

      setCsvOutput(csv)
    } catch (err) {
      setCsvOutput("")
      setError("Invalid JSON format. Please check your input.")
      console.error(err)
    }
  }

  const downloadCsv = () => {
    if (!csvOutput) return

    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "converted_data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">JSON to CSV Converter</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileJson className="h-5 w-5" />
              JSON Input
            </CardTitle>
            <CardDescription>Paste your JSON data here</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder='[{"name":"John","age":30},{"name":"Jane","age":25}]'
              className="min-h-[300px] font-mono"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button onClick={convertJsonToCsv} disabled={!jsonInput} className="w-full">
              Convert to CSV
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              CSV Output
            </CardTitle>
            <CardDescription>Your converted CSV data</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Textarea
              readOnly
              className="min-h-[300px] font-mono"
              value={csvOutput}
              placeholder="CSV output will appear here"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={downloadCsv} disabled={!csvOutput} className="w-full" variant="secondary">
              <Download className="mr-2 h-4 w-4" />
              Download CSV
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        <h2 className="text-lg font-medium mb-2">How to use:</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Paste your JSON data in the input field (array of objects works best)</li>
          <li>Click the "Convert to CSV" button</li>
          <li>View the converted CSV in the output field</li>
          <li>Download the CSV file using the download button</li>
        </ol>
      </div>
    </div>
  )
}
