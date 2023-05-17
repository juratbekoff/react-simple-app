import { useParams } from "react-router-dom"
import { ProductCard } from "../../components"
import { useEffect, useState } from "react"
import { categoryService } from "../../service"

const ProductsByCategory = () => {

    const { category } = useParams()
    const [products, setProducts] = useState([])

    const getPrByCategory = () => {
        categoryService.getPrByCategory(category)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPrByCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, products)

    return (
        <div className="pt-3 ">
            <div
                className="mx-xl-5"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <h3 className="bg-secondary pr-3">Products in: <span className="text-danger">{category}</span></h3>
            </div>
            <div className="row px-xl-5">
                {
                    products.map(item => {
                        return <ProductCard key={item.id}  {...item} />
                    })
                }
            </div>

        </div>
    )
}

export default ProductsByCategory