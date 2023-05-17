import { Link } from "react-router-dom"

const TopBar = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-between bg-light py-3">
                <Link to={'/'} className="text-decoration-none">
                    <span className="h2 text-uppercase text-primary bg-dark px-2">Multi</span>
                    <span className="h2 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                </Link>

                <ul className="px-4" style={{ display: "flex", listStyleType: "none", gap: '10px', marginBottom: "0px" }}>
                    <Link to={'/'} className="text-dark" style={{ alignSelf: "center", }}>Home</Link>
                    <Link to={'/products'} className="text-dark" style={{ alignSelf: "center" }}>Products</Link>
                    <Link to={'/contact'} className="text-dark" style={{ alignSelf: "center" }}>Contact</Link>
                </ul>

                {/* search form */}
                <form action="">
                    <div className="input-group px-1">
                        <input type="text" className="form-control" placeholder="Search for products" style={{ width: '250px' }} />
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary" style={{ cursor: "pointer" }}>
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default TopBar