import { useEffect, useState } from "react";

function useIsMd() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handler = () => setIsMd(window.innerWidth >= 768);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMd;
}

export default useIsMd