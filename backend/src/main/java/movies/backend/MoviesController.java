package movies.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/movie")
class MoviesController {


    @GetMapping("/{requestId}")
    private ResponseEntity<Movie> findById(@PathVariable int requestId){
        Movie mov = new Movie(1,"s","s",9,"12");
        ResponseEntity<Movie> response = ResponseEntity.ok(mov);
        return response;
    }

    @GetMapping("/all")
    private ResponseEntity<List<Movie>> findAll() {
        Movie mov1 = new Movie(1,"s","s",9,"12");
        Movie mov2 = new Movie(2,"f","s",9,"12");
        Movie mov3 = new Movie(3,"k","s",9,"12");
        List<Movie> all_mov= new ArrayList<>();
        all_mov.add(mov1);
        all_mov.add(mov2);
        all_mov.add(mov3);
        return ResponseEntity.ok(all_mov);
    }

    @PutMapping("/create")
    private ResponseEntity<Movie> createMovie(@RequestBody Movie mov) {
        return ResponseEntity.ok(mov);
    }


}