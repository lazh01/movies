import { Movie } from './movie.model';

export class MovieService {

  private movies: Movie[] = [
    { id: 1, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, rating: '10/10' },
    { id: 2, title: 'Godzilla Vs. Kong', director: 'Adam Wingard', year: 2021, rating: '5/10'},
    { id: 3, title: 'Star Wars Episode IV: A new hope', director: 'George Lucas', year: 1977, rating: '8/10' }
  ];

  constructor() { }

  async getMovs(): Promise<Movie[]> {
          const response = await fetch("/movie/all", {method: 'GET'});
          console.log(response)
          const data = await response.json();
          console.log(data)
          /*const movies = JSON.parse(data);
          console.log(movies)*/
          return data
    }

  getMovies(): Movie[][] {
    var m: Movie[][] = [[this.movies[0]]];
    this.getMovs().then( (result) =>
      {
        m = [result]
        }
      )
    return m;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  createMovie(movie: Movie): void {
    movie.id = this.generateRandomId();
    this.movies.push(movie);
  }

  private generateRandomId(): number {
    // Generate a random number between 1 and 1000
    return Math.floor(Math.random() * 1000) + 1;
  }

}
