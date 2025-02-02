"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"



interface Article {
    id: number
    title: string
    date: string
    gradient: string
    category: string
}

export default function DeveloperSection() {

    const [articles, setArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)


    // try to use useEffect to determined how data send it 
    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch ("/api/developers")
                const data = await response.json()
                setArticles(data)
            } catch (error) {
                console.error("Error fetching articles: ", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchArticles()
    }, [])


    return (
        <section className="py-20 animate-fadeIn">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3x1 md:text-4x1 font-semibold">For Developers</h2>
                    <div className="flex gap-2 animate-fadeIn">

                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <Button variant="ghost" size="icon">
                            <ChevronRight className="w-5 h-5" />
                        </Button>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div key={article.id} className={`animate-slideUp`} style={{
                            animationDelay: `${index * 100}ms`
                        }}>
                            <Card className={`bg-gradient-to-br ${article.gradient} border-0 transition-transform duration-300 hover:scale-105`}>
                                <CardContent className="p-6 aspect-square flex flex-col justify-between">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span>{article.category}</span>
                                        <span>.</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <h3 className="text-x1 font-medium">{article.title}</h3>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}