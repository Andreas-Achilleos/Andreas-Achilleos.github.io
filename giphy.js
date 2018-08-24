fetch('https://api.giphy.com/v1/gifs/trending?api_key=FiRO1rRBhJH01g579wCtk80HIskvD3Mt&limit=10&rating=G').then(function (response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(JSON.stringify(myJson));
    const giphyTrending = document.querySelector("#root");
    for(var i = 0; i <= 10; i++) {
        var img = document.createElement('img');
        img.src = myJson.data[i].images.fixed_width.url;
        giphyTrending.appendChild(img);
    }
});

////////////KONAMI CODE///////////
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  alert("cheats activated");
}