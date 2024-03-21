// class List {
//     constructor() {
//       this.elements = [];
//     }
  
//     addClass(className) {
//       this.elements.forEach(element => {
//         element.classList.add(className);
//       });
//     }
  
//     removeClass(className) {
//       this.elements.forEach(element => {
//         element.classList.remove(className);
//       });
//     }
  
//     toggleClass(className) {
//       this.elements.forEach(element => {
//         element.classList.toggle(className);
//       });
//     }
//   }
// const sectionTodo=document.querySelector(".section-todo");
// //   console.log(sectionTodo.classList)
//   sectionTodo.classList.add('bg-dark')
// //   sectionTodo.classList.remove('container')
//   const f=sectionTodo.classList.contains('container')
// //   console.log(f)

const todoList=document.querySelector(".todo-list")
todoList.innerHTML+="<li>New-Todo</li>"
todoList.innerHTML+="<li>another todo</li>"
todoList.innerHTML+="<li>New-Todo</li>"
todoList.innerHTML+="<li>New-Todo</li>"
