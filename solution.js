// task 1
document.getElementById("task1").innerText = "I changed it but it still wont check";
// task 2 
document.getElementById("task2").innerHTML = '<button>submit</button>';
// task 3
document.body.style.backgroundColor = "#232323";
//task 4 
let items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    items[i].style.border = '1px solid black'
};
//task 5
let newHref = documents.getElementById('task5').href = "https://www.springboard.com/";
//task 6
document.getElementById('task6').value = "DOM Master";
//task 7 
document.getElementById('task7').classList = 'new-class';
//task 8 
let button = document.createElement('BUTTON');
button.innerHTML = 'Click Me';
document.getElementById('task8').appendChild(button);
//i couldnt get this one to work for some reason ^
//task 9 
let task9remove = document.getElementById('task9');
task9remove.parentNode.removeChild(task9remove);
