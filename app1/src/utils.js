module.exports.getName = () => {
  return 'utilxy';
}

// module.exports.getTodos = (tag) => {

//   var req = new XMLHttpRequest();

//   req.open('GET', 'todos.json', true);
  
//   req.onload = () => {

//     if(req.status === 200){
//       var data = JSON.parse(req.responseText);

//       tag.trigger('data_loaded', data.todos);

//     };

//   };
  
//   req.send();

// }