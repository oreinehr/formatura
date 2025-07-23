"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X, Play } from "lucide-react"
import Link from "next/link"
import ConfirmacaoModal from "@/components/ui/ConfirmacaoModal"

export default function LusionWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [confirmado, setConfirmado] = useState(false)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-40 bg-black/0 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
            Guilherme Reinehr
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Localização", "Confirma sua presença"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-gray-300 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>


     

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"
        />

        {/* Fotos engraçadas com overlay escuro no celular e responsividade */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 rounded-xl shadow-lg overflow-hidden cursor-pointer opacity-90
                     sm:w-40 sm:h-40 sm:top-10 sm:left-5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <img src="/foto1.png" alt="Foto engraçada 1" className="w-full h-full object-cover" />
          {/* Overlay escuro no celular */}
          <div className="absolute inset-0 bg-black opacity-40 block sm:hidden"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 rounded-xl shadow-lg overflow-hidden cursor-pointer opacity-90
                     sm:w-32 sm:h-32 sm:bottom-10 sm:right-5"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 0.9, opacity: 0.9 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <img src="/foto2.png" alt="Foto engraçada 2" className="w-full h-full object-cover" />
          {/* Overlay escuro no celular */}
          <div className="absolute inset-0 bg-black opacity-40 block sm:hidden"></div>
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Minha
              <br />
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Formatura
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              É com imensa alegria que convido você para celebrar comigo a conquista de uma grande etapa da minha vida:
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a
  href="https://www.bing.com/maps?&mepi=56~Directions~Embedded~Direction_Button&ty=0&rtp=pos.-29.572795867919922_-50.78944396972656__Quiero%20Caf%C3%A9__e_~&mode=d&v=2&sV=1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg group">
    Localização
    <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <ArrowRight className="w-5 h-5" />
    </motion.div>
  </Button>
</a>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setConfirmado(true)}
                className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg group bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Confirmar presença
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Localização</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Espero você! Confira mais informações abaixo:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data",
                description: "Sábado, dia 09 de Agosto de 2025",
                icon: "📅",
              },
              {
                title: "Endereço",
                description: "Rua Osvaldo Cruz 309, Igrejinha, RS, 95650-000 ·",
                icon: "🎈",
              },
              {
                title: "Janta",
                description: "Quiero Café, Igrejinha",
                icon: "😋",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ConfirmacaoModal show={confirmado} onClose={() => setConfirmado(false)} />
    </div>
  )
}
