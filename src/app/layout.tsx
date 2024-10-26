import "./globals.css";
import StoreProvider from "./StoreProvider";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Sticky Stickers</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <StoreProvider count={0}>{children}</StoreProvider>
      </body>
    </html>
  );
}
