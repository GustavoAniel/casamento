import { Nanum_Myeongjo } from "next/font/google"

const nanum = Nanum_Myeongjo({ preload: false, weight: "400" })

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="w-full flex flex-1 justify-center py-10">
          <div className={nanum.className}>
            <h1 className="font-bold text-8xl flex items-center">G<p className="text-6xl font-bold text-emerald-400">&</p>M</h1>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}