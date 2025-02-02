"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"


interface Product {
    id: number
    title: string
    description: string
    gradient: string
    icon?: string
    metadata?: {
        ratio: string
        quality: string
    }
    preview?: string
}



export default function ProductsSection() {

    const [products, setProducts] = useState<Product[]>([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/api/products")
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [])


    return(
        <section className="py-20 animate-fadeIn">
            <div className="container mx-auto px-4">
                <h2 className="text-3x1 md:text-4x1 font-semibold mb-12 animate-slideUp">Products</h2>
                <Carousel className="w-full">
                    <CarouselContent>
                        {products.map((product, index) => (
                            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className={`animate-slideUp`} style={{ animationDelay: `${index * 100}ms`}}>
                                    <Card className={`bg-gradient-to-br ${product.gradient} border-0 transition-transform duration-300 hover:scale-105`}>
                                      <CardContent className="p-6 aspect-square flex flex-col justify-between">
                                        {product.icon && (
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 bg-blue-500 rounded-full" />
                                            </div>
                                        )}

                                        {product.metadata && (
                                            <div className="bg-black/20 rounded-lg p-3 w-fit">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span>{product.metadata.ratio}</span>
                                                    <span>{product.metadata.quality}</span>
                                                </div>
                                            </div>
                                        )}

                                        {product.preview && (
                                            <div className="bg-white/90 text-black rounded-lg p-3 w-fit text-sm">
                                                {product.preview}
                                            </div>
                                        )}

                                        <h3 className="text-x1 font-semibold">{product.title}</h3>

                                      </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </section>
    )
}