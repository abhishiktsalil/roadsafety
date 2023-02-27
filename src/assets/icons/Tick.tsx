import * as React from "react";
import { SVGProps } from "react";
const SvgTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 41.527 32.5"
    {...props}
  >
    <g data-name="Group 1" fill="none" stroke="#000" strokeWidth={5}>
      <path data-name="Line 1" d="m1.568 16.053 18 14.5" />
      <path data-name="Line 2" d="m39.568 1.553-23 29" />
    </g>
  </svg>
);
export default SvgTick;
