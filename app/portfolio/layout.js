export const metadata = {
    title: "Scriza Portfolio: Showcase Your Creativity | Scriza",
    description:
      "Discover Scriza Portfolio, an innovative platform to spotlight your creative work. Engage, inspire, and charm your audience with our state-of-the-art portfolio tools. Explore now!",
    keywords: ["scriza portfolio", "portfolio showcase", "creative portfolio"],
    authors: [{ name: "Scriza Private Limited" }],
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://www.scriza.in/portfolio",
      title: "Scriza Portfolio",
      description:
        "Explore and create impressive portfolios with Scriza Portfolio. Capture your unique creativity with ease and eloquence. Stand out online today!",
      siteName: "Scriza Private Limited",
      images: [
        {
          url: "https://www.scriza.in/images/portfolio-banner.jpg", // 🔄 replace with actual banner
          width: 1200,
          height: 630,
          alt: "Scriza Portfolio Showcase",
        },
      ],
    },
    alternates: {
      canonical: "https://www.scriza.in/portfolio",
    },
  };
  export default function Layout({ children }) {
    return children
  }
