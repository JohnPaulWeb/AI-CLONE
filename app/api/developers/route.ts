import { NextResponse } from "next/server"


export async function GET() {
    const articles = [
        {
            id: 1,
            title: "OPEN AI",
            date: "",
            gradient: "from-yellow-300 to-blue-300",
            category: "Product",
        },
        {
            id: 2,
            title: "DEEP SEEK",
            date: "",
            gradient: "from-orange-400 to-orange-300",
            category: "",
        },
        {
        id: 3,
        title: "PERPLEXITY AI",
        date: "",
        gradient: "from-blue-300 to-blue-400",
        category: "",
        },
    ]

    return NextResponse.json(articles)
}