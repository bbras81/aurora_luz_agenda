import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aurora de Luz",
  description: "Terapias Holísticas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className="bg-background">
        {/* Script do Pixel do Meta */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${1742898359892269}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            src={`https://www.facebook.com/tr?id=${1742898359892269}&ev=PageView&noscript=1`}
            alt="Pixel do Meta"
            width={1}
            height={1}
            style={{ display: "none" }}
          />
        </noscript>
        {/* Fim do Script do Pixel */}

        <Navbar />
        {children}
      </body>
    </html>
  );
}
