export const select = (selector, root = document) => root.querySelector(selector);

export const selectAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

export const onEvent = (el, type, handler, options) => {
  el.addEventListener(type, handler, options);
  return () => el.removeEventListener(type, handler, options)
}

export const onDomReady = (fn) => {
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
}
