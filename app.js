/* const allButton = document.getElementsByClassName("button-test");
const prime = document.getElementById("prime");
console.log(allButton);
// console.log(prime);
// for(const button of allButton){
//     console.log(button);
// }
// for (let i = 0; i < allButton.length; i++) {
//     const element = allButton[i];
//     console.log(element);
    
// } 
for(const button of allButton){
    button.addEventListener('click', function(e){
        // console.log(e.target.parentNode);
        
        if(e.target.id == 'prime' ){
            document.getElementById('title').style.color = 'red';
        }
        else{
            document.getElementById('title').style.color = 'green';
        }
    })
} */
let count = 0;
function add(e) {
    count++;
   control('count');
}
function minus(e) {
    count--;
   control('count');
}
function control(id) {
    document.getElementById(id).innerText = count;
}

// document.getElementById('add').addEventListener('click', function(e){
//     count++;
//    // document.getElementById('count').innerText = count;
//    control('count');
// });
// document.getElementById('minus').addEventListener('click',function(e){
//     count--;
//     if(count < 0 ){
//         return count =0;
//     }
//     // document.getElementById('count').innerText = count;
//     control('count');
// });
