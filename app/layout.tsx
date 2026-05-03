import "./globals.css";

export const metadata = {
  title: "Ujjwal Saini - Portfolio",
  description: "Full Stack Developer & DevOps Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}