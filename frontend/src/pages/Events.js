import { useLoaderData } from 'react-router-dom';
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
        // return { isError: true, message: 'Failed to load events' };
        // throw new Error('Failed to load events');
        throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
    } else {
        return response;
    }
}

// we use throw new Response() to throw an error with a custom response body and status code. This is useful if you want to return a custom error message to the client.
