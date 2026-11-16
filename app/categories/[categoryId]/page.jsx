
import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { categoryId } = await params;

  const category = categories.find(
    (c) => c.id === categoryId
  );

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category does not exist.",
    };
  }

  return {
    title: category.metaTitle || category.name,
    description:
      category.metaDescription ||
      `Explore our ${category.name} products.`,
  };
}

export default async function CategoryPage({ params }) {
  const { categoryId } = await params;

  const category = categories.find(
    (c) => c.id === categoryId
  );

  if (!category) {
    notFound();
  }

  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/bag/bg-other.webp')",
        }}
        className="relative w-full h-[50vh] md:h-[45vh] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <h1 className="bg-white/95 px-6 py-4 md:px-12 md:py-6 text-3xl md:text-6xl font-bold text-[#f58220] text-center shadow-xl rounded-xl">
            {category.name}
          </h1>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">

        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[3px] font-semibold text-[#f58220] mb-3">
            Our Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {category.name}
          </h2>

          <p className="text-slate-500 mt-3">
            Explore our range of {category.name} products.
          </p>
        </div>

        {category.products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {category.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative w-full h-[280px] bg-slate-50 overflow-hidden">

                  <Image
                    src={product.image?.[0]?.src || "/placeholder.png"}
                    alt={product.image?.[0]?.alt || product.name}
                    title={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                {/* PRODUCT NAME */}
                <div className="p-5 flex items-center justify-between gap-3">

                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#f58220] transition">
                    {product.name}
                  </h3>

                  <span className="w-9 h-9 flex-shrink-0 rounded-full bg-blue-50 text-[#f58220] flex items-center justify-center group-hover:bg-[#00c3fd] group-hover:text-white transition">
                    →
                  </span>

                </div>

              </Link>
            ))}

          </div>
        ) : (
          <div className="text-center py-16 text-slate-500">
            No products available in this category.
          </div>
        )}

      </section>
    </main>
  );
}
