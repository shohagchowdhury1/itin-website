import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ITIN Application Service | Get Your ITIN Number Fast',
  description: 'Apply for your Individual Taxpayer Identification Number (ITIN) with expert help. Fast, reliable ITIN services for non-US citizens.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-itin-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-xl font-bold text-itin-dark hover:no-underline">
                <span className="text-itin-blue">ITIN</span>.so
              </a>
              <nav className="hidden md:flex items-center gap-8">
                <a href="/" className="nav-link text-sm">Home</a>
                <a href="/apply/" className="nav-link text-sm">Apply</a>
                <a href="/what-is-an-itin-number/" className="nav-link text-sm">What is ITIN</a>
                <a href="/how-to-apply-for-itin-step-by-step/" className="nav-link text-sm">How to Apply</a>
                <a href="/itin-faqs/" className="nav-link text-sm">FAQs</a>
              </nav>
              <a
                href="/apply/"
                className="hidden md:inline-flex items-center px-4 py-2 bg-itin-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>

        <footer className="footer">
          <div className="max-w-6xl mx-auto">
            <p>© 2026 ITIN.so — All rights reserved.</p>
            <p className="mt-2 text-xs">
              Not affiliated with the IRS. Professional ITIN application assistance service.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
