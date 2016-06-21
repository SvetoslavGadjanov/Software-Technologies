function multiplyNumber (arr) {
    let num = Number(arr[0]);
    console.log(num * 2);
}

function multiplyTwoNumbers (arr) {
    let numOne = Number(arr[0]);
    let numTwo = Number(arr[1]);

    console.log(numOne*numTwo);
}

function multiplyOrDevide (arr) {
    let numOne = Number(arr[0]);
    let numTwo = Number(arr[1]);

    if(numTwo >= numOne){
        console.log(numOne * numTwo);
    }
    else{
        console.log(numOne / numTwo);
    }
}

function multiplyThreeNumbers (arr) {
    let numOne = Number(arr[0]);
    let numTwo = Number(arr[1]);
    let numThrtee = Number(arr[2]);
    let product = numOne*numTwo*numThrtee;

    if(product > 0){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }
}

function printNumbers (arr) {
    let num = Number(arr[0]);
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

function printNumbers2 (arr) {
    let num = Number(arr[0]);
    for (let i = num; i > 0; i--) {
        console.log(i)
    }
}

function printLines (arr) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "Stop"){
            break;
        }
        else{
            console.log(arr[i])
        }
    }
}

function sortNumbers (arr) {
    console.log(arr
        .map(Number)
        .sort((a,b) => b - a)
    );

}

function reversNumbers (arr) {
    let n = arr.length - 1;
    for (let i = n; i >= 0; i--) {
        console.log(arr[i])
    }
}

function setValues (input) {
    let n = input[0];
    input.shift();
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        let tempArr = [];
        tempArr = input[i].split(' - ');
        array[tempArr[0]] = tempArr[1];
    }

    for (let num of array){
        console.log(num);
    }

}

function addRemoveElements (input) {
    let n = input.length;
    let array = [];

    for (let i = 0; i < n; i++) {
        let arrTemp = input[i].split(" ");

        switch(arrTemp[0]){
            case "add":
                array.push(arrTemp[1])
                break;
            case "remove":
                array.splice(arrTemp[1], 1)
                break;
        }
    }
    for (let num of array){
        console.log(num);
    }
}

function WorkingWithKey (input) {
    let object = {};
    for (let i = 0; i < input.length; i++) {
        let arrTemp = input[i].split(" ");
        if(arrTemp.length == 2){
            object[arrTemp[0]] = arrTemp[1];
        }
        else{
            console.log(object[arrTemp[0]] || "None")
        }
    }
}

function multipleValues (arr) {
    let dict = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let tokens = arr[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];
        dict[key] = dict[key] || [];
        dict[key].push(value);
    }
    let wanted = arr[arr.length - 1];

    if (dict[wanted] == undefined)
        console.log("None");
    else
        for (let value of dict[wanted])
            console.log(value);
}

function storingObjects (input) {
    function student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;

    }

    let currentStudent = new student();
    let students = [];
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' -> ');
        currentStudent.name = tokens[0];
        currentStudent.age = tokens[1];
        currentStudent.grade = tokens[2];

        students.push(currentStudent);
        currentStudent = new student;
    }

    for(let st of students){
        console.log(`Name: ${st.name}`);
        console.log(`Age: ${st.age}`);
        console.log(`Grade: ${st.grade}`);

    }
}

function parseJSONObjects(input){

    let currentStudent = {};
    for (let i = 0; i < input.length; i++) {
        currentStudent = JSON.parse(input[i]);
        console.log(`Name: ${currentStudent.name}`);
        console.log(`Age: ${currentStudent.age}`);
        console.log(`Date: ${currentStudent.date}`);
    }
}

function turnObjectToJSON(input){

    let obj = {};
    for(let i = 0; i < input.length; i++){
        let str = input[i].split(' -> ');
        obj[str[0]] = str[1];
        if(str[0] == "grade"){
            obj[str[0]] = Math.round(parseInt(str[1]));
        }
        if(str[0] == "age"){
            obj[str[0]] = Math.round(parseInt(str[1]));
        }
    }
    console.log(JSON.stringify(obj));
}





turnObjectToJSON(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);
