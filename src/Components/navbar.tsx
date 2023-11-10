export default function Navbar(props) {
  return (
    <header className="navbar">
      <div className="logo"></div>
      <nav>
        <ul>{props.children}</ul>
      </nav>
    </header>
  );
}
