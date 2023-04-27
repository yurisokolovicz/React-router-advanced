import { NavLink } from 'react-router-dom';
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
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
