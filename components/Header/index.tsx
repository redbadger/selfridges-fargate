import HeaderStyles from "../../styles/Header.module.css";
import Link from "next/link";
import SocialLinks from "../../components/SocialLinks";
import { useRouter } from "next/router";
import Logo from "./svg/Logo";

export default function Header() {
  const router = useRouter();

  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header__logoContainer}>
        <Link href="/">
          <a
            className={HeaderStyles.header__logoContainerLink}
            aria-label="Navigate to home page"
          >
            <Logo />
          </a>
        </Link>
      </div>
      {/* <nav className={HeaderStyles.header__nav} role="navigation">
        <ul className={HeaderStyles.header__navList}>
          {Config.menuLinks.map((link) => {
            return (
              <li
                key={link.displayName}
                className={HeaderStyles.header__navListItem}
              >
                <Link href={link.path}>
                  <a className={HeaderStyles.header__navListItemLink}>
                    {link.displayName}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
      <SocialLinks />
    </header>
  );
}