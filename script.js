// Contact Info
const contactInfo = document.getElementById('contactInfoIcon');
const footer = document.getElementById("footer");
contactInfo.addEventListener("click", () => {
    // Calculate the footer's position
    const footerPosition = footer.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the footer
    window.scrollTo(0, footerPosition);
  });


// Show more for CU Capstone project
const showMoreCUCapstone = document.getElementById('showMoreCUCapstone');
showMoreCUCapstone.addEventListener("click", () => {
    showMoreCUCapstone.style.visibility = "hidden";

    const CUCapstoneExtraContent = document.getElementById('CUCapstoneExtraContent');
    CUCapstoneExtraContent.style.display = "block";

    const showLessCUCapstone = document.getElementById('showLessCUCapstone');
    showLessCUCapstone.addEventListener('click', () => {
        CUCapstoneExtraContent.style.display = "none";
        showMoreCUCapstone.style.visibility = "visible";

        // Scroll back
        const CUCapstone = document.getElementById('CUCapstone');
        const CUCapstonePosition = CUCapstone.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo(0, CUCapstonePosition);
      });
});

//
const showMore3DConnectFourGame = document.getElementById('showMore3DConnectFourGame');
showMore3DConnectFourGame.addEventListener('click', () => {
    showMore3DConnectFourGame.style.visibility = "hidden";

    const connectFourGameExtraContent = document.getElementById('3DConnectFourGameExtraContent');
    connectFourGameExtraContent.style.display = "block";

    const showLess3DConnectFourGame = document.getElementById('showLess3DConnectFourGame');
    showLess3DConnectFourGame.addEventListener('click', () => {
        connectFourGameExtraContent.style.display = "none";
        showMore3DConnectFourGame.style.visibility = "visible";

    });
    
});