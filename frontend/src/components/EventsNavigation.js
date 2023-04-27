import styles from './EventsNavigation.module.css';

function EventsNavigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <a href="/events">All Events</a>
                    </li>
                    <li>
                        <a href="/events/new">New Event</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default EventsNavigation;
