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

//delete Bookmark
function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //loop through bookmarks
  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      //remove from array
      bookmarks.splice(i,1);
    }
  }
  //reset back to local storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

//fetch bookmark
function fetchBookmarks(){
  //get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //get output id
  var bookmarksResults = document.getElementById('bookmarksResults')
  //build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                    '<h3>'+name+
                                    ' <a class="btn btn-default" href=" '+url+' ">Visit</a> ' +
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                    '</h3>'+
                                    '</div>';

  }
}
