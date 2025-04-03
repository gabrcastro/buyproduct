"use client";

import PageDefault from "@/components/page-default";
import useIsMobile from "@/hooks/is_mobile.hook";

export default function PrimeBiomePage() {
  const isMobile = useIsMobile();

  return (
    <PageDefault
      backgroundImage={
        isMobile ? "/bgs/primebiomemobile.png" : "/bgs/primebiome.png"
      }
      color="#F08688"
      hopLink=""
    />
  );
}
