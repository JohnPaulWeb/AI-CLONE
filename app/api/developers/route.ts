import { NextResponse } from "next/server"


export async function GET() {
    const articles = [
        {
            id: 1,
            title: "",
            date: "",
            gradient: "",
            category: "",
        },
        {
            id: 2,
            title: "",
            date: "",
            gradient: "",
            category: "",
        },
        {
        id: 1,
        title: "",
        date: "",
        gradient: "",
        category: "",
        },
    ]

    return NextResponse.json(articles)
}