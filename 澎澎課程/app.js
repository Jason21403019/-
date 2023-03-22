//函式
// function add(a1, a2){
//     return a1+a2
// }
// console.log(add(3,7)); 

// let add=(a1,a2)=>{
//     return a1+a2
// }
// console.log(add(4,5)); 

// let add = (a1,a2)=>(a1+a2)
// console.log(add(4,5)); 

//回呼函式(callback function) Promise async/await

//callback function
// function delayAdd(a1, a2, time, callback){
//     //非同步的函式
//     window.setTimeout(function () {
//         callback(a1+a2)
//     }, time)
   
// }
// delayAdd(2,3,2000,function(result){
//     console.log(result);
//     delayAdd(2,3,4000,function(result){
//         console.log(result*10)
//         delayAdd(2,3,4000,function(result){
//             alert(result*10)
//     });
//   });
// });


//Promise 基本用法
//1.使用Promise 建構式建立promise 物件
//2.Promise 建構式:
//  new Promise(function (resolve, reject){ 執行函式
// i.想要執行的函示
// ii.呼叫 resolve():如果執行成功 接到then()的執行函式
// iii.呼叫 reject():如果執行失敗 接到catch()的執行函式
// })
//3. 使用Promise 物件的then(執行函式) 和 catch(執行函式)
// let p = new Promise(function(resolve, reject){
//    let number = prompt("請輸入正整數", "")
//    if(number >0 ){
//     resolve(number)
//    }else{
// reject("錯誤輸入")
//    }
// }).then((input)=>{
//     console.log("ok",input);
// }).catch((message)=>{
//     console.log("error!!", message);
// })
// function delayAdd(n1, n2,time){
// let p = new Promise(function(resolve, reject){
//     window.setTimeout(function(){
//         resolve(n1+n2)
//        },time);    
//     });
//     return p;
// }
// delayAdd(2, 3, 2000).then(result=>{
//     console.log(result);
//     return delayAdd(3,4,4000)
// }).then(result=>{
//     console.log(result);
//     return delayAdd(1,3,6000)
// }).then(result=>{
//     console.log(result);
// })

//async/ await 是 Promise語法糖

//let 變數名稱 = await Promise 物件
//變數會取得Promise 執行函式中 resolve傳遞的資料
//await指令一定要包在 async蘭是裡面

// function delayAdd(n1, n2,time){
//     let p = new Promise(function(resolve, reject){
//         window.setTimeout(function(){
//             resolve(n1+n2)
//            },time);    
//         });
//         return p;
//     }
// async function exeute(){
//     let result = await delayAdd(1,2,3000)
//     console.log(result);
//     result = await delayAdd(2,3,4000)
//     console.log(result);
// }
// exeute()

// let src1 =" https://cwpeng.github.io/live-records-samples/data/products.json"
// let src2 = "https://cwpeng.github.io/live-records-samples/data/reviews.json"

// function getData(src){
//     return new Promise(function(resolve, reject){
//         fetch(src1).then((res)=>{
//             return res.json()
//         }).then(function(data){
//             resolve(data)
//         })
//     })
// }
// console.log(getData(src1))

function render(){
    //製作HTML Element: document.createElement("")
    let header = document.createElement("h3")
    header.textContent="Jason";
    document.body.appendChild(header)
    // console.log(header);
    let menu = document.createElement("div")
    menu.classList.add("menu")
    let item1 = document.createElement("div")
    item1.classList.add("item1")
    item1.textContent = "Item1"
    let item2 = document.createElement("div")
    item2.classList.add("item2")
    item2.textContent = "Item2"
    menu.appendChild(item1)
    menu.appendChild(item2)
    document.body.appendChild(menu)

}

render()


