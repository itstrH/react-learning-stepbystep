// VD1: NHAN DOI GIA TRI CAC PHAN TU TRONG MANG
const numbers = [1,2,3,4,5,6];

// const doubled = numbers.map(function(abc) {
//     return abc * 2
// })
const doubled = numbers.map((number) => number * 2)

console.log(doubled);

// VD2: Chuyen doi mang doi tuong thanh mang cac ten
const users = [
    {id:1, name:"An", age: 25},
    {id:2, name:"Anh", age: 30},
    {id:3, name:"Nam", age: 24}
];

const names = users.map((user) => user.name)
console.log(names)

// VD3: Su dung day du tham so currentValue, index va arr
const M = [10, 20, 30, 40];

const result = M.map((currentValue, index, arr) => {
    console.log(`index: ${index}`);
    console.log(`gia tri hien tai: ${currentValue}`);
    console.log(`array goc: ${arr}`);
    return currentValue / 10;
})

console.log(result)

// VD4: doi so thisArg
const config = {
    calculate(value) {
        return value * 3;
    },
};

const M2 = [1, 2, 3]
const kq = M2.map(function(vl) {
    return this.calculate(vl);
}, config)

console.log(kq);