/* ================= GALLERY ================= */

const images = [
  "assets/product-1.png",
  "assets/product-2.png",
  "assets/product-3.png"
];

let currentIndex = 0;
const img = document.getElementById("currentImage");
const dots = document.querySelectorAll(".dot");

function updateGallery(index) {
  currentIndex = index;
  img.src = images[index];
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

document.getElementById("prevBtn").onclick = () => {
  updateGallery((currentIndex - 1 + images.length) % images.length);
};

document.getElementById("nextBtn").onclick = () => {
  updateGallery((currentIndex + 1) % images.length);
};

dots.forEach(dot => {
  dot.onclick = () => updateGallery(Number(dot.dataset.index));
});

document.querySelectorAll(".thumbnails img").forEach(t => {
  t.onclick = () => updateGallery(Number(t.dataset.index));
});

/* ================= SUBSCRIPTION ================= */

const purchaseRadios = document.querySelectorAll("input[name='purchase']");
const singleBox = document.getElementById("singleBox");
const doubleBox = document.getElementById("doubleBox");
const addToCart = document.getElementById("addToCart");

function updateSubscription() {
  const purchase = document.querySelector("input[name='purchase']:checked").value;
  singleBox.classList.toggle("active", purchase === "single");
  doubleBox.classList.toggle("active", purchase === "double");
  updateCartLink();
}

function updateCartLink() {
  const purchase = document.querySelector("input[name='purchase']:checked").value;

  let fragrance = "";
  if (purchase === "single") {
    fragrance = document.querySelector("input[name='fragrance']:checked").value;
    addToCart.href = `#cart-${purchase}-${fragrance}`;
  } else {
    const f1 = document.querySelector("input[name='fragrance1']:checked").value;
    const f2 = document.querySelector("input[name='fragrance2']:checked").value;
    addToCart.href = `#cart-${purchase}-${f1}-${f2}`;
  }
}

purchaseRadios.forEach(r => r.onchange = updateSubscription);
document.querySelectorAll("input").forEach(r => r.onchange = updateCartLink);

updateSubscription();
