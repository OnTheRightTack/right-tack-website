(() => {
  const emailButton = document.querySelector("[data-email-link]");

  if (!emailButton) {
    return;
  }

  const address = [
    116, 111, 109, 64, 111, 110, 116, 104, 101, 114, 105, 103, 104, 116, 116, 97, 99, 107, 46, 99,
    111, 109,
  ]
    .map((character) => String.fromCharCode(character))
    .join("");

  emailButton.addEventListener("click", () => {
    const subject = encodeURIComponent("Marketing inquiry");
    window.location.href = `mailto:${address}?subject=${subject}`;
  });
})();
