import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function Avatar() {
  const { user } = useContext(UserContext);
  return (
    <div className="component">
      <img src={user.picture.thumbnail} />
    </div>
  );
}
function UserName() {
  const { user } = useContext(UserContext);
  return <div className="component">hello, {user.login.username}</div>;
}

export default function UserWidget() {
  const { user } = useContext(UserContext);
  return (
    <div className="component">
      <Avatar />
      <UserName />
    </div>
  );
}
