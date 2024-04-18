import { useEffect, useState } from "react"
import { getUserById } from "../services/Users/UserService"
import User from "../fetching/User"

const useGetUserById = (id: number) => {

    const [user, setUser] = useState<User>({
        name: '',
        id: 0,
        phone :'',
        username: ''
    })

    useEffect(() => {
        (
           async function() {
               const user = await getUserById(id);
               setUser(user);
           }
        )()
     },[id])
  
    return { user };
}

export default useGetUserById