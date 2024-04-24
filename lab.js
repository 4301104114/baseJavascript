
function Course(idCourse ,nameCourse, costCourse ){
    this.IdCourse = idCourse,
    this.NameCourse = nameCourse,
    this.Course = costCourse
}


//console.log(Math.floor(Math.random()*14))
function getRandomItem(array){
    let randomIndex = Math.floor(Math.random()*array.length);
    let result = array[randomIndex];
    return result;
}

function getRandom(){
    let random = Math.floor(Math.random()*10);
    return random;
}
// Create function getPIN
function getPIN(size) {
    let arrPIN = [];
    for(let count=0; count<size; ++count){
        let item = getRandom();
        arrPIN.push(item);
    }
    return arrPIN.join('');
}

let gameCreatePIN = function(){
    let countPIN = prompt("Hay nhap so chu so cho ma PIN");
    alert(getPIN(Number.parseInt(countPIN)));
}

let sort_Integer = function(num1, num2){
  
   if(Number.parseInt(num1) < Number.parseInt(num2)){
     return -1;
   }
   else if(Number.parseInt(num1) < Number.parseInt(num2)){
    return 1;
   }
   return 0;
}



let myInfo = {
    fullName: "nguyen phuong ngan",
    Age: 24,
    Country: "Vietnam"
}

let arrKey = Object.keys(myInfo);
let arrValue = Object.values(myInfo);

// for(const value of arrKey){
//     console.log(myInfo[value]);
// }

// for(const value of arrValue){
//     console.log(value);
// }

function logItemArray(start, end, array){
    console.log(array[start])
    if(start < end){
        return logItemArray(start+1, end, array);
    }
    
}   





let info = {
    name: "ngan",
    age: 24
}

Array.prototype.forEach2 = function(callback){
  
    for(let index in this){
        if(this.hasOwnProperty(index)){
           callback(this[index], index, this);    
        } 
    }
}

Array.prototype.filter2 = function(callback){
    let result = [];
    for(let index in this){
        if(this.hasOwnProperty(index)){
           if(callback(this[index], index, this)){
              result.push(this[index]);
           }    
        }         
    }
    return result;
}

Array.prototype.every2 = function(callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index], index, this)){
                return false;
            }
        }
    }
    return true;
}

Array.prototype.some2 = function(callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
        }
    }
    return false;
}


let inputCourse = 
   document.querySelector(".inputCourse");

let btn_addCourse = 
   document.querySelector(".btn_addCourse");
   
let listCourses = 
   document.querySelector(".listCourses");

let arr_Courses = [];

function addCourse(nameCourse){

   let ItemCourse = 
        document.createElement('li');

   let text_ItemCourse = 
        document.createTextNode(nameCourse);

   let btn_removeItemCourse = 
      document.createElement('button');

   let textBtn_removeItemCourse =
      document.createTextNode('Remove');

   btn_removeItemCourse.classList.add('btn_removeCourse');
   btn_removeItemCourse.appendChild(textBtn_removeItemCourse)
    
   ItemCourse.classList.add('itemCourse');
   ItemCourse.appendChild(text_ItemCourse);
   ItemCourse.appendChild(btn_removeItemCourse);
   listCourses.appendChild(ItemCourse);
   
   arr_Courses.push(ItemCourse);
   
}

function removeCourse(){
    let getItemCourse =
       document.querySelector('.itemCourse');
    console.log(getItemCourse);
}

btn_addCourse.onclick = function(){
    
    addCourse(inputCourse.value);
    inputCourse.value = '';
    
}

let btn_displayCourse =
    document.querySelector('.display_course');

btn_displayCourse.onclick = function(){

    arr_Courses.map(function(course){
        return course.children;
    })
    console.log(arr_Courses);
}

