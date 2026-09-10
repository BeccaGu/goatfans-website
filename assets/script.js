// Keep the reserved layout readable until the five owner-supplied photos are uploaded.
document.querySelectorAll('.photo img').forEach((image) => {
  const showFallback = () => image.closest('.photo').classList.add('missing');
  image.addEventListener('error', showFallback);
  if (image.complete && image.naturalWidth === 0) showFallback();
});
