import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";

const fetchUsers = async () => {
    const {data} = await axiosInstance.get("/api/?results=20");
    // console.log(res.data.results)
    return data.results;
};

export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 5
    });
};
