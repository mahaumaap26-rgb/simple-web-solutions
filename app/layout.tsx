export const metadata = {
  title: "Simple Web Solutions | Sinduja Ranganathamani",
  description:
    "We design modern, fast, SEO-friendly websites that help businesses grow and generate more leads.",
  keywords: [
    "website design",
    "web development",
    "business website",
    "freelance web designer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
