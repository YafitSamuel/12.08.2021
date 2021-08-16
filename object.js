


// // const stodent = {
// //     name: "yafit",
// //     lastName: "samuel",
// //     age: 12,
// //     phone: "5634077248",
// //     email: "yagit@gmail.com",
// //     array=[80,90,100],
// //     myName: function(){
// //         return this.name + this.lastName
// //     },
// //     avg: function(){
// //         for(let i=0; i<stodent.array.length;i++){
// //            let sum=0;
// //            sum=sum+stodent.array [i]
// //         }
// //     } 
// // }
// // console.log(stodent.myName());


// // console.log(stodent.myName());


// // const stodent=[
// //     {fullName:"yafit",email:"yafit642Speect.com",phone:"536336457276"},
// //     {fullName:"yael",email:"yael789bdjs.com",phone:"76989887"},
// //     {fullName:"eden",email:"vghveden87j.com",phone:"8978980"},
// //     {fullName:"tali",email:"njdbchjcml.com",phone:"4736299"},
// // ]
// // for(let i=0;i<stodent.length;i++){
// //     console.log(stodent[i].fullName)
// //     console.log(stodent[i].email)
// //     console.log(stodent[i].phone)
// // }

// const produacts = [
//     { name: "banna", price: 30, pic: ["https://cdn.pixabay.com/photo/2020/12/19/21/45/banna-5845460__340.jpg", "https://media.istockphoto.com/photos/cotton-bag-full-of-vegetables-and-fruits-closeup-shopping-bag-on-picture-id1287199683?b=1&k=6&m=1287199683&s=170667a&w=0&h=mLGPrL2zKB1D69j-PUC5t8AFXirLdRHp3hrJeSPpVh0="] },
//     { name: "melon", price: 69, pic: ["https://media.istockphoto.com/photos/cantaloupe-melon-picture-id910127132?b=1&k=6&m=910127132&s=170667a&w=0&h=AvlFPNnkWmAbk-hj36_DlPA_jy-ktG5yzE4u062KxFY=", "https://cdn.pixabay.com/photo/2018/05/27/16/30/melon-3433835__340.jpg"] },
//     { name: "appel", price: 35, pic: ["https://media.istockphoto.com/photos/appel-on-black-backgroung-black-and-white-picture-id1299832159?b=1&k=6&m=1299832159&s=170667a&w=0&h=eixohd1ynOx-fsqUWQPY661TfWdik7JVqDoaTD5Tczk=", "https://media.istockphoto.com/photos/apples-picture-id502953773?k=6&m=502953773&s=612x612&w=0&h=ow-6q1jFUkL6Kvt7_rWkUhzjkUd4wxo9q3pTrGH63cA="] },
//     { name: "tomato", price: 78, pic: ["https://media.istockphoto.com/photos/three-tomatoes-picture-id91476821?b=1&k=6&m=91476821&s=170667a&w=0&h=96vsQ1lcoPy0KVAO0C7M353yP-AccGVvn6NKbDib-3U=", "https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356__340.jpg"] },
//     { name: "cucumber", price: 58, pic: ["https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269__340.jpg", "https://media.istockphoto.com/photos/cucumber-slices-on-a-white-background-picture-id91516166?b=1&k=6&m=91516166&s=170667a&w=0&h=lvNtHmJuCQfsA0C_MK1H3esTwn2o1-HfbTePJOkHso0="] }
// ]
// // for (let i = 0; i < produacts.length; i++) {
// //     for (let j = 0; j < produacts[i].pic.length; j++) {
// //         console.log(produacts[i].pic[j]);
// //     }
// // }

// for (let i = 0; i < produacts.length; i++) {
//     const produactsPic = produacts[i].pic
//     for (let j = 0; j < produactsPic.length; j++) {
//         console.log(produactsPic[j]);
//     }
// }

// ===========================שאלות אובייקטים======================
//  const person = {
//    fullName: "yafitsamuel",
//     age: 34,
//     eat: "banna",
//     drink: "cola",
//     personAge: function () {
//         return this.age + 10
//     }
// }
// console.log(person.personAge());
// // ===============================================================2
// // הגדרת משתנה גיל חדש
// person.age= 22;
// console.log(person.personAge());
// ================================================================3
// const student={
//     firstname:"yoni",
//     lastname:"bloch",
//     age:23,
//     email:"jdcbjc.com",
//     phone:"057867579",
//     array:[90,75,100]
// }
// console.log(student.firstname);
// console.log(student.lastname);
// console.log(student.age);
// console.log(student.email);
// console.log(student.phone);
// ================================================================4
// חזור לאובייקט בשאלה 1 והוסף פונקציה המחזירה שם פרטי ומשפחה *

// const person = {
//     firstname: "yafit",
//     lastname: "samuel",
//     age: 34,
//     eat: "banna",
//     drink: "cola",
//     personAge: function () {
//         return this.age + 10
//     },
//     fullName: function () {
//         return this.firstname + this.lastname
//     }
// }
// console.log(person.fullName());
// ================================================================5
// const student = {
//     firstname: "yoni",
//     lastname: "bloch",
//     age: 23,
//     email: "jdcbjc.com",
//     phone: "057867579",
//     array: [90, 75, 100],
//     arrayGrade: function () {
//         let sum=0;
//         let avg=0;
//         for (let i = 0; i < this.array.length; i++){
//             sum = this.array[i] + sum
//          avg = sum /this.array.length
//         }
//     return avg
//     }
// }
// console.log(student.arrayGrade());
// ================================================================6
const student = {
    firstname: "yoni",
    lastname: "bloch",
    age: 23,
    email: "jdcbjc.com",
    phone: "057867579",
    array: [90, 75, 100],
    arrayGrade: function () {
        let min = student.array[0]
        for (let i = 0; i < student.array.length; i++) {
            if (min > array[i]) {  
                min=student.array[i]          
            }
        }
        return min
    },
}
    console.log(student.arrayGrade());













