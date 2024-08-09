import React, { useState } from "react"
import styles from "./Navbar.module.css"
import { CgMenuBoxed } from "react-icons/cg"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuBtnClick = (e) => {
    setMenuOpen(!menuOpen);
    e.stopPropagation()
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        
      </a> 
      <div className={styles.menu}>
        {menuOpen ? (
          <IoMdClose
            className={styles.menuBtn}
            onClick={handleMenuBtnClick}
          />
        ) : (
          <CgMenuBoxed
            className={styles.menuBtn}
            onClick={handleMenuBtnClick}
          />
        )}
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          {/* <li>
            <a href="#about" onClick={handleMenuItemClick}>
              About
            </a>
          </li> */}
          <li>
            <a href="#experience" onClick={handleMenuItemClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenuItemClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleMenuItemClick}>
              My Toolkit
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuItemClick}>
              Contact 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar