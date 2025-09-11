import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, Clock } from 'lucide-react'

export const metadata = {
  title: 'Trending Topics | Scriza Private Limited',
  description: 'Latest trending articles about Tesla aggregated via NewsAPI.'
}

const NEWS_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2025-08-04&sortBy=publishedAt&apiKey=15b0d151583b4a24be5c2a88891cb3c8'

async function fetchTrendingArticles() {
  try {
    const res = await fetch(NEWS_URL, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch news')
    }
    const data = await res.json()
    if (data?.status !== 'ok') {
      throw new Error('NewsAPI returned non-ok status')
    }
    return Array.isArray(data.articles) ? data.articles : []
  } catch (err) {
    console.error('Trending fetch error:', err)
    return []
  }
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: 'numeric', month: 'short', day: '2-digit',
      hour: '2-digit', minute: '2-digit'
    })
  } catch {
    return iso
  }
}

export default async function TrendingTopicsPage() {
  const articles = await fetchTrendingArticles()
  const topArticles = articles.slice(0, 24)

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="about" />

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-6 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Trending Topics</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Live updates from across the web about Tesla, powered by NewsAPI.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <Globe className="w-4 h-4 text-[#38857a]" />
            {/*   */}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {topArticles.length === 0 ? (
            <div className="text-center text-gray-600">No articles available right now. Please try again later.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topArticles.map((a, idx) => (
                <Card key={`${a.url || idx}`} className="bg-white border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative">
                    {a.urlToImage ? (
                      <img src={a.urlToImage} alt={a.title || 'Article image'} className="w-full h-44 object-cover" />
                    ) : (
                      <div className="w-full h-44 bg-gradient-to-r from-[#38857a]/20 to-[#FF914C]/20" />
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge className="text-xs" style={{ backgroundColor: '#FF914C' }}>
                        {a?.source?.name || 'Unknown'}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg leading-snug line-clamp-2">{a.title}</CardTitle>
                    {a.description && (
                      <CardDescription className="line-clamp-2">{a.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#38857a]" />
                        <span>{formatDate(a.publishedAt)}</span>
                      </div>
                      {a.author && (
                        <span className="truncate max-w-[45%] text-right">{a.author}</span>
                      )}
                    </div>
                    {a.url && (
                      <div className="mt-4">
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#38857a] hover:text-[#FF914C] font-semibold text-sm"
                        >
                          Read full article →
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}


