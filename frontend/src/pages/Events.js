import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();

    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }

    const events = data.events;

    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
    // We can not use useSession() here, because this not a React component. (only limitation)
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({ message: 'Could not fetch events.' }, { status: 500 });
    } else {
        return response;
    }
}

// throw json is a helper function that allows us to throw a response object. The first argument is the data we want to send back to the client. The second argument is an object that allows us to set the status code of the response.
