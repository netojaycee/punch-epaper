"use client";
import { usePathname, useRouter } from "next/navigation";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import HeaderContextProvider from "../components/header/hook/context";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const handleNavClick = (section: string) => {
    if (pathname === "/") {
      // Already on the homepage, just update the hash
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage first
      router.push(`/#${section}`);
    }
  };
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <HeaderContextProvider>
          <Header handleNavClick={handleNavClick} />
          <div className='min-h-[82vh] bg-gray-200 text-black'>{children}</div>
          <Footer />
        </HeaderContextProvider>
      </QueryClientProvider>
    </div>
  );
}
