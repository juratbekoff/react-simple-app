import api from "./api"

export default class Products {
    getProductByLimit = async (limit) => {
        return await api.get(`/products?limit=${limit}`)
    }
    getProductById = async (id) => {
        return await api.get(`/products/${id}`)
    }
    getAllProducts = async () => {
        return await api.get('/products')
    }
}



