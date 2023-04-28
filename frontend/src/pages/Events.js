import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
    // We can not use useSession() here, because this not a React component. (only limitation)
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // ...
    } else {
        return response;
    }
}
