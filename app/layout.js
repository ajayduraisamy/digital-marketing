import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Digital Marketing Course | Learn SEO, PPC, Social Media & More",
  description:
    "Join our comprehensive Digital Marketing Course and master SEO, PPC, social media marketing, content strategy, analytics, and more. Boost your marketing skills today!",
  keywords:
    "Digital Marketing Course, SEO, PPC, Social Media Marketing, Content Marketing, Analytics, Online Marketing Training, Marketing Strategies, Digital Advertising",
  robots: "index, follow",
  canonical: "https://digital-marketing-drnexgen.vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Digital Marketing Course | Learn SEO, PPC, Social Media & More",
    type: "website",
    url: "https://digital-marketing-drnexgen.vercel.app/",
    description:
      "Enroll in our Digital Marketing Course to gain practical skills in SEO, PPC, social media campaigns, content marketing, and analytics-driven strategies.",
    site_name: "Digital Marketing Course",
    images: [
      {
        url: "https://digital-marketing-drnexgen.vercel.app/img/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Course | Learn Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DigitalMarketingCourse",
    title: "Digital Marketing Course | Learn SEO, PPC, Social Media & More",
    description:
      "Master digital marketing with our comprehensive course covering SEO, PPC, content, social media, and analytics. Start learning today!",
    image: "https://digital-marketing-drnexgen.vercel.app/img/ogImage.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
