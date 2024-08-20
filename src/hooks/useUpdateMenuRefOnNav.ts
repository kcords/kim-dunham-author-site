import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useUpdateMenuRefOnNav = (
  checkboxRef: React.RefObject<HTMLInputElement>
) => {
  const location = useLocation();

  useEffect(() => {
    if (!checkboxRef.current) return;
    checkboxRef.current.checked = false;
  }, [checkboxRef, location]);
};
