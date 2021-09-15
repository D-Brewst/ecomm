import axios from "axios";

export default {
    getFeatured: async () => {
        try{
            const {data} = await axios.get("/getproducts");
            return data;
        }
        catch (error) {
            console.log(error.message);
        }
    },

    getCategories: async () => {
        try{
            const {data} = await axios.get("/categories");
            return data;
        }
        catch (error) {
            console.log(error.message);
        }
    }
}