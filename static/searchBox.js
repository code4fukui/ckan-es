import { css, h1, add, style, hr } from "https://js.sabae.cc/stdom.js";
import { cr } from "./std.js";

const searchBox = (parent) => {
  const search = cr("div", parent, null, "search");
  const inp = cr("input", search);
  inp.type = "text";
  const btn = cr("button", search);
  //btn.textContent = "検索";
  btn.innerHTML = "&#xf002";

  const bgcol = "#999"; // #3879D9
  style({
    ".search": {
      position: "relative",
      "box-sizing": "border-box",
      border: "2px solid " + bgcol,
      "background-color": "white",
      padding: "3px 5px",
      "border-radius": "20px",
      height: "2.2em",
      width: "20em",
      overflow: "hidden",
      "text-align": "left",
    },
    '.search input[type="text"]': {
      border: "none",
      height: "1.8em",
      width: "19em",
      "padding-left": "1.1em",
    },
    '.search input[type="text"]:focus': {
      outline: 0,
    },
    ".search button": {
      cursor: "pointer",
      "font-family": "FontAwesome",
      border: "none",
      background: bgcol,
      color: "#fff",
      position: "absolute",
      width: "3.5em",
      height: "3.0em",
      right: "0px",
      top: "-5px",
      outline: "none",
    },
    ".search ::-webkit-input-placeholder": {
      color: bgcol,
    },
  });
  return search;
};
export { searchBox };
