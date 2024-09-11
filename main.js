let array = []
alert(` Всё что вы добавили и удалили будет видно только в конце:)`)
for(let i = 0; i < Infinity;i++){
let word = prompt(`введите команду`)
let command = word.split(`, `)
if(word == `stop`){
alert(`напишите: 'я поставлю 5' тогда остовится бесконечный цикл `)
}else if(word == `я поставлю 5`){
    alert(`спасибо`)
 break
}else if(command[0] == `add`){
array.push(command[1])
}else if(command[0] == 'del'){
for(let i = 0; i < array.length;i++){
array[i] == command[1] ? array.splice(i,1)  : ''

}
}
}

console.log(array);
