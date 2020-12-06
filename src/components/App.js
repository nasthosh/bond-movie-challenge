import React from 'react';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import MovPage from "./MovPage";


function App() {
    function getPage() {
        const route = window.location.pathname;
        if(route==="/about") return <AboutPage />;
        if(route==="/movies") return <MovPage />;
        return <HomePage />
    }
    return(
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    );
}

export default App;
