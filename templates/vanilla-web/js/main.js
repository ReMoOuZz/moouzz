import { onDomReady } from "./lib/dom.js";

function pageId() {
  return document.body.dataset.page || "home";
}

async function initPage(id) {
  try {
    const module = await import(`./pages/${id}.js`);
    module?.init?.();
  } catch (e) {
    console.warn(`[initPage] Module introuvable: ./pages/${id}.js`, e);
  }
}

onDomReady(() => {
  document.addEventListener("partials:ready", () => initPage(pageId()), { once: true })
})

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}, { once: true });
