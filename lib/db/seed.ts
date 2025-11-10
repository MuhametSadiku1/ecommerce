import { db } from "./index";
import { products } from "./schema";

const nikeProducts = [
  {
    id: "nike-1",
    name: "Nike Air Max 90",
    description: "Classic running shoes with visible Air cushioning",
    price: "120.00",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    brand: "Nike",
    category: "Shoes",
    stock: 50,
  },
  {
    id: "nike-2",
    name: "Nike Dri-FIT T-Shirt",
    description: "Moisture-wicking performance t-shirt",
    price: "35.00",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    brand: "Nike",
    category: "Apparel",
    stock: 100,
  },
  {
    id: "nike-3",
    name: "Nike Air Force 1",
    description: "Iconic basketball-inspired lifestyle shoe",
    price: "90.00",
    imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    brand: "Nike",
    category: "Shoes",
    stock: 75,
  },
  {
    id: "nike-4",
    name: "Nike Sportswear Tech Fleece",
    description: "Premium fleece hoodie with modern fit",
    price: "100.00",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    brand: "Nike",
    category: "Apparel",
    stock: 40,
  },
  {
    id: "nike-5",
    name: "Nike React Infinity Run",
    description: "Long-distance running shoe with React foam",
    price: "160.00",
    imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    brand: "Nike",
    category: "Shoes",
    stock: 30,
  },
  {
    id: "nike-6",
    name: "Nike Pro Shorts",
    description: "Compression shorts for training and competition",
    price: "25.00",
    imageUrl: "https://images.unsplash.com/photo-1594938291221-94f18b6d6b1a?w=500",
    brand: "Nike",
    category: "Apparel",
    stock: 80,
  },
];

async function seed() {
  console.log("Seeding database with Nike products...");
  
  try {
    await db.insert(products).values(nikeProducts);
    console.log("✅ Successfully seeded database!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

seed()
  .then(() => {
    console.log("Seed completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  });

