function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.querySelectorAll("ul.ranked-list li")
  lis.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n)
}

function deepestChild(){
 let node = document.querySelectorAll("div#grand-node div");
 return node[node.length-1];
 }
