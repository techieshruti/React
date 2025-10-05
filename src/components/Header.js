//header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={new URL("/assets/logo1.png", import.meta.url).pathname}
          alt="Grabit Logo"
        ></img>
      </div>

      <div className="nav-container">
        <ul>
          <a href="#home.html">Home</a>
          <a href="#about.html">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </ul>
      </div>
    </div>
  );
};