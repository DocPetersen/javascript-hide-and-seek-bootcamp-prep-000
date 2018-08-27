function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestTarget() {
  return document.getDocumentbyId('#nested').querySelector('div.target')
}

function increaseRankBy(n) {
  let rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rank.legnth; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
} 

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }
  return node 
}