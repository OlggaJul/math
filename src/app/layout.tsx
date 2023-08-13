import React from 'react'
import '../styles/globals.scss'
import { Layout } from '@/components/modules/layout'

import { Manrope } from 'next/font/google'

// export const metadata = {
//   title: 'ТВІЙ on-line РЕПЕТИТОР',
//   description:
//     'Онлайн репетитор з математики для підготовки до зно та нмт з математики для випускників та школярів'
// }

const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['cyrillic']
})

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
    <body className={`${manrope.className}`}>
      <Layout>{children}</Layout>
    </body>
    </html>
  )
}
