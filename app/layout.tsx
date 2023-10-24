import "./globals.css";
import "../public/resources/custom.css"

export const metadata = {
  title: "Todolist App",
  description: "Todolist App ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}