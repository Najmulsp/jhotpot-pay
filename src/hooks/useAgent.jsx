
// import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";



const useAgent = () => {
    const {user} = useAuth();
    console.log(user.email)
    // const axiosSecure = useAxiosSecure()
    const {data: isAgent} = useQuery({
        queryKey: [user?.email, 'isAgent'],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/users/agent/${user?.email}`);
            // console.log(res.data);
            return res.data?.agent;
        },
        enabled: !!user.email 
    })
    return [isAgent, user?.email ];
};

export default useAgent;