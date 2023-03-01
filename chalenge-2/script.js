const input = document.querySelector("input");
const searchIcon = document.querySelector("label");

input.addEventListener("input", function () {
  if (input.value) searchIcon.classList.add("hide");
  else searchIcon.classList.remove("hide");
});

const cardCount = [...Array(9).keys()];
const cardWrapper = document.querySelector("main");

cardCount.map(
  (_el) =>
    (cardWrapper.innerHTML += `
      <div class="product-card">
      <img src="/images/chalenge_2/Photo.png" alt="caprese" />
      <div class="content-box">
        <h3>Caprese</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros arcu
          elit nunc consectetur at.
        </p>
        <div class="badge">Main Course</div>
        <span>8 variants</span>
        <p class="price">
          <span>da 5,20 €</span><span>da 5,20 €</span><span>9</span>
        </p>
      </div>
    </div>
  `)
);
