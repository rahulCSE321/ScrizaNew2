export const metadata = {
    title: "About - Scriza Software Development Company",
    description:
      "We At Scriza Are Experts In Software Development, Starting From Scratch And Building It From The Ground Up. We Understand That Not All Projects Are The Same, And That's Why We Take The Time To Get To Know You And Your Project Before We Begin.",
    keywords: ["About us"],
    authors: [{ name: "Scriza Private Limited" }],
    robots: {
      index: false, // noindex
      follow: false, // nofollow
    },
    alternates: {
      canonical: "https://www.scriza.in/about",
    },
    openGraph: {
      type: "website",
      title: "Scriza About",
      description:
        "At Scriza Software, we believe that every business has the potential to be successful",
      url: "https://www.scriza.in/about",
      siteName: "Scriza Private Limited",
      images: [
        {
          url: "https://www.scriza.in/images/about-og.jpg", // ✅ replace with actual image path
          width: 1200,
          height: 630,
          alt: "Scriza About Page",
        },
      ],
    },
  };
   
export default function Layout({ children }) {
  return children
}