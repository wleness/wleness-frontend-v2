import React from "react";

export default function ActivitySubPageLayout(props) {
  const page = props.data.map(({ component: Component, ...props }, index) => {
    return <Component key={index} {...props} />;
  });
  return page;
}
