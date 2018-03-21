lightbox.option({
  'showImageNumberLabel': false,
})


// function addToAlbum($link) {
//   self.album.push({
//     cap: $link.attr('data-caption'),
//     // alt: $link.attr('data-alt'),
//     // link: $link.attr('href'),
//     // title: $link.attr('data-title') || $link.attr('title')
//   });
// }

function search() {

  // creating variables and getting the input value and the elements
  var input;
  var filter;
  var a;
  var i;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  a = document.getElementsByClassName('lightbox-image')

// looping through every element and compare the attribute with the input
  for (i = 0; i < a.length; i++) {
    a = document.getElementsByClassName('lightbox-image');

    if (a[i].getAttribute('data-title').indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
