import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/nav/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="w-full max-w-300 mx-auto px-(--pad) flex flex-col gap-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
