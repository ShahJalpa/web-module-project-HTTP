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

    const initialValues = {
        title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
    }

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
        //console.log(event.target.value);
    }

	const handleSaveButton = (event) => {
        event.preventDefault();
        console.log(formValues);

		const newMovie = {
			id: new Date(),
			title: formValues.title,
			director: formValues.director,
			genere: formValues.genre,
			metascore: formValues.metascore,
			description: formValues.description
		}

		console.log(newMovie)

        axios
          .post('http://localhost:5000/api/movies', newMovie)
          .then((response) => {
            setMovies(newMovie)
			console.log(response)
			push('/movies')
          })
          .catch((error) => {
              console.error("error: ", error);
          })
    }

    return(
        <div className="col">
		<div className="modal-content">
			<form onSubmit={handleSaveButton}>
				<div className="modal-header">						
					<h4 className="modal-title">Add a new movie </h4>
				</div>
                <div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input  value={formValues.title} onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input value={formValues.director} onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value={formValues.genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value={formValues.metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value={formValues.description} onChange={handleChange} name="description" className="form-control"></textarea>
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