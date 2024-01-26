import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-black">
        <header className="bg-slate-900 text-white px-4 py-3 flex justify-between items-center">
          <Link href={"/"} className="cursor-pointer">
            <h1 className="text-3xl font-semibold">The Next App</h1>
          </Link>

          <div className="flex gap-2 items-center justify-center  ">
            <Link
              href={"/login"}
              className="hover:bg-white hover:text-black rounded-sm px-2 py-1"
            >
              Login
            </Link>
            <Link
              href={"/profile"}
              className="hover:bg-white hover:text-black rounded-sm px-2 py-1"
            >
              Profile
            </Link>
            <Link
              href={"/"}
              className="hover:bg-white hover:text-black rounded-sm px-2 py-1"
            >
              Home
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
