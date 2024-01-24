/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
this.arr = [];
  }

add(todo){
this.arr.push(todo)
}

remove(todoIndex){
  this.arr.splice(todoIndex,1)
  // console.log(this.arr)
  }

  update(index,todo){
// this.arr = 
this.arr = this.arr.map((ele,i) => {
  return i === index ?  todo: ele 
})
    }

    getAll(){
      return this.arr
    }

    get(indexOfTodo){
      return this.arr[indexOfTodo] ? this.arr[indexOfTodo] : null
    }

    clear(){
// construtor();
this.arr = [];
    }

}

module.exports = Todo;
