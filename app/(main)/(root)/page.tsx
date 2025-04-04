"use client";
import { useEffect, useRef } from "react";
import App from "./(components)/App";
import FAQ from "./(components)/FAQ";
import Ad from "./(components)/Ad";
import Hero from "./(components)/Hero";
import Subscription from "./(components)/Subscription";

export default function Home() {
  const downloadSectionRef = useRef<HTMLDivElement>(null);
  const subscriptionSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#m-app" && downloadSectionRef.current) {
      downloadSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#subscription" && subscriptionSectionRef.current) {
      subscriptionSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className=''>
      <Hero
        subscriptionSectionRef={subscriptionSectionRef}
        downloadSectionRef={downloadSectionRef}
      />
      <Ad />
      <Subscription subscriptionSectionRef={subscriptionSectionRef} />
      <FAQ />
      <App downloadSectionRef={downloadSectionRef} />
    </div>
  );
}
