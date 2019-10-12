function addFavoriteBook(bookName) {
  if(!bookName.includes("Great")){
    favoriteBooks.push(bookName)
  }
}

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (const bookName of favoriteBooks) {
    console.log(bookName);
  }
}

var favoriteBooks = []

addFavoriteBook('A song od Ice and Fire')
addFavoriteBook('The Great Gatsby')
addFavoriteBook('Crime & Punishment')
addFavoriteBook('Great Expectations')
addFavoriteBook('You Don\'t Know JS')