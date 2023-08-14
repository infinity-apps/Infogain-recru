import Routes from 'routes';
import Header from "components/Header";

import './App.scss';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Routes />
            </main>
        </>
    );
};

export default App;