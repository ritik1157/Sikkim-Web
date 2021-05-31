import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Gallery from "./pages/gallery/gallery";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/explore" exact={true}>
                        <Explore />
                    </Route>
                    <Route path="/gallery" exact={true}>
                        <Gallery />
                    </Route>
                </Switch>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
