import './UserCard.css';

type User = {
    id: number,
    name: string,
    username: string,
    phone: string
};

const UserCard = ({user}:{user:User}) => {
  return (
    <div>
        <h4>{user.name}</h4>
        {user.id} - {user.username}
    </div>
  )
}

export default UserCard