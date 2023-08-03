function check() {
  var value = document.getElementById('data').value;
  if(value%2 == 0) {
    result = `${value} is even`;
  }else {
    result = `${value} is odd`;
  }
  document.getElementById('result').innerHTML = result;

}