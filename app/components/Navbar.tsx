"use client";

import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, loading, signOutUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSignOut() {
    try {
      await signOutUser();
      setDropdownOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  if (loading) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navContent}>Loading...</div>
      </nav>
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          Jeddit
        </Link>
        <div className={styles.authSection}>
          {user ? (
            <div className={styles.dropdown} ref={dropdownRef}>
              <div
                className={styles.avatarPlaceholder}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                title={user.username}
              ></div>
              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className={styles.button}>
                Log In
              </Link>
              <Link href="/signup" className={styles.button}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
