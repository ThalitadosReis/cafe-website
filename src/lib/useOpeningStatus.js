import { useEffect, useState } from "react";
import { getOpeningStatus } from "./openingStatus";

export function useOpeningStatus() {
  const [status, setStatus] = useState(() => getOpeningStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpeningStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
