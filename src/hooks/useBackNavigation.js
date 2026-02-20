import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useBackNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tag = event.target.tagName;

      if (
        event.key === "Backspace" &&
        tag !== "INPUT" &&
        tag !== "TEXTAREA"
      ) {
        if (location.pathname === "/") return;

        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]); 
}

export default useBackNavigation;