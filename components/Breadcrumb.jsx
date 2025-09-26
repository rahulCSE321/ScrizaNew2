import React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

const Breadcrumb = ({ items, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.label}
            </Link>
          ) : (
            <span className="flex items-center text-gray-900 font-medium">
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

// For white backgrounds (like in hero sections)
const BreadcrumbLight = ({ items, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-white/60" />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center text-white/80 hover:text-white transition-colors duration-200"
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.label}
            </Link>
          ) : (
            <span className="flex items-center text-white font-medium">
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export { Breadcrumb, BreadcrumbLight } 