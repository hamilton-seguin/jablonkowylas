import "./src/styles/global.css";

import React from "react";
import RootElement from "./src/components/RootElement";

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);

export const onPrefetchPathname = ({ loadPage }) => {
  if (window.indexPageData === undefined) {
    loadPage("/houses-huts/").then((result) => {
      window.indexPageData = result;

      if (window.setIndexPageData) window.setIndexPageData();
    });
  }
};
export const onRouteUpdate = ({ location, prevLocation }) => {
  // Remove the saved scroll position if the previous page was a gallery page
  // prevLocation && console.log("prevLocation.pathname", prevLocation.pathname );
  // if (!location.pathname.includes("/gallery/") || (prevLocation.pathname.includes("/gallery/") && !location.pathname.includes("/gallery/"))) {
  //   localStorage.removeItem("savedScrollPosition");
  // }
  // Check if the URL ends with .com
  if (location.pathname.endsWith(".com")) {
    // Redirect to the same URL with .pl
    const newUrl = location.pathname.replace(/\.com$/, ".pl");
    window.location.replace(newUrl);
  }
};
