import { useEffect, useState } from "react"
import UserCard from "./UserCard";

type User = {
    id: number,
    name: string,
    username: string,
    phone: string
};

const User = () => {

  const [myUser, setMyUser] = useState<User>();
  const [id, setId] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    //FETCH
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Request
      .then(response => {
        if(response.ok){
          return response.json();// Extracción del body a JSON
        }
        else{ //ERROR cuando OK es false
          setError(true);
        }       
      })
      .then(user => { //Objeto legible
        setMyUser(user);
      })
      .catch(()=> setError(true))
      .finally(()=> setLoading(false))
  }, [id])

  const handleClick = () =>{
    setId(id+1);
  }

  if(loading) return (
    <div>Loading ...</div>
  )

  if(error) return (
    <div>Error</div>
  )

  if(myUser)
    return (
      <div>
          <button onClick={handleClick}>Siguiente</button>
          <hr />
          <UserCard user={myUser}/>
      </div>
    )
}

export default User