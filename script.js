let students = [{'name':"Christian Marco", 'age':"27", 'birthdate':"08/17/1996",'course':"BSIS" }]




function showStudents(){
    var row = "";
    for (var i = 0; i < students.length; i++){     
        row = row + `<tr>                
                    <td>${students[i].name}</td>
                    <td>${students[i].age}</td>   
                    <td>${students[i].birthdate}</td> 
                    <td>${students[i].course}</td>  
                </tr>`       
     }
     document.getElementById('myTable').innerHTML = row;
 }

function addOnClick(){
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;
            var birthdate = document.getElementById('birthdate').value;
            var course = document.getElementById('course').value;

            if(name && age && birthdate && course){
                
                students.push({name:name, age:age, birthdate:birthdate, course:course})
                showStudents()
            }
            
}
