package movies.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;
import org.springframework.web.util.UriComponentsBuilder;

import java.lang.reflect.Array;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movie")
class MoviesController {

    private final MovieRepository movieRepository;

    private MoviesController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    /*
    Returns an ok response containing the movie tied to given id,
    if movie with id doesn't exist returns a not found response.
     */
    @GetMapping("/{requestId}")
    private ResponseEntity<Movie> findById(@PathVariable Long requestId){
        Movie movie = findMovie(requestId);
        ResponseEntity<Movie> response;
        if (movie != null) {
            response = ResponseEntity.ok(movie);
        } else {
            response = ResponseEntity.notFound().build();
        }
        return response;
    }

    /*
    Returns a response containing all movies in the repository.
     */
    @GetMapping("/all")
    private ResponseEntity<List<Movie>> findAll() {
        List<Movie> all_mov = (List<Movie>) movieRepository.findAll();
        return ResponseEntity.ok(all_mov);
    }

    /*
    Save a new movie to the repository and returns a response containing its uri location.
     */
    @PostMapping("/create")
    private ResponseEntity<Void> createMovie(@RequestBody Movie mov, UriComponentsBuilder ucb) {
        Movie movie = movieRepository.save(mov);
        URI locationOfNewMovie= ucb
                .path("movie/{id}")
                .buildAndExpand(movie.getId())
                .toUri();
        return ResponseEntity.created(locationOfNewMovie).build();
    }

    /*
    Finds the movie for a given id in the repository, and returns it.
     */
    private Movie findMovie(Long id) {
        Movie movie;
        Optional<Movie> request = movieRepository.findById(id);
        movie = request.orElse(null);
        return movie;
    }

}