import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Category = ({ item }) => {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link to={`/category/${item}`} className="text-decoration-none" >
        <div className="cat-item d-flex mb-4 p-4">
          <div className="flex-fill">
            <h5 className="p-2 m-0">{item}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
