import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTopWithRouteCheck = () => {
  const router = useRouter();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Function to handle route changes and compare the current route
  const handleRouteChange = (newRoute) => {
    const previousRoute = localStorage.getItem("currentRoute");

    // If there's a previous route and it's different from the new route
    if (previousRoute && previousRoute !== newRoute) {
      scrollToTop(); // Scroll to top if the route has changed
    }

    // Update localStorage with the new route
    localStorage.setItem("currentRoute", newRoute);
  };

  // On initial mount, store the current route in localStorage
  localStorage.setItem("currentRoute", router.asPath);

  // Listen for route changes and handle the comparison
  router.events.on("routeChangeComplete", handleRouteChange);

  // Clean up the event listener on unmount
  return () => {
    router.events.off("routeChangeComplete", handleRouteChange);
  };
  ;

  return null; // No UI component, purely functional
};

export default ScrollToTopWithRouteCheck;
