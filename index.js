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
