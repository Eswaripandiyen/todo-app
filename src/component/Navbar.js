import React from "react";
// import '../component/App.css'



function Navbar(props) {
  return (
    <div style={{ backgroundColor:'lightgreen', padding: '10px', color: 'white' }}>
      {/* <h1>{props.title}</h1> */}
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        {props.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} style={{ color: 'white', textDecoration: 'none', }} id="texthover">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
