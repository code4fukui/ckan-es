const img = (src) => {
  const i = new Image();
  i.src = src;
  document.body.appendChild(i);
};
const cr = (tag, parent, text, cls) => {
  const c = document.createElement(tag);
  if (parent) {
    parent.appendChild(c);
  }
  if (text) {
    c.textContent = text;
  }
  if (cls) {
    c.className = cls;
  }
  return c;
};
export { img, cr };
