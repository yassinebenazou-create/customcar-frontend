import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext.jsx'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-edge bg-brand-panel/80 text-brand-ink shadow-sm backdrop-blur-md transition hover:border-brand-accent hover:text-brand-accent ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </motion.button>
  )
}
