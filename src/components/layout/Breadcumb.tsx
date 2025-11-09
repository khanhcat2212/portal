import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { adminRoutes } from "@src/constants/adminRoutes";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split("/").filter(Boolean);

  let breadcrumbs = pathSegments.map((_, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const route = adminRoutes.find((r) => r.path === path);
    return {
      label: route?.label || pathSegments[index],
      path,
    };
  });

  if (pathname !== "/admin" && breadcrumbs[0]?.path === "/admin") {
    breadcrumbs = breadcrumbs.slice(1);
  }

  const currentLabel = breadcrumbs[breadcrumbs.length - 1]?.label?.toUpperCase();

  return (
    <div className="flex items-center justify-between w-full pb-5">
      <span className="text-[16px] text-grey-800 font-semibold">
        {currentLabel}
      </span>

      <div className="text-[.8125rem] text-grey-800 flex items-center gap-2">
        <span
          className="cursor-pointer hover:text-blue"
          onClick={() => router.push("/admin")}
        >
          WIFOSELL
        </span>

        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            <span>/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-grey-500">{crumb.label}</span>
            ) : (
              <span
                className="cursor-pointer hover:text-blue"
                onClick={() => router.push(crumb.path)}
              >
                {crumb.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
