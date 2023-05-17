import { ProductCard } from "../../components";
import { useState, useEffect } from "react";
import { productService } from "../../service";

const AllProductsView = () => {

    const [product, setProduct] = useState([])

    const getPoruducts = () => {
        productService.getAllProducts()
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
                <h3 className="bg-secondary pr-3">Here is all products</h3>
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

export default AllProductsView;