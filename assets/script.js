// Keep the reserved layout readable until the five owner-supplied photos are uploaded.
document.querySelectorAll('.photo img').forEach((image) => {
  const showFallback = () => image.closest('.photo').classList.add('missing');
  image.addEventListener('error', showFallback);
  if (image.complete && image.naturalWidth === 0) showFallback();
});
/* Custom lemon cursor */
(() => {
  const initialiseCursor = () => {
    if (document.querySelector(".goat-cursor")) return;

    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const cursor = document.createElement("div");
    cursor.className = "goat-cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);

    const interactiveSelector = [
      "a[href]",
      "button",
      '[role="button"]',
      "summary",
      'input[type="button"]',
      'input[type="submit"]',
      'input[type="reset"]',
      'input[type="checkbox"]',
      'input[type="radio"]'
    ].join(",");

    /* Keep native cursors for text editing and embedded content */
    const nativeSelector = [
      "iframe",
      "video",
      "select",
      "textarea",
      '[contenteditable]:not([contenteditable="false"])',
      'input:not([type="button"]):not([type="submit"])' +
        ':not([type="reset"]):not([type="checkbox"])' +
        ':not([type="radio"])'
    ].join(",");

    let x = 0;
    let y = 0;
    let frame = null;
    let hasPointer = false;

    const hideCursor = () => {
      hasPointer = false;
      cursor.classList.remove("is-visible");
      document.documentElement.classList.remove(
        "goat-cursor-active"
      );
    };

    const renderCursor = () => {
      frame = null;

      if (!media.matches || !hasPointer) {
        hideCursor();
        return;
      }

      const target = document.elementFromPoint(x, y);

      if (!target || target.closest(nativeSelector)) {
        hideCursor();
        return;
      }

      const interactive = target.closest(interactiveSelector);
      const disabled = interactive && (
        interactive.matches(":disabled") ||
        interactive.getAttribute("aria-disabled") === "true"
      );

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      cursor.classList.toggle(
        "is-interactive",
        Boolean(interactive && !disabled)
      );

      cursor.classList.add("is-visible");
      document.documentElement.classList.add(
        "goat-cursor-active"
      );
    };

    const scheduleRender = () => {
      if (frame === null) {
        frame = requestAnimationFrame(renderCursor);
      }
    };

    document.addEventListener("pointermove", (event) => {
      if (!media.matches || event.pointerType !== "mouse") {
        hideCursor();
        return;
      }

      x = event.clientX;
      y = event.clientY;
      hasPointer = true;
      scheduleRender();
    }, { passive: true });

    document.addEventListener("pointerout", (event) => {
      if (!event.relatedTarget) hideCursor();
    });

    document.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse") hideCursor();
    }, { passive: true });

    document.addEventListener("scroll", () => {
      if (hasPointer) scheduleRender();
    }, { passive: true, capture: true });

    window.addEventListener("blur", hideCursor);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hideCursor();
    });

    media.addEventListener("change", hideCursor);
  };

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseCursor,
      { once: true }
    );
  } else {
    initialiseCursor();
  }
})();
