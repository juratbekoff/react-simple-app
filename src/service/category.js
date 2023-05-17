import api from "./api"

export default class Category {
    getCategories = async () => {
        return await api.get('/products/categories')
    }
    getPrByCategory = async (name) => {
        return await api.get(`/products/category/${name}`)
    }
}