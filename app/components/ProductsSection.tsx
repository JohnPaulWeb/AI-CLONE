import { useEffect, useState } from "react"



interface Product {
    id: number
    title: string
    description: string
    gradient: string
    icon?: string
    metadat?: {
        ration: string
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
        <section>

        </section>
    )
}