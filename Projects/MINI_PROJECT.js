var colors = [
    { color: 'rgb(255, 0, 0)', name: 'Red' },
    { color: 'rgb(0, 255, 0)', name: 'Green' },
    { color: 'rgb(0, 0, 255)', name: 'Blue' },
    { color: 'rgb(255, 255, 0)', name: 'Yellow' },
    { color: 'rgb(255, 0, 255)', name: 'Magenta' },
    { color: 'rgb(0, 255, 255)', name: 'Cyan' },
    { color: 'rgb(128, 0, 0)', name: 'Maroon' },
    { color: 'rgb(0, 128, 0)', name: 'Green (Mid)' },
    { color: 'rgb(0, 0, 128)', name: 'Navy' },
    { color: 'rgb(128, 128, 128)', name: 'Gray' }
  ];
  
  function changeColor() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor.color;
    document.getElementById('colorText').innerText = randomColor.name;
  
    if (randomColor.name === 'Blue') {
      document.getElementById('colorText').classList.add('blue-heart');
    } else {
      document.getElementById('colorText').classList.remove('blue-heart');
    }
  }
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  document.getElementById('changeColorBtn').addEventListener('click', changeColor);
  