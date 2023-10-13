import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarNav from "../components/SidebarNav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "racheldev",
  description: "Rachel's portfolio",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {/* <div className="min-h-screen "> */}
        <Header />
        <div className="flex flex-row h-full">
          <SidebarNav />
          <main className="flex border-4 h-full border-red-900 w-3/5 items-center justify-between p-24">
            <div className=" bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
          </main>
        </div>
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
