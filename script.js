const contactInfo = document.getElementById('contactInfoIcon');
const footer = document.getElementById("footer");
contactInfo.addEventListener("click", () => {
    // Calculate the footer's position
    const footerPosition = footer.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the footer
    window.scrollTo(0, footerPosition);
  });