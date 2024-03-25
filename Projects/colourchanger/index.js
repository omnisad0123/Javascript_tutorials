const color = document.querySelectorAll('.parent');
 
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function(e) {
        if (e.target.classList.contains('button')) {
            document.body.style.backgroundColor = e.target.id;
        }
    });
}


// color.forEach(function(button){
//     button.addEventListener('click',function(e){
//           if(e.target.id==='grey'){
//              document.body.style.backgroundColor=e.target.id
//           }
//           if(e.target.id==='pink'){
//              document.body.style.backgroundColor=e.target.id
//           }
//           if(e.target.id==='yellow'){
//              document.body.style.backgroundColor=e.target.id
//           }
//           if(e.target.id==='blue'){
//              document.body.style.backgroundColor=e.target.id
//           }
//     })
// })

