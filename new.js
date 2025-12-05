// let student = {
//     name:"rohit",
//     age:18,
//     locality:"indian",
//     date_of_birth:"28july2003",
//     address: {
//         street:"mg road",
//         pin:567878
//     }
// }
// // console.log(student.address.pin)
// // //
// // let a= student.age;
// // //if(18<=student.age)
// // if(a>=18){
// //     console.log("you can vote");
// // }else{
// //     console.log("you can not vote");
// // }


// //Assignment 
// //
// for (const value in student) {
//    // if (!student.hasOwn(object, key)) continue;
//     console.log(value);
//      console.log(student[value]);
//      console.log(student.value);
//      //gives undefined, why??b
// }
// let n=prompt("enter the number to which table want");
// let p=1;
// while(p<=10){
//     console.log(n*p);
//     p++;
// }
//  let arr=[23,4,5,6]
// //  const newarr=arr.concat(23)
// //  console.log(newarr)


//  console.log(arr.slice(4));

//  let arr2=[90,2,4,5,6,9]
// //  arr.slice(2,2);
//  console.log(arr2.splice(2,4));

// let arr[ n];
// for(int i=1; i<n;i++){
//     let arr2=prompt(arr[i]);
//     console.log(arr2)

//  const arr=[12,3,4,6,7];
// //map
//  arr.map(( _,index)=>{
//     console.log(`value is ${index/2} and index is ${index} `)

// })
// //fiter
let arr=[2,13,16,18,10,7,3];
// const arr2=arr.filter((value,index)=>{
//          console.log(value);
//    return value%2===0;
//  })
//  console.log(arr2);

 //const dividenumbers= arr.map(function(arr)){
   // let new = arr/2;
 //}

 //console.log(new);
 let newArray= [];
 arr.map((value)=>{
    if(value%2==0){
        newArray.push(value);
    }
 })
  console.log(newArray);

//reduce
//arr.reduce()
//



