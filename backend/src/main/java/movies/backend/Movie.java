package movies.backend;

record Movie(int id, String name, String director, int year, String rating ) {
        }

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