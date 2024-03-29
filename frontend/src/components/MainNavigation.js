import { NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';
import styles from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newsletter" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                            Newsletter
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <NewsletterSignup />
        </header>
    );
}

export default MainNavigation;
