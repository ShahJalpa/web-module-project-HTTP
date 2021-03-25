import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MovieHeader = ()=> {

    const { push } = useHistory();

    //Make that button works as expected
    const handleAddMovie = () => {
        //console.log("add movie");
        push('/movies/add');
    }
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>IMDB Movie Database</h2>
        </div>
        <div className="col-sm-6">
            <Link onClick={handleAddMovie} className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            {/* Locate the part of the ui that should redirect to your new AddMovieForm */}
            <Link to="/movies" className="btn btn-primary">View All Movies</Link>
        </div>
        </div>
    </div>);
}

export default MovieHeader;