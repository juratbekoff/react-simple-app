import { useEffect, useState } from "react"
import { Categories } from "../../components"
import { categoryService } from "../../service"

const CategoryView = () => {

    const [category, setCategory] = useState([])

    const getCategories = () => {
        categoryService.getCategories()
            .then((res) => {
                setCategory(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Categories</span>
            </h2>
            <div className="pt-5">
                <div className="row px-xl-5 pb-3">
                    {
                        category.map((val, index) => {
                            return <Categories key={index} item={val} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryView