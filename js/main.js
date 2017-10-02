//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e) {
  //get form value
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  //local storage test
    // localStorage.setItem('test', 'Hello World');
    //   console.log(localStorage.getItem('test'));
    //   localStorage.removeItem('test');
    //   console.log(localStorage.getItem('test'));


//Test if any bookmark is null
  if(localStorage.getItem('bookmarks') === null) {
    //init array
    var bookmarks = [];
    //add to array
    bookmarks.push(bookmark);
    //set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    //get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //add bookmark to array
    bookmarks.push(bookmark);
    //reset back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

//prevents form from submitting
  e.preventDefault();
}

//fetch bookmark
function fetchBookmarks(){
  //get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  console.log(bookmarks);
}
