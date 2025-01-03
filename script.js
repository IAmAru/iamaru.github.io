// Create and insert the burger menu and sidebar HTML into the page dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Burger menu template
    const burgerMenuHTML = `
      <div id="burger-menu" class="burger-menu">
        <div class="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
  
    // Sidebar template
    const sidebarHTML = `
      <div id="sidebar" class="sidebar">
        <ul>
        <li></li>
        <img src="../../assets/ciel.PNG" width="160px" />
        <li class="no-hover"></li>
        <li class="hover"><a href="../../index.html">Home</a></li>
        <li><a href="https://backloggery.com/aru_star_">Backloggery</a></li>
        <li><a href="mailto:aru@hoshikawa-aru.com">Contact</a></li>
        <li><a href="../../pages/blog_index.html">Blog</a></li>
        <li class="no-hover"></li>
        <li class="no-hover"><a>Hello, and welcome to my website! It is under construction. Please check back in sometime to see the things I've been up to!</a></li>
        </ul>

      </div>
    `;
  
    // Insert the burger menu and sidebar into the page body
    document.body.insertAdjacentHTML('afterbegin', burgerMenuHTML + sidebarHTML);
  
    // Select the burger menu and sidebar elements
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.getElementById('sidebar');
  
    // Toggle the sidebar and burger menu when the burger menu is clicked
    burgerMenu.addEventListener('click', function () {
      sidebar.classList.toggle('active'); // Slide the sidebar in/out
      burgerMenu.classList.toggle('active'); // Change burger icon to 'X'
    });
  });
  
