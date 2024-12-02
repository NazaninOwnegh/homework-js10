// Using an example, explain the difference between block,global and function scope in variables.

let globalScope = "global";

function Scope() {
  let functionScope = "functionScope";

  if (true) {
    let blockScope = "blockScope";
    console.log(globalScope);
    console.log(functionScope);
    console.log(blockScope);
  }

  console.log(globalScope);
  console.log(functionScope);
  console.log(blockScope);
}

Scope();
console.log(globalScope);
console.log(functionScope);
console.log(blockScope);
