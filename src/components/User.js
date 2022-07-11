
function User({user}) {
  return (
    <>
        <span className="name"> {user.name} </span>
        <span className="handle">@{user.handle   }</span>
    </>
    
  )
}

export default User