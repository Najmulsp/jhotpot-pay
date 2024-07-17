
// import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";



const useAdmin = () => {
    const {user} = useAuth();
    console.log(user.email)

    // if (!user || !user.email) {
    //     console.log("User is not logged in or user object is null");
    //     return [false, null];
    // }


    // const axiosSecure = useAxiosSecure()
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
            // console.log(res.data);
            return res.data?.admin;
        },
        enabled: !!user.email 
    })
    return [isAdmin, user?.email ];
};

export default useAdmin;