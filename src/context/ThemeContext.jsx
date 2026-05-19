import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

/* eslint-disable react-refresh/only-export-components -- provider + hook pattern */
const STORAGE_KEY = 'cc-theme-preference'
const LEGACY_STORAGE_KEY = 'cc-theme'

const ThemeContext = createContext(null)

function applyTheme(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'light' ? '#C6C6C6' : '#111111')
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const saved = window.localStorage?.getItem(STORAGE_KEY)
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      // Storage can be unavailable in strict/private browser modes.
    }
    return 'dark'
  })

  useEffect(() => {
    applyTheme(theme)
    try {
      window.localStorage?.setItem(STORAGE_KEY, theme)
      window.localStorage?.removeItem(LEGACY_STORAGE_KEY)
    } catch {
      // Theme is still applied through the DOM dataset.
    }
  }, [theme])

  const setTheme = useCallback((t) => {
    setThemeState(t === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark',
    }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
