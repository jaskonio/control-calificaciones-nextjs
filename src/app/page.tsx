import { Suspense } from "react";
import HomeContent from "./components/ui/homeContent";
import HomeLoadingSkeleton from "./components/ui/homeLoadingSkeleton";

export default function Home() {
  return (
    <Suspense fallback={<HomeLoadingSkeleton />}>
      <HomeContent/>
    </Suspense>
  );
}
