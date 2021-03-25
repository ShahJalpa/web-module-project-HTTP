//necessary library imports
import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

//function component
const AddMovieForm = (props) => {

    //hooks, states and props
    const { push } = useHistory();
	const { id } = useParams();

    const {setMovies} = props;

    const initialMovieFormValues = {
        title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
    }

    const [addMovieFormValues, setAddMovieFormValues] = useState(initialMovieFormValues);

    const handleAddMovieSubmitButton = () => {

    }
    const handleChangeFormValue = (event) => {
        setAddMovieFormValues({
            ...addMovieFormValues,
            [event.target.name]: event.target.vlaue
        })
        console.log(event.target.value);
    }

    return(
        <div className="col">
		<div className="modal-content">
			<form onSubmit={handleAddMovieSubmitButton}>
				<div className="modal-header">						
					<h4 className="modal-title">Add a new movie </h4>
				</div>
                <div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input  value={addMovieFormValues.title} onChange={handleChangeFormValue} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input value={addMovieFormValues.director} onChange={handleChangeFormValue} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value={addMovieFormValues.genre} onChange={handleChangeFormValue} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value={addMovieFormValues.metascore} onChange={handleChangeFormValue} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value={addMovieFormValues.description} onChange={handleChangeFormValue} name="description" className="form-control"></textarea>
					</div>
									
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/movies/${id}`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
				
			</form>
        </div>
        </div>
    )
}

export default AddMovieForm;