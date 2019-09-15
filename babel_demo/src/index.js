[1, 2, 3].map(item => item + 1);

let ids = ['id1', 'id2'];
let messages = ids.map((value, index, array) => `ID of ${index} element is ${value}`);

console.log(messages);
