import * as React from "react";
import { SVGProps } from "react";
const SvgAuditor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 26.667 26.667"
    {...props}
  >
    <path
      data-name="Icon awesome-user-alt"
      d="M13.333 15a7.5 7.5 0 1 0-7.5-7.5 7.5 7.5 0 0 0 7.5 7.5zM20 16.667h-2.87a9.066 9.066 0 0 1-7.594 0H6.667A6.666 6.666 0 0 0 0 23.333v.833a2.5 2.5 0 0 0 2.5 2.5h21.667a2.5 2.5 0 0 0 2.5-2.5v-.833A6.666 6.666 0 0 0 20 16.667z"
      style={{
        fill: "#4b4b4b",
      }}
    />
  </svg>
);
export default SvgAuditor;