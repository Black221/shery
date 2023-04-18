import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import {Marketplace} from "./pages/marketplace";
import {Home} from "./pages/home";
import {Blog} from "./pages/blog";
import {Article} from "./pages/article";
import {Sponsorship} from "./pages/sponsorship";
import {Login} from "./pages/login";
import {SignIn} from "./pages/signIn";

function App() {


    return (<>
        <div className="">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path={``} exact element={ <Home /> } />
                        <Route path={`/boutique/*`} exact element={ <Marketplace /> } />
                        <Route path={`/parrainage`} exact element={ <Sponsorship /> } />
                        <Route path={`/blog`} exact element={ <Blog /> } />
                        <Route path={`/blog/*`} exact element={ <Article /> } />
                        <Route path={`/connexion`} exact element={ <Login /> } />
                        <Route path={`/inscription`} exact element={ <SignIn /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    </>);
}

export default App;
