import { useEffect, useState } from "react";

/* Get the status from the navigator */
const getNetworkStatus = () => (
  typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean" ?
    navigator.onLine :
    true
);

/* Checks if the user is online or offline and sets the value */
const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(getNetworkStatus());

  const goOnline = () => setNetworkStatus(true);
  const goOffline = () => setNetworkStatus(false);

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return networkStatus;
};

export default useNetworkStatus;
