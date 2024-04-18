import { useEffect, useState } from "react"
import { getAllUsers } from "../services/Users/UserService"
import User from "../fetching/User"

const useGetAllUsers = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(()=> {
        (
           async function() {
               const users = await getAllUsers();
               setUsers(users);
           }
        )()
     },[])
  
    return { users };
}

export default useGetAllUsers