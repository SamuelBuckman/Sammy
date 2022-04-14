
function MovieList({movies,onClick}) {
   

    const moviesList= movies.map((movie,index)=> {
             return(
                <li key={index} onClick={onClick}>{movie}</li>
             )
            });
   return (
     <div>
       <h1>Movie List</h1>``
       <ul>{moviesList}</ul>
      
     </div>
   );
}
export default MovieList;
