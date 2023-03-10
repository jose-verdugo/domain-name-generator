let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function combinaciones(pronoun, adj, noun) {
  let solucion = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        solucion.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return solucion;
}
console.log(combinaciones(pronoun, adj, noun));