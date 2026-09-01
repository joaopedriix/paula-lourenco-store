import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { UIProvider } from "@/context/ui-context";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { ToastFeedback } from "@/components/ui/Toast";
import { site } from "@/data/site";

const bodoniModa = Bodoni_Moda({
  variable: "--font-pl-serif",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-pl-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paulalourencostore.com.br"),
  title: {
    default: `${site.nome} — Moda feminina elegante`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricaoCurta,
  openGraph: {
    title: site.nome,
    description: site.descricaoCurta,
    type: "website",
    locale: "pt_BR",
    images: ["/brand/og-image-source.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bodoniModa.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <CartProvider>
          <WishlistProvider>
            <UIProvider>
              <AnnouncementBar />
              <Header />
              <MobileMenu />
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
              <WhatsAppFloatingButton />
              <CartDrawer />
              <SearchOverlay />
              <ToastFeedback />
            </UIProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
