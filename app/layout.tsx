import './globals.css'
import { Manrope } from 'next/font/google'
import QueryProviders from './utils/provider'

const manrope = Manrope({ subsets: ['latin'] })
export const metadata = {
  title: 'Advice generator app',
  description: 'Frontend Mentor - Advice generator app by Goat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <QueryProviders>
          {children}
        </QueryProviders>
      </body>
    </html>
  )
}
