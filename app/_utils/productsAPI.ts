import axiosInstance from "./axiosInstance";

const getAllProducts = async () => axiosInstance.get("/products?populate=*");
const getProductById = async (id: string[] | string) =>
  axiosInstance.get(`/products/${id}?populate=*`);

const getProductsByCategory = async (category: string | undefined) =>
  axiosInstance.get(`/products?filters[category][$eq]=${category}&populate=*`);

const productModules = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
};

export default productModules;
