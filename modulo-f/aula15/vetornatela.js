let valores = [8, 1, 7, 4, 2, 9]

// For
console.log(valores, `\nFor`)
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// For in
console.log(`\nFor in`)
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
