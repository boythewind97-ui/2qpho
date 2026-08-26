const menuData = {
  food: [
    { name:"Phở bò tái (Tô)", jp:"フォー・ボー・タイ", price:980, image:"pho-bo-tai.jpg" },
    { name:"Phở bò chín", jp:"フォー・ボー・チン", price:980, image:"pho-bo-chin.jpg" },
    { name:"Phở bò tái bắp", jp:"フォー・ボー・タイ・バップ", price:980, image:"pho-bo-tai-bap.jpg" },
    { name:"Bún bò Huế", jp:"ブン・ボー・フエ", price:1080, image:"bun-bo-hue.jpg" },
    { name:"Bánh mì xá xíu", jp:"バインミー・チャーシュー", price:750, image:"banh-mi-xa-xiu.jpg" },
    { name:"Bánh mì thịt nướng", jp:"バインミー・焼肉", price:750, image:"banh-mi-thit-nuong.jpg" },
    { name:"Bánh mì giò chả", jp:"バインミー・チャーシュー＆ハム", price:700, image:"banh-mi-gio-cha.jpg" },
    { name:"Bánh mì thập cẩm", jp:"バインミー・スペシャル", price:800, image:"banh-mi-thap-cam.jpg" },
    { name:"Gà chiên Karage", jp:"ベトナム風唐揚げ", price:580, image:"ga-chien-karage.jpg" },
    { name:"Lạc rang", jp:"ピーナッツ", price:380, image:"lac-rang.jpg" },
    { name:"Bánh đa nướng", jp:"焼きライスペーパー", price:380, image:"banh-da-nuong.jpg" },
    { name:"Giò lụa", jp:"ベトナムハム", price:550, image:"gio-lua.jpg" },
    { name:"Nem chua rán", jp:"揚げネムチュア", price:650, image:"nem-chua-ran.jpg" },
    { name:"Dưa chuột chẻ", jp:"きゅうりのベトナム風", price:500, image:"dua-chuot-che.jpg" },
    { name:"Đậu luộc", jp:"茹で枝豆", price:500, image:"dau-luoc.jpg" },
    { name:"Gỏi cuốn tôm thịt 3 cái", jp:"生春巻き 3本", price:750, image:"goi-cuon-tom-thit-3-cai.jpg" },
    { name:"Thêm trứng chần", jp:"温泉卵", price:110, image:"them-trung-chan.jpg" },
    { name:"Thêm bún / phở", jp:"麺追加", price:110, image:"them-bun-pho.jpg" },
    { name:"Phở cho bé", jp:"お子様フォー", price:650, image:"pho-cho-be.jpg" },
    { name:"Phở thập cẩm", jp:"フォー・スペシャル", price:980, image:"pho-thap-cam.jpg" },
    { name:"Chả giò (Nem rán) 3 cái", jp:"揚げ春巻き 3本", price:540, image:"cha-gio-3-cai.jpg" }
  ],
  set: [
    { name:"SET 1: Phở bò + 2 gỏi cuốn tôm thịt", jp:"フォー + 生春巻き 2本", price:1400, image:"set-1-pho-bo-goi-cuon.jpg" },
    { name:"SET 2: Bún bò Huế + 1/2 bánh mì + 2 nem chua rán", jp:"ブン・ボー・フエ + バインミー + 揚げネムチュア", price:1500, image:"set-2-bun-bo-hue-banh-mi-nem-chua-ran.jpg" },
    { name:"SET 3: Phở bò + 1/2 bánh mì", jp:"フォー + ハーフバインミー", price:1300, image:"set-3-pho-bo-banh-mi.jpg" },
    { name:"SET 4: Bún bò Huế + 2 chả giò", jp:"ブン・ボー・フエ + 揚げ春巻き 2本", price:1400, image:"set-4-bun-bo-hue-cha-gio.jpg" }
  ],
  drink: [
    { name:"Bia Asahi 633ml", jp:"アサヒビール 633ml", price:650, image:"bia-asahi-633ml.jpg" },
    { name:"Nước dừa", jp:"ココナッツジュース", price:350, image:"nuoc-dua.jpg" },
    { name:"Nước mía", jp:"サトウキビジュース", price:350, image:"nuoc-mia.jpg" },
    { name:"Nước Sting đỏ", jp:"スティング", price:380, image:"sting-do.jpg" },
    { name:"Bia Heineken", jp:"ハイネケン", price:600, image:"bia-heineken.jpg" },
    { name:"Bia Asahi 0 độ", jp:"アサヒ 0.00%", price:550, image:"bia-asahi-0do.jpg" },
    { name:"Coca-Cola", jp:"コカ・コーラ", price:350, image:"coca-cola.jpg" },
    { name:"Bò Húc", jp:"レッドブル", price:480, image:"bo-huc.jpg" },
    { name:"Trà xanh 0 độ", jp:"グリーンティー", price:350, image:"tra-xanh-0do.jpg" },
    { name:"Nước Nuber One", jp:"ヌーバーワン", price:460, image:"nuber-one.jpg" },
    { name:"Trà bí đao", jp:"冬瓜茶", price:350, image:"tra-bi-dao.jpg" },
    { name:"Trà chanh C2", jp:"レモンティー C2", price:380, image:"tra-chanh-c2.jpg" },
    { name:"Trà đào C2", jp:"ピーチティー C2", price:380, image:"tra-dao-c2.jpg" },
    { name:"Nước me", jp:"タマリンドジュース", price:350, image:"nuoc-me.jpg" },
    { name:"Nước chanh dây", jp:"パッションフルーツジュース", price:350, image:"nuoc-chanh-day.jpg" },
    { name:"Trà Dr Thanh", jp:"ドクタータイン", price:380, image:"tra-dr-thanh.jpg" }
  ]
};

