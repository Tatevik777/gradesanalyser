const students=[1,2,3,4,5,6,7,8,9,10,11,12];

const grades=students.map(()=>{
return Math.floor(Math.random()*100)}); //создаем массив , который возвращает такое же  количество оценок , как и студентов 

console.log(grades);

const sum = grades.reduce((cur, prev)=>{
    return cur+prev
});

console.log('Средний балл '+ Math.floor(sum/grades.length));

console.log('Самый высокий балл ', Math.max(...grades));
console.log('Самый низкий балл ', Math.min(...grades));

const successfulStudents= grades.filter(el =>{
    if(el >=60)
    return el})
console.log('Количество хороших студентов ' , successfulStudents.length);

const failedStudents= grades.filter(el =>{
    if(el <=60)
    return el})
console.log('Количество неуспевающих студентов ' , failedStudents.length);

const gradesToStrings= grades.map(item =>{
  if (item>80 && item<100){
    return 'A';
  } else if(item>60 && item<79)  {
    return 'B';
  }else if(item>40 && item<59)  {
    return 'C';
  }else if(item>20 && item<39)  {
    return 'D';
  }else if(item<20){
    return 'E';
  }})

  console.log(gradesToStrings);
