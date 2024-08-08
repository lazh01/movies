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
          const data = await response.json();
          return data
    }

  getMovies(): Movie[] {
    var m: Movie[] = [];
    this.getMovs().then( (result) =>
      {
        for (let i = 0; i < result.length; i++) {
        m.push(result[i])
        }
      }
      )
    return m;
  }

  async getMovieById(id: number): Promise<Movie> {
    const response = await fetch("/movie/" + id , {method: 'GET'});
    const data = await response.json();
    return data
  }

  async createMovie(movie: Movie): Promise<void> {
    movie.id = this.generateRandomId();
    this.movies.push(movie);
    const response = await fetch("/movie/create",
    {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
       body: JSON.stringify(movie)
      });
  }

  private generateRandomId(): number {
    // Generate a random number between 1 and 1000
    return Math.floor(Math.random() * 1000) + 1;
  }

}
