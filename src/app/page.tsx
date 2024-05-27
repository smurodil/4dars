import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://dummyjson.com/products");
  const data = await res.json();
  return data;
};

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  thumbnail: string;
}

async function Home() {
  const data = await getData();

  return (
    <div className="max-container mt-9 grid grid-cols-3 gap-5">
      {data.products.map((product: Product) => (
        <div
          key={product.id}
          className="card card-compact w-96 bg-base-100 shadow-2xl"
        >
          <figure>
            <img
              src={product.thumbnail}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <Link href={`product/${product.id}`} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
