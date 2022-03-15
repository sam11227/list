import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID _GknOMdRDrlU81w--I5wymp6Af-hlUuK65l2Alhb8pc'
    }
})