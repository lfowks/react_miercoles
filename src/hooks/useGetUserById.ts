import { useEffect, useState } from "react"
import { getUserById } from "../services/Users/UserService"

const useGetUserById = (id: number) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        (
           async function() {
               const user = await getUserById(id);
               setUser(user);
           }
        )()
     },[])
  
    return { user };
}

export default useGetUserById