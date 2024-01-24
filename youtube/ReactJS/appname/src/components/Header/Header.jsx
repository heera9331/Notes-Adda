import "./Header.css";

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <nav>
        <ul>
          <li>Menu</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
