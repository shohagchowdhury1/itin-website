import Link from 'next/link'
import { getAllMarkdownSlugs, getMarkdownPage } from '@/lib/markdown'

export default function HomePage() {
  const slugs = getAllMarkdownSlugs()
  
  // Categorize pages
  const servicePages = slugs.filter((s) =>
    s.includes('service') ||
    s.includes('apply') ||
    s.includes('renewal') ||
    s.includes('correction') ||
    s.includes('replacement') ||
    s.includes('expedited') ||
    s.includes('emergency') ||
    s.includes('fast-track') ||
    s.includes('consultation') ||
    s.includes('bundle') ||
    s.includes('reactivation') ||
    s.includes('status-check') ||
    s.includes('offline') ||
    s.includes('online') ||
    s.includes('self-application') ||
    s.includes('caa') ||
    s.includes('llc-formation') ||
    s.includes('checker') ||
    s.includes('validator') ||
    s.includes('calculator') ||
    s.includes('quiz') ||
    s.includes('helper') ||
    s.includes('tracker') ||
    s.includes('tool')
  )
  
  const blogPages = slugs.filter((s) => !servicePages.includes(s))
  
  const getTitle = (slug: string) => {
    const page = getMarkdownPage(slug)
    return page?.title || slug.replace(/-/g, ' ')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-itin-dark mb-6">
          Get Your <span className="text-itin-blue">ITIN Number</span> Fast
        </h1>
        <p className="text-lg md:text-xl text-itin-gray max-w-2xl mx-auto mb-10">
          Expert ITIN application services for non-US citizens. Simple, secure, and
          hassle-free processing in 6-11 weeks.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/apply/"
            className="inline-flex items-center px-8 py-4 bg-itin-blue text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Apply Now — $197
          </Link>
          <Link
            href="/what-is-an-itin-number/"
            className="inline-flex items-center px-8 py-4 bg-white text-itin-dark border-2 border-itin-border text-lg font-semibold rounded-xl hover:border-itin-blue hover:text-itin-blue transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-itin-border">
        {[
          { value: '15K+', label: 'Applications Filed' },
          { value: '150+', label: 'Countries Served' },
          { value: '99%', label: 'Success Rate' },
          { value: '2-3 Days', label: 'Express Prep' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-itin-blue">{stat.value}</div>
            <div className="text-sm text-itin-gray mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Service Pages */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-itin-dark mb-8 text-center">
          ITIN Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicePages.map((slug) => (
            <Link
              key={slug}
              href={`/${slug}/`}
              className="group p-4 bg-itin-light rounded-xl border border-itin-border hover:border-itin-blue hover:shadow-md transition-all"
            >
              <h3 className="text-base font-semibold text-itin-dark group-hover:text-itin-blue transition-colors capitalize">
                {getTitle(slug)}
              </h3>
              <span className="text-xs text-itin-gray mt-1 inline-block">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Pages */}
      <section className="py-16 border-t border-itin-border">
        <h2 className="text-3xl font-bold text-itin-dark mb-8 text-center">
          ITIN Guides & Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPages.map((slug) => (
            <Link
              key={slug}
              href={`/${slug}/`}
              className="group p-4 bg-white rounded-xl border border-itin-border hover:border-itin-blue hover:shadow-md transition-all"
            >
              <h3 className="text-base font-semibold text-itin-dark group-hover:text-itin-blue transition-colors capitalize">
                {getTitle(slug)}
              </h3>
              <span className="text-xs text-itin-gray mt-1 inline-block">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="bg-itin-light rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-itin-dark mb-4">
            Ready to Get Your ITIN?
          </h2>
          <p className="text-itin-gray mb-8 max-w-xl mx-auto">
            Start your application today. Standard service $197. Express service $297.
          </p>
          <Link
            href="/apply/"
            className="inline-flex items-center px-8 py-4 bg-itin-green text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  )
}
