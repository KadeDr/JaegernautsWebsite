const footer = document.createElement('template');

footer.innerHTML = `
<footer class="footer">
  <div>
    <div class="logo">Team 5103 - Jaegernauts</div>
    <p>Memorial Early College High School<br>New Braunfels, TX</p>
    <p class="motto">"Building the Future, One Robot at a Time."</p>
  </div>

  <div>
    <h3>Quick Links</h3>
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Sponsors</a>
    <a href="#">Media</a>
    <a href="#">Contact</a>
  </div>

  <div>
    <h3>Connect with Us</h3>
    <div class="social-icons">
      <a href="#">Instagram</a>
      <a>|</a>
      <a href="#">YouTube</a>
      <a>|</a>
      <a href="#">X</a>
    </div>
    <p>Email: <a href="mailto:mechs5103@gmail.com">mechs5103@gmail.com</a></p>
  </div>

  <div>
    <h3>Our Sponsors</h3>
    <div class="sponsors-list">
      <a href="#">CGT</a>
      <a href="#">JJJ Ranch</a>
      <a href="#">Le Petit Sweets</a>
      <a href="#">Union Station</a>
      <a href="#">Sweet Bites</a>
      <a href="#">Texas Workforce</a>
      <a href="#">Premier Cabinets</a>
      <a href="#">Oak Ridge Bellows</a>
      <a href="#">Detex</a>
      <a href="#">Tin Top</a>
      <a href="#">Rush Enterprises</a>
      <a href="#">Ventana</a>
    </div>
  </div>
</footer>

<div class="footer-bottom">
  BEST Robotics Competition | © 2025 Team 5103 Jaegernauts. All rights reserved. | FIRST Robotics Competition
</div>
`;

document.body.appendChild(footer.content);