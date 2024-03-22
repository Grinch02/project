'use strict';

//  alert('hello');

//const result = confirm('are you here?');
//console.log(result); 

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Как ваше фамилия?','');
// answers[2] = prompt('Сколько вам лет?','');

// console.log(typeof(answers));
// console.log(typeof(null));


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет,${user}`); /* интерполяция (ES6) */


  const numberOfFilms = +prompt('Сколько фильмов вы  уже посмотрели?', '');

  const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };

  const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов', ''),
        d = prompt('На сколько оцените его?', '');

  personalMovieDB.movies[a] = b;
  personalMovieDB.movies[a] = b;
  
  console.log(personalMovieDB);