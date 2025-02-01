import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Suspense } from "react";
import ProductsSection from "./components/ProductsSection";



export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md animate-slideDown">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="transition-transform hover:scale-105 active:scale-95">
                <Link href="#" className="flex items-center gap-2">
                  <Image src="/yas.jpg" alt="OpenAI" width={32} height={32} className="w-8 h-8" />
                  <span className="font-semibold">Ayanokoji</span>
                </Link>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                {["Research", "Products", "Safety", "Company"].map((item) => (
                  <div key={item} className="transition-transform hover:-translate-y-0.5 active:translate-y-0">
                    <Link href="#" className="text-sm hover:text-gray-400">
                     {item}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div className="transition-transform hover:scale-110 active:scale-90">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>


      <main className="pt-16">
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to to-blue-400 animate-fadeIn">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-scaleIn"> Ayanokoji Kiyotaka</h1>
            <p className="text-lg md:text-xl text-gray-300 animate-slideUp"> The Tech is evolving that's why we need to go </p>
            <div className="animate-fadeIn transition-transform hover:scale-105 active:scale-95">
              <Button className="bg-white text-black hover:bg-gray-200">Learn more</Button>
            </div>
          </div>
        </section>

        <Suspense fallback={<LoadingSection />}>
          <ProductsSection />
        </Suspense>


      </main>
    </div>
  );
}
