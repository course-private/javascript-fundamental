const MovieCollection = {
  movies: [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.7,
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      rating: 9.0,
    },
  ],

  showMovies: function () {
    console.log("========== MOVIE COLLECTION ==========");

    // ES5
    for (let i = 0; i < this.movies.length; i++) {
      const { id, title, genre, year, rating } = this.movies[i];
      console.log(`${id}. ${title}`);
      console.log(`   Genre: ${genre}`);
      console.log(`   Year: ${year}`);
      console.log(`   Rating: ${rating}`);
    }

    // ES6
    // this.movies.forEach((movie) => {
    //   const { id, title, genre, year, rating } = movie;
    //   console.log(`${id}. ${title}`);
    //   console.log(`   Genre: ${genre}`);
    //   console.log(`   Year: ${year}`);
    //   console.log(`   Rating: ${rating}`);
    // });
  },

  addMovie: function (title, genre, year, rating) {
    const lastIndex = this.movies.length - 1;
    const id = this.movies[lastIndex].id + 1;
    const tempObj = {
      id,
      title,
      genre,
      year,
      rating,
    };
    this.movies.push(tempObj);

    console.log(`Movie "${title}" successfully added.`);
  },

  removeMovie: function (id) {
    const movie = this.movies.find((movie) => {
      return movie.id === id;
    });

    if (!movie) {
      // Cek apakah ada movie atau tidak
      console.log("Movie not found");
    }

    this.movies = this.movies.filter((movie) => movie.id !== id);
    console.log(`Movie "${movie.title}" successfully removed.`);
  },

  searchMovie: function (keyword) {
    const result = this.movies.filter(
      (movie) => movie.title.toLowerCase().includes(keyword.toLowerCase()),
      // chaining function
    );

    console.log("========== SEARCH RESULT ==========\n");

    if (result.length === 0) {
      console.log("Movie not found.");
      return;
    }

    result.forEach((movie) => {
      console.log(movie.title);
    });
  },

  filterByGenre: function (genre) {
    const result = this.movies.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase(),
    );

    if (result.length === 0) {
      console.log("No movies found.");
      return;
    }

    console.log(`========== ${genre.toUpperCase()} MOVIES ==========\n`);

    result.forEach((movie) => {
      console.log(movie.title);
    });
  },

  getMovieById: function (id) {
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) {
      console.log("Movie not found.");
      return;
    }

    console.log("========== MOVIE DETAIL ==========\n");
    console.log(`ID     : ${movie.id}`);
    console.log(`Title  : ${movie.title}`);
    console.log(`Genre  : ${movie.genre}`);
    console.log(`Year   : ${movie.year}`);
    console.log(`Rating : ${movie.rating}`);
  },

  getTopRated: function () {
    if (this.movies.length === 0) {
      console.log("No movies found.");
      return;
    }

    let topMovie = this.movies[0];

    this.movies.forEach((movie) => {
      if (movie.rating > topMovie.rating) {
        topMovie = movie;
      }
    });

    console.log("========== TOP RATED MOVIE ==========\n");
    console.log(`Title  : ${topMovie.title}`);
    console.log(`Genre  : ${topMovie.genre}`);
    console.log(`Year   : ${topMovie.year}`);
    console.log(`Rating : ${topMovie.rating}`);
  },
  getAverageRating: function () {
    if (this.movies.length === 0) {
      console.log("No movies found.");
      return;
    }

    let total = 0;

    this.movies.forEach((movie) => {
      total += movie.rating;
    });

    const average = total / this.movies.length;

    console.log("========== AVERAGE RATING ==========\n");
    console.log(`Average Rating : ${average.toFixed(2)}`);
  },
};

MovieCollection.addMovie("The Matrix", "Sci-Fi", 1999, 8.7);
MovieCollection.addMovie("Avenger: Endgame", "Action", 2019, 9.7);
MovieCollection.removeMovie(3);
MovieCollection.addMovie("Avenger: Infinity War", "Action", 2018, 9.8);
// MovieCollection.showMovies();
// MovieCollection.searchMovie("in");
// MovieCollection.filterByGenre("action");
// MovieCollection.getMovieById(1);
// MovieCollection.getMovieById(2);
// MovieCollection.getTopRated();
MovieCollection.getAverageRating();
