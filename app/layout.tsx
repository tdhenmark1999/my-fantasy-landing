import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="text-white min-h-screen max-w-[1182px] mx-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
