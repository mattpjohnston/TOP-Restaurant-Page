export default function renderMenu() {
  const section = document.createElement("section");
  section.id = "menu";

  section.innerHTML = `
    <div class="page-header">
      <h2>Menu</h2>
      <p class="muted">Bowls, sides, and drinks.</p>
    </div>

    <div class="card note-card">
      <p><strong>Spice:</strong> None / Mild / Medium / Hot / Too hot</p>
      <p><strong>Allergens:</strong> Ask in-store - Most bowls can be made gluten-free</p>
    </div>

    <div class="menu-section card">
      <h3>Bowls</h3>
      <div class="menu-items">
        <p><strong>Shoyu Chicken</strong> - £13.50<br><span class="muted">Clear soy broth, chicken, soft egg, spring onion, nori.</span></p>
        <p><strong>Pork Miso</strong> - £14.50<br><span class="muted">Rich pork broth, miso, pork belly, soft egg, garlic oil.</span></p>
        <p><strong>Chilli Beef</strong> - £14.25<br><span class="muted">Miso broth, minced beef, chilli crisp, pak choi.</span></p>
        <p><strong>Garlic Butter Prawn</strong> - £15.25<br><span class="muted">Light broth, prawns, garlic butter, lime.</span></p>
        <p><strong>Mushroom Sesame</strong> <span class="tag">V</span> - £13.75<br><span class="muted">Sesame broth, roasted mushrooms, crispy onions, greens.</span></p>
        <p><strong>Tofu + Greens</strong> <span class="tag">VG</span> - £13.50<br><span class="muted">Mushroom broth, tofu, corn, greens, chilli optional.</span></p>
      </div>
    </div>

    <div class="menu-section card">
      <h3>Sides</h3>
      <div class="grid-small">
        <p><strong>Gyoza (6)</strong> - £6.50</p>
        <p><strong>Karaage Chicken</strong> - £7.75</p>
        <p><strong>Sesame Cucumbers</strong> - £4.50</p>
        <p><strong>Miso Corn</strong> - £4.75</p>
        <p><strong>Edamame + Sea Salt</strong> - £4.25</p>
        <p><strong>Rice Bowl + Chilli Crisp</strong> - £3.75</p>
      </div>
    </div>

    <div class="menu-section card">
      <h3>Add-ons</h3>
      <p class="muted">Soft egg £1.50 - Extra noodles £2.00 - Chilli crisp £1.25 - Extra greens £1.50 - Crispy onions £1.00 - Garlic oil £0.75</p>
    </div>

    <div class="menu-section card">
      <h3>Drinks</h3>
      <div class="grid-small">
        <p><strong>Yuzu Soda</strong> - £3.80</p>
        <p><strong>Ginger Fizz</strong> - £3.80</p>
        <p><strong>Cold Brew</strong> - £4.50</p>
        <p><strong>Iced Matcha</strong> - £5.00</p>
        <p><strong>Sparkling Water</strong> - £2.50</p>
      </div>
    </div>
  `;

  return section;
}
