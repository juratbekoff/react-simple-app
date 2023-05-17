import { Link } from "react-router-dom";

const Products = ({ ...item }) => {
    return (
        <div
            className="col-lg-2 col-md-4 col-sm-4 px-2 py-3"
            style={{ cursor: "pointer" }}
        >
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img
                        className="img-fluid"
                        style={{ height: "35vh", backgroundSize: "cover", width: "90%" }}
                        src={item.image}
                    />
                </div>
                <div className="text-center py-4">
                    <Link
                        to={`/product/${item.id}`}
                        className="h6 text-decoration-none text-break"
                    >
                        {`${item.title.slice(0, 20)}`}
                    </Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$ {item.price}</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
