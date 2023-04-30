import { useFetcher } from 'react-router-dom';
// useFetcher is a custom hook that sends a POST request to the server.

import styles from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state]);

    return (
        <fetcher.Form method="post" action="/newsletter" className={styles.newsletter}>
            <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;

// Fetcher should be used when we wanna trigger an action or also a loader (with the help of a load function) without navigate to the page to shich the action or loader belongs.
