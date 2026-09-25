(() => {
  for (const heading of document.querySelectorAll("h5")) {
    const section = document.createElement("section");
    section.className = "h5-section";
    heading.before(section);

    let current = heading;

    while (current) {
      const next = current.nextSibling;

      if (
        current !== heading &&
        current.nodeType === Node.ELEMENT_NODE &&
        /^H[1-5]$/.test(current.tagName)
      ) {
        break;
      }

      section.append(current);
      current = next;
    }
  }
})();
