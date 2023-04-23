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

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   return getSavedScrollPosition(location);
// };

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   if (location && location.state)
//     location.state.referrer = prevLocation ? prevLocation.pathname : null
// }