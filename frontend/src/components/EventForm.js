import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom';
// Form is a component from react-router-dom that wraps a form and adds some useful functionality to it.
import styles from './EventForm.module.css';

function EventForm({ method, event }) {
    // useActionData give us access to the data that was passed to the action function.
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }
    // The Form method will not send the request to the server (backend). It will only handle the form submission (the action) and prevent the default behavior of the browser.
    return (
        // method={method} allow us to pass the method as a prop to the Form component. So we can use the same form with different methods.
        <Form method={method} className={styles.form}>
            {data && data.errors && (
                <ul>
                    {Object.values(data.erros).map(err => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
            </p>
            <div className={styles.actions}>
                <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
            </div>
        </Form>
    );
}

export default EventForm;

export async function action({ request, params }) {
    const method = request.method;
    console.log(request);
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    };

    let url = 'http://localhost:8080/events/';

    // if we are edditing method = patch
    if (method === 'PATCH') {
        const eventId = params.eventId;
        url = 'http://localhost:8080/events/' + eventId;
    }

    // It is how we can extract the data from the form submission with help of the FormData API.

    // This is the request to the server (backend).
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not save event.' }, { status: 500 });
    }
    return redirect('/events');
}
