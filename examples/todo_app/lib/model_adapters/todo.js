var Todo = new (function () {

  this.load = function (id, callback) {
    for (var i in geddy.todos) {
      if (geddy.todos[i].id == id) {
        callback(geddy.todos[i]);
        return;
      }
    }
    callback({});
  };

  this.save = function (todo, callback) {
    for (var i in geddy.todos) {

      // if it's already there, save it
      if (geddy.todos[i].id == todo.id) {
        geddy.todos[i] = todo;
        return
      }

    }
    todo.saved = true;
    geddy.todos.push(todo);
  }

})();

exports.Todo = Todo;
