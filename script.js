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

    const CUCapstone = document.getElementById('CUCapstone');

    const html = `
    <div id="CUCapstoneExtraContent">

      <div class="title2">
        <h1 style="margin-left: auto; margin-right: auto">Progress</h1>
      </div>
      <div id="lineBreaker"></div>

      <div class='progress'>
      <img src="./assets/oldLogin.png" alt="Old Login Image" width="500px">
      <img src="./assets/arrowIcon.png" alt="Arrow Image" width="80px" height="80px">
      <img src="./assets/newLogin.png" alt="New Login Image" width="500px">
      </div>

      <div class='progress'>
      <img src="./assets/capstoneProgOld.png" alt="Old Main Page" width="500px">
      <img src="./assets/arrowIcon.png" alt="Arrow Image" width="80px" height="80px">
      <img src="./assets/capstoneProgNew.png" alt="New Main Page" width="500px">
      </div>

      <ul style="margin-top: 80px;">
        <li>The project was developed using HTML, CSS, PHP, JavaScript, SQL, and run on XAMPP.</li>
        <li>Ensure that account passwords are securely hashed using the latest recommended PHP algorithms, such as password_hash() with PASSWORD_DEFAULT.</li>

      </ul>

      <div class="showMore" id="showLessCUCapstone">
        <label>Show Less</label>
        <img src="assets/showLessIcon.png" alt="Show More" width="50px" style="margin-bottom: 50px;">
      </div>
    </div>
    `;

    CUCapstone.insertAdjacentHTML('beforeend', html);

    const showLessCUCapstone = document.getElementById('showLessCUCapstone');
    showLessCUCapstone.addEventListener('click', () => {
      const extraContent = document.getElementById('CUCapstoneExtraContent');
      if (extraContent) {
        extraContent.remove();
        showMoreCUCapstone.style.visibility = "visible";

        // Scroll back
        const CUCapstonePosition = CUCapstone.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo(0, CUCapstonePosition);
      }
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