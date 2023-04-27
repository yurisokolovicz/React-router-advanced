import { useParams } from 'react-router-dom';
// Use useParams hook to access the dynamic segments of the URL. It returns an object with the dynamic segments as properties.

const EventDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1> EventDetailPage</h1>
            <p>Event ID: {params.eventId}</p>
        </>
    );
};

export default EventDetailPage;
