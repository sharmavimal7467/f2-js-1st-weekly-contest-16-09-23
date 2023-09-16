const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
]
// 1. Print Developers
function printDeveloper() {
  if(data[0].profession == "developer"){
    console.log(data[0].name);
  }
  else{
    console.log(data[1].name);
  }
}

// 2. Add Data
function addData() {
    const newData = {
      id: data.length + 1,
      name: prompt("Enter a name:"),
      age: parseInt(prompt("Enter an age:")),
      profession: prompt("Enter a profession:"),
    };
    data.push(newData);
    console.log("New data added:", newData);
  }
//   data.splice(2,1,{name:"Viyaan",age:22,profession:"Learner"});
// console.log(data)
// }

// 3. Remove Admins
function removeAdmin() {
const del = delete data[1].profession;
  console.log(del);
  console.log(data[1]);
}
// 4. Concatenate Array
function concatenateArray() {
  const newArr = {name: "Viyaan", age: 22, profession:"Learner"};
  const concArr = data.concat(newArr);
  console.log(concArr);
}

// 5. Average Age
function averageAge() {
  const aveAge = ((data[0].age+data[1].age)/2)
  console.log(aveAge);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i = 0;i<data.length;i++){
    if(data[i].age>25){
      console.log("yes,",data[i].name,"age is above 25");
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let unique_values = [...new Set(data.map((element)=>element.profession)),];
  console.log(unique_values);
}

// 8. Sort by Age
function sortByAge() {
 data.sort((x,y) => x.age - y.age);
console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
   for(let i = 0;i<data.length;i++){
    if(data[i].name=="john"){
       data[i].profession= "manager";
    }
    console.log(data[i]);
    break;
   }
}

// 10. Profession Count
function getTotalProfessions() {
  let ct = 0;
for(let i = 0;i<data.length;i++){
  if(data[i].profession=="developer"){
      ct = ct+1;
  }  
}
console.log("developer are =",ct)
let ct1=0;
for(let i = 0;i<data.length;i++){
  if(data[i].profession=="admin"){
    ct1 = ct1+1;  
}
}
console.log("admin are =",ct1)
}
