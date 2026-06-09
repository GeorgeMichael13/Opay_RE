import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Header />
       <main className="flex flex-col min-h-screen bg-white">
        {/* Hero: Priority LCP component */}
        <Hero />
        </main>
    </>
  );
}
