document.querySelectorAll('[data-include]').forEach(async element => {
  const file = element.getAttribute('data-include');
  try {
    const res = await fetch(file);
    element.innerHTML = await res.text();
  } catch {
    element.innerHTML = '<!-- inculde failed: ' + file + ' -->';
  }
});
