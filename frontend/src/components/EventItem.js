import { Link, useSubmit } from 'react-router-dom';
import styles from './EventItem.module.css';

function EventItem({ event }) {
    const submit = useSubmit();

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure to delete this event?');

        if (proceed) {
            // send a DELETE request to the server
            submit(null, { method: 'delete' });
        }
    }

    return (
        <article className={styles.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={styles.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default EventItem;
