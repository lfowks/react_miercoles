import { useEffect, useState } from "react"
import UserCard from "./UserCard";
import './ListUsers.css';

type User = {
    id: number,
    name: string,
    username: string,
    phone: string
};

const ListUsers = () => {

  const [myUsers, setMyUsers] = useState<User[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    //FETCH
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`) // Request
      .then(response => {
        if(response.ok){
          return response.json();// Extracción del body a JSON
        }
        else{ //ERROR cuando OK es false
          setError(true);
        }       
      })
      .then(users => { //Objeto legible
        setMyUsers(users);
      })
      .catch(()=> setError(true))
      .finally(()=> setLoading(false))
  }, [])


  if(loading) return (
    <div>Loading ...</div>
  )

  if(error) return (
    <div>Error</div>
  )

  if(myUsers)
    return (
      <div className="list-cards">
        {myUsers.map((user)=>(
            <div key={user.id} className="my-card">                
                <UserCard user={user}/>
            </div>
        ))}
      </div>
    )
}

export default ListUsers