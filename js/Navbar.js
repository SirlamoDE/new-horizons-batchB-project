const Navbar = () => {
  return (
    <nav>
      {/* logo */}
      <img id="mainLogo" src="./images/rescylink-logo.png" alt="ResycLink logo" />

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about-us-section">About Us</a></li>
      </ul>
      <button className="resyc-button" onClick={() => location.href = '#hero2-cash-in'}>
        <div className="Rs-logo">
          <div className="Rs-logo-square"></div>
          <div className="Rs"></div>
          <div className="Rs-logo-square"></div>
          <div className="Rs-logo-square"></div>
        </div>
        <div className="button-text">
          <span>Earn With</span>
          <span id="Resyc">ResycLink</span>
        </div>
      </button>

      <div id="sign-in">
        <button className="sign-in-button" onClick={() => location.href = './log-in.html'}>Sign-In</button>
      </div>
    </nav>
  );
};
