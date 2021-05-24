// Object

// khai bao obj
// let obj = Object.create({});

// let obj = new Object();

// let person = {
//     name: 'Hieu',
//     age: 22
// };
// key: name, age
// value: Hieu, 22

// Create
// person.address = 'Ha Noi';
// console.table(person); // in ra dang bang

// read one and read all
// console.log(person.name);

//read all
// dung for in ra tat ca value trong obj (dung for in)

// let output = '';
// let i;
// for (i in person) {
//     output += person[i] + ' ';
// }
// console.log(output);

// cach 2
// for (let key in person) {
//     console.log(person[key]);
// }

// Update
// person.name = 'Phuong';
// person.age = 20;
// console.table(person);

// Delete
// delete person.age;  // or delete person["age"];
// console.table(person);

// let user = [
//     {
//         name: 'An',
//         age: 20
//     },
//     {
//         name: 'Bach',
//         age: 22
//     },
//     {
//         name: 'Chung',
//         age: 22
//     }
// ];
// for (let i = 0; i < user.length; i++) {
//     for (let key in user[i]) {
//         console.table(user[i][key]);
//     }
// }

// BT: viet app cho nguoi dung nhap vao 4 chu C/R/U/D
// C: nhap vao ten, tuoi
// them vao ds theo dang cac phan obj va in ra de kiem tra (console.table)
// R: in ra toan bo obj trong mang theo dang value name - age
// U: cho nguoi dung nhap vao index muon Update, sau do tim chung trong mang
// neu ko co ten thi bao: 'lam gi co ma update'
// neu co thi cho nhap ten va update lai, sau in ra
// D: tuong tu update:
// ko tim thay thi in ra: 'ko thay'
// neu co thi xoa, in ra 

// let userInput = prompt("Enter C/R/U/E");
// if (userInput === "C") {
//     let name = prompt("Enter name");
//     let age = Number(prompt("Enter age"));
//     let newUser =     
// }
// if (userInput == "R") {
//     console.table(user);
// }
// if (userInput == "U") {
//     let i = Number(prompt("Enter index: "));
//     if (i > user.length) {

//     }
//     else {

//     }
// }
// if (userInput == "D") {
//     let i = Number(prompt("Enter index: "));
//     if (i > user.length || i < 0) {
//         alert("Ko tim dc vi tri cua " + i);
//     } else {
//         user.splice(i, 1);
//         alert("xoa thanh cong");
//         console.table(user);
//     }
// }

// function - Hàm

// dinh nghia
// function name(a, b, c (optional)) {

// }

// vd in ra tu 1 den 10
// function print() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// print();

// sum = 0;
// function print(a, b) {
//     for (var i = a; i < b; i++) {
//         console.log(i);
//         sum += i;
//     }
//     return sum;
// }
// // print(0, 3);
// console.log(print(0,5));

// 1. nhap 1 canh hinh vuong
// viet function tinh the tich hinh lap phuong

// function theTich() {
//     let input = Number(prompt("Enter canh: "));
//     return input*input*input;
// }
// console.log(theTich());

// 2. viet function nhap vao 1 mang va in ra mang

// function b2() {
//     let input = prompt("Enter: ");
//     let arr = input.split(",");
//     for (let i of arr) {
//         console.log(arr[i]);
//     }
// }
// console.log(b2());

// 3. viet function tinh tong va tich cac phan tu

// function b3() {
//     tong = 0;
//     tich = 1;
//     let input = parseInt(prompt("Enter: "))
//     let arr = input.split(",");
//     for (let i of arr) {
//         tong += arr[i];
//         tich *= arr[i];
//     }
// }
// console.log(b3());