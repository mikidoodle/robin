import Header from "./Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState<
  "home" | "/docs" | "/download" | "/support"
  >("home");
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      setActivePage(url);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div>
      <Header activePage={activePage}/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
