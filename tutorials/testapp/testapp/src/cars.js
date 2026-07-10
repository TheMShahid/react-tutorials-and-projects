// fashion-products.js
// 30 products across cosmetics, fragrances, and fashion brands
// Images are real, HD external URLs from a public product-image CDN

const cars = [
  // ---------- COSMETICS / BEAUTY ----------
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    price: 9.99,
    brand: "Essence",
    category: "Cosmetics",
    details:
      "A volumizing, lengthening mascara for dramatic lashes with a long-lasting, cruelty-free formula.",
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    price: 19.99,
    brand: "Glamour Beauty",
    category: "Cosmetics",
    details:
      "A versatile eyeshadow palette with a built-in mirror, perfect for on-the-go application.",
  },
  {
    id: 3,
    name: "Powder Canister",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    price: 14.99,
    brand: "Velvet Touch",
    category: "Cosmetics",
    details:
      "A finely milled, translucent setting powder for a smooth, shine-controlled matte finish.",
  },
  {
    id: 4,
    name: "Red Lipstick",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    price: 12.99,
    brand: "Chic Cosmetics",
    category: "Cosmetics",
    details:
      "A classic bold red with a creamy, pigmented formula for a vibrant, long-lasting finish.",
  },
  {
    id: 5,
    name: "Red Nail Polish",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    price: 8.99,
    brand: "Nail Couture",
    category: "Cosmetics",
    details:
      "A rich, glossy red polish with a quick-drying formula for a salon-quality finish at home.",
  },

  // ---------- FRAGRANCES ----------
  {
    id: 6,
    name: "Calvin Klein CK One",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    price: 49.99,
    brand: "Calvin Klein",
    category: "Fragrance",
    details:
      "A classic unisex fragrance with a fresh, clean scent, versatile for everyday wear.",
  },
  {
    id: 7,
    name: "Chanel Coco Noir Eau De",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    price: 129.99,
    brand: "Chanel",
    category: "Fragrance",
    details:
      "An elegant, mysterious fragrance with grapefruit, rose, and sandalwood — ideal for evenings.",
  },
  {
    id: 8,
    name: "Dior J'adore",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    price: 89.99,
    brand: "Dior",
    category: "Fragrance",
    details:
      "A luxurious floral fragrance blending ylang-ylang, rose, and jasmine for timeless femininity.",
  },
  {
    id: 9,
    name: "Dolce Shine Eau de",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
    price: 69.99,
    brand: "Dolce & Gabbana",
    category: "Fragrance",
    details:
      "A vibrant, fruity scent with mango, jasmine, and blonde woods for a joyful, youthful feel.",
  },
  {
    id: 10,
    name: "Gucci Bloom Eau de",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    price: 79.99,
    brand: "Gucci",
    category: "Fragrance",
    details:
      "A modern, romantic floral fragrance with tuberose, jasmine, and Rangoon creeper.",
  },

  // ---------- FASHION / CLOTHING ----------
  {
    id: 11,
    name: "Blue & Black Check Shirt",
    image:
      "https://cdn.dummyjson.com/product-images/tops/blue-&-black-check-shirt/1.webp",
    price: 29.99,
    brand: "Fashion Trends",
    category: "Clothing",
    details:
      "A classic checked shirt with a comfortable fit, versatile for casual or smart-casual wear.",
  },
  {
    id: 12,
    name: "Gigabyte Aorus Men Blue Hoodie",
    image:
      "https://cdn.dummyjson.com/product-images/tops/gigabyte-aorus-men-blue-hoodie/1.webp",
    price: 34.99,
    brand: "Gigabyte",
    category: "Clothing",
    details:
      "A cozy, casual hoodie in a bold blue tone, offering both comfort and street-style appeal.",
  },
  {
    id: 13,
    name: "Man Plaid Shirt",
    image:
      "https://cdn.dummyjson.com/product-images/tops/man-plaid-shirt/1.webp",
    price: 32.99,
    brand: "Urban Threads",
    category: "Clothing",
    details:
      "A timeless plaid shirt crafted from breathable fabric, perfect for everyday layering.",
  },
  {
    id: 14,
    name: "Man Short Sleeve Shirt",
    image:
      "https://cdn.dummyjson.com/product-images/tops/man-short-sleeve-shirt/1.webp",
    price: 24.99,
    brand: "Casual Comfort",
    category: "Clothing",
    details:
      "A lightweight short-sleeve shirt designed for warm-weather comfort and easy styling.",
  },
  {
    id: 15,
    name: "Nike Air Jordan 1 Red And Black",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
    price: 179.99,
    brand: "Nike",
    category: "Footwear",
    details:
      "An iconic sneaker silhouette in a bold red-and-black colorway, blending style and heritage.",
  },
  {
    id: 16,
    name: "Puma Future Rider Trainers",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
    price: 89.99,
    brand: "Puma",
    category: "Footwear",
    details:
      "Retro-inspired trainers with a chunky sole, combining comfort with a vintage sneaker look.",
  },

  // ---------- WOMEN'S FASHION ----------
  {
    id: 17,
    name: "Puma Sneaker White & Blue",
    image:
      "https://cdn.dummyjson.com/product-images/womens-shoes/puma-sneaker-white-&-blue/1.webp",
    price: 99.99,
    brand: "Puma",
    category: "Footwear",
    details:
      "A clean white-and-blue sneaker offering everyday comfort with a sporty, versatile look.",
  },
  {
    id: 18,
    name: "Sneakers White",
    image:
      "https://cdn.dummyjson.com/product-images/womens-shoes/sneakers-white/1.webp",
    price: 69.99,
    brand: "Classic Line",
    category: "Footwear",
    details:
      "Minimalist white sneakers designed to pair effortlessly with almost any outfit.",
  },
  {
    id: 19,
    name: "Black Handbag",
    image:
      "https://cdn.dummyjson.com/product-images/womens-bags/black-handbag/1.webp",
    price: 149.99,
    brand: "Luxe Carry",
    category: "Bags",
    details:
      "A sleek black handbag with structured lines, made for everyday elegance and durability.",
  },
  {
    id: 20,
    name: "Diamond Bag",
    image:
      "https://cdn.dummyjson.com/product-images/womens-bags/diamond-bag/1.webp",
    price: 199.99,
    brand: "Luxe Carry",
    category: "Bags",
    details:
      "A statement bag with a quilted diamond pattern, blending luxury detailing with practicality.",
  },
  {
    id: 21,
    name: "Gold Bracelet",
    image:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/gold-bracelet/1.webp",
    price: 249.99,
    brand: "Golden Aura",
    category: "Jewelry",
    details:
      "A delicate gold-tone bracelet designed to add a subtle shine to any outfit.",
  },
  {
    id: 22,
    name: "Gold Earrings",
    image:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/gold-earrings/1.webp",
    price: 189.99,
    brand: "Golden Aura",
    category: "Jewelry",
    details:
      "Elegant gold-tone earrings crafted for a refined, everyday luxury look.",
  },
  {
    id: 23,
    name: "Gold Necklace",
    image:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/gold-necklace/1.webp",
    price: 299.99,
    brand: "Golden Aura",
    category: "Jewelry",
    details:
      "A timeless gold-tone necklace, designed as a versatile statement piece for any occasion.",
  },
  {
    id: 24,
    name: "Gold Rings",
    image:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/gold-rings/1.webp",
    price: 129.99,
    brand: "Golden Aura",
    category: "Jewelry",
    details:
      "Stackable gold-tone rings offering a modern take on classic, minimalist jewelry.",
  },
  {
    id: 25,
    name: "Pearl Necklace",
    image:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/pearl-necklace/1.webp",
    price: 219.99,
    brand: "Timeless Pearls",
    category: "Jewelry",
    details:
      "A classic strand of pearls, offering understated elegance for formal or everyday wear.",
  },
  {
    id: 26,
    name: "Classic Gold Watch",
    image:
      "https://cdn.dummyjson.com/product-images/womens-watches/classic-gold-watch/1.webp",
    price: 349.99,
    brand: "Timepiece Co.",
    category: "Watches",
    details:
      "A refined gold-tone timepiece combining classic craftsmanship with everyday elegance.",
  },
  {
    id: 27,
    name: "Rose Gold Chronograph Watch",
    image:
      "https://cdn.dummyjson.com/product-images/womens-watches/rose-gold-chronograph-watch/1.webp",
    price: 289.99,
    brand: "Timepiece Co.",
    category: "Watches",
    details:
      "A rose gold chronograph watch pairing sporty functionality with a luxe finish.",
  },
  {
    id: 28,
    name: "Blue Frame Sunglasses",
    image:
      "https://cdn.dummyjson.com/product-images/sunglasses/blue-sunglasses/1.webp",
    price: 79.99,
    brand: "Solstice Eyewear",
    category: "Accessories",
    details:
      "Bold blue-framed sunglasses offering full UV protection with a modern statement look.",
  },
  {
    id: 29,
    name: "Classic Aviator Sunglasses",
    image:
      "https://cdn.dummyjson.com/product-images/sunglasses/gradient-sunglasses/1.webp",
    price: 99.99,
    brand: "Solstice Eyewear",
    category: "Accessories",
    details:
      "Timeless aviator-style sunglasses with gradient lenses for a versatile, iconic look.",
  },
  {
    id: 30,
    name: "White Frame Sunglasses",
    image:
      "https://cdn.dummyjson.com/product-images/sunglasses/white-sunglasses/1.webp",
    price: 74.99,
    brand: "Solstice Eyewear",
    category: "Accessories",
    details:
      "Clean white-framed sunglasses combining a fresh, minimal aesthetic with UV protection.",
  },
];

export default cars;
