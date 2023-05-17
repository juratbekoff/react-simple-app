import { useParams } from "react-router-dom"
import { ProductDetails } from "../../components"
import { productService } from "../../service"
import { useEffect, useState } from "react"

const ProductDetailsView = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = () => {
        productService.getProductById(id)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getProduct()
    })

    return (
        <ProductDetails id={id} product={product} />
    )
}

export default ProductDetailsView