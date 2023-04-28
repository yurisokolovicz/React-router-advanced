// Challenge / Exercise

// 1. Create a pages folder in the src and add five new (dummy) page components (content can be simple <h1> elements)
//    - Home
//    - Events
//    - EventDetail
//    - NewEvent
//    - EditEvent
// DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// DONE
// 4. Add properly working links to the MainNavigation
// DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// DONE
// 6. Output a list of dummy events to the EventsPage
// DONE
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components.
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import NewEventPage, { action as newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            { index: true, element: <EventDetailPage />, action: deleteEventAction },
                            { path: 'edit', element: <EditEventPage /> }
                        ]
                    },
                    { path: 'new', element: <NewEventPage />, action: newEventAction }
                ]
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

// We can get access to a higher level loader from a route that does not have a loader. You use useRouteLoaderData instead of useLoaderData. But now we can reuse that loader across multiple routes which all needs the same data. And reusing code is of course always a good thing.
