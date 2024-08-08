package movies.backend;
/*import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;*/

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Movie {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        private String title;
        private String director;
        private Long year;
        private String rating;


        public Movie(Long id, String title, String director, Long year, String rating) {
                this.id = id;
                this.director = director;
                this.title = title;
                this.year = year;
                this.rating = rating;
        }

        public Movie() {

        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public Long getYear() {
                return year;
        }

        public void setYear(Long year) {
                this.year = year;
        }

        public String getDirector() {
                return director;
        }

        public void setDirector(String director) {
                this.director = director;
        }

        public String getTitle() {
                return title;
        }

        public void setTitle(String title) {
                this.title = title;
        }

        public String getRating() {
                return rating;
        }

        public void setRating(String rating) {
                this.rating = rating;
        }

        @Override
        public String toString() {
                String json = "{\n";
                json = json + " id: " + id + ",\n";
                json = json + " name: " + title + ",\n";
                json = json + " director: " + director + ",\n";
                json = json + " year: " + year + ",\n";
                json = json + " rating: " + rating + "\n";
                json = json + "}";
                return json;
        }
}

/*@Entity
record Movie(@Id Long id, String name, String director, Long year, String rating ) {

        }*/

/*
class Movie{
    private int id;
    private String name;
    private String director;
    private int year;
    private String rating;

    public Movie( int id, String name, String director, int year, String rating){
        this.id = id;
        this.director = director;
        this.year = year;
        this.name=name;
        this.rating = rating;
    }

    public String ToJson() {
        String json = "{\n";
        json = json + " id: " + id + ",\n";
        json = json + " name: " + name + ",\n";
        json = json + " director: " + director + ",\n";
        json = json + " year: " + year + ",\n";
        json = json + " rating: " + rating + "\n";
        json = json + "}";
        return json;
    }
}
*/