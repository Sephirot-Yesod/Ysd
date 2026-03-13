import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'World of Yesod | \u7D2B\u5251\u5DE5\u4F5C\u5BA4',
  description:
    'AI Architecture & Product Strategy. Partnering with startups and enterprises to design, build, and scale intelligent systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
