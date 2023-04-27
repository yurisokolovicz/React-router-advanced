import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    const navigation = useNavigation(); // Loading indicator

    return (
        <>
            <MainNavigation />
            <main>
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </>
    );
};

// Outlet defines where the child components of the parent component will be rendered

export default RootLayout;
