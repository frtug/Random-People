function createnode(element){
     return document.createElement(element);
}

function append(parent,el){
     return parent.appendChild(el);
}

const ul = document.getElementById("authors");
const url = 'https://randomuser.me/api/?results=100';

fetch(url)
.then((resq) => resq.json() )
.then(function(data){
     let authors = data.results;
     console.log(authors.length);

     return authors.map(function(author){
          let div = createnode('div')
          li = createnode('li'),
          img = createnode('img'),
          span = createnode('span');
          
          img.src=author.picture.large;
          span.innerHTML =` ${author.name.first} ${author.name.last}, ${author.gender}`;
          

          append(li,img);
          append(li,span);
          append(div,li)
          append(ul,div);
          
     
          
     })
})
.catch(function(error){
     console.log(JSON.stringify(error));
});
