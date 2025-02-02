import { NextResponse } from "next/server"


export async function GET() {
    const products = [
        {
            id: 1,
            title: "Apple",
            description: "This is Apple ",
            gradient: "from-blue-500 to-blue-400",
            icon: "spiral",
        },
        {
            id: 2,
            title: "",
            description: "",
            gradient: "from-purple-500 to-purple-400",
            icon: "",
        },
        {
            id: 3,
            title: "",
            description: "",
            gradient: "from-red-400 to-red-300",
            icon: "",
        },
    ]

    return NextResponse.json(products)
}