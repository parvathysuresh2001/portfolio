import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative h-full flex flex-col">
      <Header />
      <main
        id="skip-nav"
        className="mx-auto w-full max-w-5xl flex-1 px-4 py-24 sm:px-8"
      >
        {children}
      </main>
      <Footer />

      {/* Background image for the header */}
      <Image
        id="header-img"
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-full h-auto"
        src="/images/layout-bg/gradient-background-top.png"
        alt=""
        priority
      />

      {/* Background image for the footer */}
        <Image
        id="footer-img"
        width={1512}
        height={447}
        className="absolute left-1/2 -z-10 -translate-x-1/2 w-full h-auto"
        src="/images/layout-bg/gradient-background-bottom.png"
        alt=""
        priority
        style={{ bottom: 0 }}
      />
    </div>
  );
};

export default MainLayout;  