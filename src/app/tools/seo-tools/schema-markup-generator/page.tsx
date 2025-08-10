import SchemaGenerator from './components/SchemaGenerator'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto px-4 py-8 mt-20">
        <section className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Boost Your SEO with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"> Structured Data</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Generate schema markup for your website in seconds. Improve your search engine visibility and click-through rates.
          </p>
        </section>

        <SchemaGenerator />

        <footer className="mt-20 text-center text-muted-foreground">
          <p>&copy; 2025 Schema Generator. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

