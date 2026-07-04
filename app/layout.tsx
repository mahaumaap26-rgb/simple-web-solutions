export const metadata = {
  title: "Simple Web Solutions | Sinduja Ranganathamani",
  description: "We build modern websites that grow businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
