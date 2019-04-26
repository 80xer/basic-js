!(function() {
  const todoValue = document.getElementById('todovalue');
  const button = document.getElementById('submit');
  const todosList = document.getElementById('todos');
  button.addEventListener('click', function(e) {
    const todo = document.createElement('li');
    todo.textContent = todoValue.value;
    todoValue.value = '';
    todosList.appendChild(todo);
    e.preventDefault();
  });
})();

function getKewyord(referrerHost, Referrer) {
  if (
    referrerHost === 'search.naver.com' ||
    referrerHost === 'm.search.naver.com'
  ) {
    const pattern = new RegExp('[\\?&]query=([^&#]*)');
    const query = Referrer.match(pattern);
    const keyword = query[1].replace(/\+/gi, '%20');
    return decodeURI(keyword);
  }
}

const keyword = getKewyord(
  'search.naver.com',
  'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=자바스크립트'
);
console.log('keyword', keyword);
