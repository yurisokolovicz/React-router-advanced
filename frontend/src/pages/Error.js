import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
        // error.data.message is the message we set in the loader function in Events.js.
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page';
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
};
export default ErrorPage;

// That is why we want to throw responses in the places where things go wrong and add a error handling page which is rendered with help of an errorElement added to the root route.
