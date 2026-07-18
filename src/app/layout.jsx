import './globals.css'

export const metadata = {
  title: 'Trip Planner - Praga · Viena · Budapest 2026',
  description: 'Checklist interactivo para tu viaje a Europa Central',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#7c5be8',
  icons: {
    icon: '✈️',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-gray-50 to-gray-100">
        {children}
      </body>
    </html>
  )
}
