import { useParams } from "react-router";
import { useNavigate } from "react-router";
import MovieTheatre from "../../assets/movie-theatre.png";
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "../../components/Loading"
import List from "./components/List";

const Results = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title);

const handlerListItemClick = (movieId) => {

    navigate(`/detail/${movieId}`);

};

const RenderConten = () => {
    if (error) {
        return <p>{error.error}</p>
    } else if (isLoading || isFetching) {
        return <Loading message={"Buscando peliculas..."}/> 
    }else if (isSuccess && movies?.results) {
        return <List data={movies?.results} onListItemClick={handlerListItemClick}/>
    }
};

    return(
        <div className="flex flex-row"> 
            <div className="w-3/5 h-screen overflow-y-auto px-10">
                {RenderConten()}
            </div>
            <div className="w-2/5">
               <img src={MovieTheatre} alt="Movie chairs" className="w-full h-screen object-cover"/>
            </div>
        </div>
    );
}

export default Results;