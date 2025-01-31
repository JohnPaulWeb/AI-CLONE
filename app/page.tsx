import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";



export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20}}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md"
        >

          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <motion.div whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                  <Link href="#" className="flex items-center gap-2">
                     <Image src="/yas.jpg" alt="Anime" width={32} height={32} className="w-8 h-8" />
                     <span className="font-semibold">OPENAI
                     </span>
                  </Link>
                </motion.div>



                <nav className="hidden md:flex items-center gap-6">
                  {["Research", "Products", "Safety", "Company"].map((item) => (
                    <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                      <Link href="#" className="text-sm hover:text-gray-500">
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>


              {/* This is motion */}

              <motion.div whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>

              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>

              </motion.div>
              
            </div>
          </div>
      </motion.header>


      <main className="pt-16"> 
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh]"

      </main>
    </div>
  );
}
