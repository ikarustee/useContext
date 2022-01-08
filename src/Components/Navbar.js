import UserWidget from "./UserWidget";

export default function Navbar() {
  return (
    <div className="navbar component">
      <ul>
        <li>home</li>
        <li>about</li>
      </ul>
      <UserWidget />
    </div>
  );
}
