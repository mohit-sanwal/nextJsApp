
async function getUsers() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await users.json();
    console.log('usrers', users);
    return users;
}
export default async function Users() {
    const users = await getUsers();
  console.log('usrers-----> ', users);
  return (
    <div>
      {
        users.length && users.map((user) => {
            return (
                <h6 key={user.id}>{user.name}</h6>
            )
        })
      }
    </div>
  );
}