    "use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ConfirmacaoModal({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-2xl p-10 max-w-md w-full text-center space-y-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-3xl font-bold">🎉 Parabéns!</h2>
            <p>Você confirmou sua presença.</p>
            <p>Agora confirme novamente pelo WhatsApp clicando no botão abaixo 👇</p>

            <Link
              href="https://wa.me/5551980192902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3">
                Confirmar via WhatsApp
                <ArrowUpRight className="ml-2" />
              </Button>
            </Link>

            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
