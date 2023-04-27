import styles from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Events</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
