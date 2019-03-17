function name(input) {
  let favoriteBook = input.shift();
  let books = Number(input.shift());
  let booksChecked = input.shift();

  let checkedBooks = 0;
  let bookIsFound = false;

  while (checkedBooks < books) {
    if (booksChecked == favoriteBook) {
      bookIsFound = true;
      break;
    }
    checkedBooks++;
    booksChecked = input.shift();
  }

  if (bookIsFound == false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedBooks} books.`);
  } else {
    console.log(`You checked ${checkedBooks} books and found it.`);
  }
}

name(["Troy", 4, "Stronger", "Life Style", "Troy"]);
