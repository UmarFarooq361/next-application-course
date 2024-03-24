import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import "./globals.css"
export const metadata = {
  title: 'Next Website',
  description: 'Created by Umar Farooq using Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="inner.className">
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  )
}
