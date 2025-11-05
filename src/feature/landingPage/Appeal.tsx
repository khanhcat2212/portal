import Button from "@src/components/button/Button";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Appeal: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center bg-grey-300 py-16 md:py-22 px-8 text-black-300">
      <h1 className="text-[1.25rem] md:text-[2.25rem] text-center font-bold leading-snug md:leading-[1.3] pb-5">
        Wifosell - Tất cả những gì bạn cần để quản lý cửa hàng
      </h1>

      <p className="text-[.8125rem] md:text-[1.125rem] pb-6 text-center">
        Chúc mừng bạn có 7 ngày dùng thử miễn phí. Nhanh tay đăng ký ngay !
      </p>

      <Button variant="primary" size={isMd ? "lg" : "sm"}>
        Dùng thử miễn phí
      </Button>
    </div>
  );
};

export default Appeal;
