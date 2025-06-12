import ProfileButton from "./profileButton";

async function getUsers() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await users.json();
    return users;
}
export default async function Users() {
    const users = await getUsers();
  return (
    <div>
      {
        users.length && users.map((user) => {
            return (
              <div key={user.id}>
                <h6>{user.name}</h6>
                <ProfileButton user={user}/>
              </div>
            )
        })
      }
    </div>
  );
}