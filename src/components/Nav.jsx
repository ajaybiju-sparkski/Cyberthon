function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <a className="link-styled">ABOUT</a>
          </li>
          <li>
            <a className="link-styled">TRACKS</a>
          </li>
          <li>
            <a className="link-styled">TIMELINE</a>
          </li>
          <li>
            <a className="link-styled">FAQ</a>
          </li>
          <li>
            <button className="button-contact">CONTACT</button>
          </li>
          <li>
            <button className="button-join">
              JOIN US &nbsp;&nbsp;&nbsp;&nbsp;&gt;
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
