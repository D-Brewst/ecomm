import axios from "axios";

export default {
    getFeatured: async () => {
        try{
            const {data} = await axios.get("/products");
            return data;
        }
        catch (error) {
            console.log(error.message);
        }
    }
}