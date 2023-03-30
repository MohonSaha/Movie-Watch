import React from 'react';

const SingleCard = (props) => {

    const {movieName, watchTime, description, poster, category, imdbRating} = props.movie;
    const {handleWatchTime} = props;

    return (
        <div>
            <div className="movie-cart card p-4 text-center m-auto w-100 col-md-6 mb-5">
                    <div className="movie-poster w-75 m-auto">
                        <img className='w-25' src={poster} alt="" />
                    </div>
                    <h1>{movieName}</h1>
                    <p>{description}</p>
                    <div className="time-rating d-flex justify-content-around">
                        <p>WatchTime: {watchTime}</p>
                        <p>Rating: {imdbRating}</p>
                    </div>
                    <button onClick={() => handleWatchTime(watchTime)} className='btn btn-info w-75 m-auto'>Book Now</button>
                </div>
        </div>
    );
};

export default SingleCard;