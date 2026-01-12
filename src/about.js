export default function renderAbout() {
  const section = document.createElement("section");
  section.id = "about";

  section.innerHTML = `
    <div class="grid">
      <div class="card">
        <h2>About</h2>
        <p>Blue Lantern is a small noodle bar in Belfast. Short menu, open late.</p>
        <p>No bookings - just walk in.</p>
      </div>

      <div class="info-box">
        <p><strong>Address</strong><br>123 Example Street, Belfast BT1 1AA</p>
        <p><strong>Phone</strong><br>028 9000 0000</p>
        <p><strong>Email</strong><br>hello@example.com</p>
        <p><strong>Hours</strong></p>
        <ul>
          <li>Tue-Thu 16:00-22:30</li>
          <li>Fri-Sat 16:00-00:30</li>
          <li>Sun 16:00-21:30</li>
          <li>Closed Monday</li>
        </ul>
      </div>
    </div>

    <h3>FAQ</h3>
    <div class="faq">
      <p><strong>Do you take bookings?</strong><br><span class="muted">Walk-ins only.</span></p>
      <p><strong>Gluten-free options?</strong><br><span class="muted">Most bowls can be made gluten-free - ask when ordering.</span></p>
      <p><strong>Takeaway?</strong><br><span class="muted">Yes, always available.</span></p>
    </div>`;

  return section;
}