const featured = [
  { ...menuData.food[0], badge:"人気" },
  { ...menuData.food[3] },
  { ...menuData.food[7], badge:"おすすめ" },
  { ...menuData.food[15] }
];

const imagePath = file => `images/${file}`;

function applyImage(el, file) {
  const url = imagePath(file);
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${url}")`;
    el.classList.add("has-image");
    const placeholder = el.querySelector("span");
    if (placeholder) placeholder.style.display = "none";
  };
  img.onerror = () => {
    el.style.backgroundImage = "";
    el.classList.remove("has-image");
  };
  img.src = url;
}

function dishCard(item, featuredCard = false) {
  return `
    <article class="${featuredCard ? "dish-card" : "menu-card"}">
      <div class="dish-image image-placeholder" data-image="${item.image}">
        <span>ẢNH MÓN ĂN</span>
        ${item.badge ? `<b class="badge">${item.badge}</b>` : ""}
      </div>
      <div class="dish-body">
        <h3>${item.name}</h3>
        <div class="dish-jp">${item.jp}</div>
        ${!featuredCard ? `<div class="description">Hương vị Việt Nam truyền thống</div>` : ""}
        <div class="dish-price">¥${item.price.toLocaleString("ja-JP")}</div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  grid.innerHTML = featured.map(item => dishCard(item, true)).join("");
  grid.querySelectorAll("[data-image]").forEach(el => applyImage(el, el.dataset.image));
}

function renderMenu(category = "food") {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = menuData[category].map(item => dishCard(item)).join("");
  grid.querySelectorAll("[data-image]").forEach(el => applyImage(el, el.dataset.image));
}

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

document.querySelectorAll("[data-footer-category]").forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.footerCategory;
    const tab = document.querySelector(`.menu-tab[data-category="${category}"]`);
    if (tab) {
      document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderMenu(category);
    }
  });
});

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const file = item.dataset.image;
    const test = new Image();
    test.onload = () => {
      lightboxImage.src = imagePath(file);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    };
    test.src = imagePath(file);
  });
});
document.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
});
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) document.querySelector(".lightbox-close").click();
});

document.querySelectorAll(".image-placeholder").forEach(el => {
  if (el.dataset.image) applyImage(el, el.dataset.image);
});

renderFeatured();
renderMenu("food");
