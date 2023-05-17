import { ProductCard } from "../../components"

const TopSoldProducts = () => {
    return (
        <div className="pt-3 ">
            <div className="mx-xl-5" style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 className="bg-secondary pr-3">Most Sold Products</h3>
                <a style={{ cursor: "pointer" }}>
                    <h6>Show All</h6>
                </a>
            </div>
            <ProductCard />
        </div>
    )
}

export default TopSoldProducts