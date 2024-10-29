// Utils
import { PUBLIC_ROUTES } from "@constants/path.const";

/* Check if the pathname/page is public or private */
export const isPublicRoute = pathname => {
  if (!pathname) return false;
  return (PUBLIC_ROUTES || []).some(publicRoute => pathname.includes(publicRoute));
};
