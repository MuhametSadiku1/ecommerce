import React from 'react'
import Card from "@/src/components/Card";

const placeholderProducts = [
  {
    id: 1,
    title: "Nike Air Force 1 Mid '07",
    subtitle: "Men's Shoes",
    price: 98.30,
    badgeLabel: "Best Seller",
    badgeTone: "danger" as const,
    imageSrc: "/public/shoes/shoe-1.jpg",
    meta: "6 Colour"
  },
  {
    id: 2,
    title: "Nike Court Vision Low Next Nature",
    subtitle: "Men's Shoes",
    price: 98.30,
    badgeLabel: "Extra 20% off",
    badgeTone: "success" as const,
    imageSrc: "/public/shoes/shoe-2.webp",
    meta: "4 Colour"
  },
  {
    id: 3,
    title: "Nike Dunk Low Retro",
    subtitle: "Men's Shoes",
    price: 98.30,
    badgeLabel: "Extra 10% off",
    badgeTone: "success" as const,
    imageSrc: "/public/shoes/shoe-3.webp",
    meta: "6 Colour"
  },
  {
    id: 4,
    title: "Nike Air Max 90",
    subtitle: "Men's Shoes",
    price: 120.00,
    badgeLabel: "New",
    badgeTone: "success" as const,
    imageSrc: "/public/shoes/shoe-4.webp",
    meta: "4 Colour"
  },
  {
    id: 5,
    title: "Nike React Infinity Run",
    subtitle: "Women's Shoes",
    price: 160.00,
    imageSrc: "/public/shoes/shoe-5.avif",
    meta: "3 Colour"
  },
  {
    id: 6,
    title: "Nike Blazer Mid '77",
    subtitle: "Men's Shoes",
    price: 100.00,
    imageSrc: "/public/shoes/shoe-6.avif",
    meta: "4 Colour"
  }
];

const Home = () => {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-[var(--text-heading-2)] font-[var(--text-heading-2--font-weight)] leading-[var(--text-heading-2--line-height)] text-[var(--color-dark-900)]">
          Latest Shoes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              badgeLabel={product.badgeLabel}
              badgeTone={product.badgeTone}
              imageSrc={product.imageSrc}
              imageAlt={product.title}
              meta={product.meta}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home