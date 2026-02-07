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
        <img src="/assets/ciel.PNG" width="160px" />
        <li class="no-hover"></li>
        <li class="hover"><a href="/index.html">Home</a></li>
        <li><a href="https://backloggery.com/aru_star_">Backloggery</a></li>
        <li><a href="mailto:aru@hoshikawa-aru.com">Contact</a></li>
        <li><a href="/pages/blog_index.html">Blog</a></li>
        <li><a href="/pages/ciel_index.html">Ciel Fumo Pics</a></li>
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
  
document.addEventListener('click', e => {
  if (e.target.classList.contains('clickable-img')) {
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    overlay.innerHTML = `<img src="${e.target.src}" alt="">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  }
});

document.addEventListener('click', (e) => {
  // only images inside .content (change selector if needed)
  const clickedImg = e.target.closest('.content img');
  if (!clickedImg) return;

  // optional: ignore certain images, e.g., burger icon inside .menu
  if (clickedImg.closest('.no-lightbox')) return;

  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';

  const overlayImg = document.createElement('img');
  overlayImg.src = clickedImg.dataset.fullsize || clickedImg.src;
  overlayImg.alt = clickedImg.alt || '';

  const caption = document.createElement('div');
  caption.className = 'image-caption'
  caption.textContent = clickedImg.alt || '';

  overlay.appendChild(overlayImg);
  overlay.appendChild(caption);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => overlay.remove());

  // optional: close on Esc
  const onKey = (ke) => {
    if (ke.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', onKey);
    }
  };
  document.addEventListener('keydown', onKey);
});

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.createElement('a');
  logo.href = '/index.html'; // or another page if you prefer
  logo.className = 'site-logo';
  logo.innerHTML = `<img src="/assets/signboard.png" alt="Site Logo">`;
  document.body.appendChild(logo);

});
