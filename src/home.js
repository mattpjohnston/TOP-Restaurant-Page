export default function renderHome() {
  const section = document.createElement("section");
  section.id = "home";

  section.innerHTML = `
    <div class="grid">
      <div class="hero">
        <h2>Noodles & small plates. Open late.</h2>
        <p>Noodle bar in Belfast. Small menu, open late.</p>
        <button class="btn">View menu</button>
      </div>
      <div class="info-box">
        <p><strong>Hours</strong></p>
        <ul>
          <li>Tue-Thu 16:00-22:30</li>
          <li>Fri-Sat 16:00-00:30</li>
          <li>Sun 16:00-21:30</li>
          <li>Mon Closed</li>
        </ul>
        <p><strong>Find us</strong></p>
        <p>123 Example Street, Belfast BT1 1AA</p>
        <p>028 9000 0000</p>
        <div class="tags">
          <span class="tag">Walk-ins only</span>
          <span class="tag">Takeaway</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
