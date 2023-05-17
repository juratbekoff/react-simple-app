import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { productService } from "../../service"
import { Link } from "react-router-dom";

const NewProductsView = () => {

  const [product, setProduct] = useState([])

  const getPoruducts = () => {
    productService.getProductByLimit(6)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getPoruducts()
  }, [])

  return (
    <div className="pt-3 ">
      <div
        className="mx-xl-5"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3 className="bg-secondary pr-3">New Products</h3>
        <Link to={'/products'} style={{ cursor: "pointer" }} className="text-decoration-none">
          <h6>Show All</h6>
        </Link>

      </div>

      <div className="row px-xl-5">
        {
          product.map((item) => {
            return <ProductCard key={item.id}  {...item} />
          })
        }
      </div>
    </div>
  );
};

export default NewProductsView;
