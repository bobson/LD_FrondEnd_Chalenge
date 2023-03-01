const block1Arr = [
  { text: "Add Logo and Cover image", image: "coverLogo" },
  { text: "Add social links", image: "socialLinks" },
  { text: "Add at least 3 products", image: "products" },
  { text: "Share your shop!", image: "shop" },
  { text: "Set up delivery options", image: "delivery" },
  { text: "Set up checkout payments", image: "checkout" },
];

const block2Arr = [
  { text: "Discount products", image: "discount" },
  { text: "Featured products", image: "featured" },
  { text: "Product Gallery", image: "gallery" },
];

const block1 = document.getElementById("block-1");

const block2 = document.getElementById("block-2");

block1Arr.map(
  ({ text, image }) =>
    (block1.innerHTML += `
        <div class="square">
            <p>${text}</p>
            <img src="/images/chalenge_1/${image}.svg" alt=${image}>
        </div>`)
);

block2Arr.map(
  ({ text, image }) =>
    (block2.innerHTML += `
          <div class="square">
              <img class="star" src="/images/chalenge_1/star.svg" alt="star"> 
              <p>${text}</p>
              <img src="/images/chalenge_1/${image}.svg" alt=${image}>
          </div>`)
);
