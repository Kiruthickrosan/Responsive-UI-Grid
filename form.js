function toggleBold(index) {
    var sentence = document.getElementById("sentence" + index);
    sentence.style.fontWeight = (sentence.style.fontWeight === 'bold') ? 'normal' : 'bold';
  }
  
  function toggleItalic(index) {
    var sentence = document.getElementById("sentence" + index);
    sentence.style.fontStyle = (sentence.style.fontStyle === 'italic') ? 'normal' : 'italic';
  }
  
  function toggleUnderline(index) {
    var sentence = document.getElementById("sentence" + index);
    sentence.style.textDecoration = (sentence.style.textDecoration === 'underline') ? 'none' : 'underline';
  }
  
  function changeFontSize(index, size) {
    var sentence = document.getElementById("sentence" + index);
    sentence.style.fontSize = size + "px";
  }
  
  function changeColor(index, color) {
    var sentence = document.getElementById("sentence" + index);
    sentence.style.color = color;
  }