import React from 'react';
import NotFoundPage from "./NotFoundPage";
import Header from "./common/Header";
import MoviesPage from "./MoviesPage";


function App() {
    function getPage() {
        const route = window.location.pathname;
        if(route==="/movies") return <MoviesPage />;
        return <NotFoundPage />
    }
    return(
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    );
}

export default App;
