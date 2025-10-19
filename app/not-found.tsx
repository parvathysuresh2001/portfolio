import GoToHomepage from "@/components/home/go-to-homepage";
import MainLayout from "@/components/layout/main-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

const NotFound = () => {
  return (
    <MainLayout>
      <div className="mb-40 mt-52 flex flex-col items-center justify-center gap-12">
        <h1 className="text-center text-6xl font-bold">{"Page Not Found!"}</h1>
        <GoToHomepage />
      </div>
    </MainLayout>
  );
};

export default NotFound;
