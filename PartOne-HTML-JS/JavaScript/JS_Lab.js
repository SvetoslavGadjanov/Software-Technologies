function expr() {
    let val = (30 + 25) / 3 * (35 - 14 - 12);
    let valSquare = val*val;
    console.log(valSquare)
}

function sum(nums){
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let sum = num1 + num2;
    return sum;
}

function nums3 (arr){
    let nums = arr[0].split(' ').map(Number);
    console.log(chek(nums[0], nums[1], nums[2]) ||
                chek(nums[0], nums[2], nums[1]) ||
                chek(nums[2], nums[1], nums[0]) ||
                "No"
    );

    function chek(num1, num2, num3){
        if(num1 > num2){
            [num1, num2] = [num2, num1]
        }
        if(num1 <= num2 && num1 + num2 == num3){
            return `${num1} + ${num2} = ${num3}`;
        }
    }
}


function symmetricNumbers (arr) {
    let n = Number(arr[0]);
    let result = '';
    for (let i = 1; i <= n; i++) {
        if(isSimmetric("" + i)){
            result += i + " ";
        }
    }
    console.log(result)

    function isSimmetric(str) {
        for (let i = 0; i <= str.length / 2; i++) {
            if(str[i] != str[str.length-i-1]){
                return false;
            }
        return true;
        }
    }
}

function townIncome (arr) {
    let objects = arr.map(JSON.parse);
    let sums = {};
    for (let obj of objects){
        sums[obj.town] = sums[obj.town] || 0;
        sums[obj.town] += obj.income;
    }
    let towns = Object.keys(sums);

    towns.sort();

    for (let t of towns) {
        console.log(`${t} -> ${sums[t]}`);
    }
}

function topThreeNumbers(arr){
    let nums = arr.map(Number);
    nums.sort((a, b) => b-a);
    //console.log(nums);
    let count = Math.min(3, nums.length);
    for (let i = 0; i < count; i++) {
        console.log(nums[i]);
    }
}

function extractCapitalWords(arr){
    let text = arr.join(",");
    let words = text.split(/\W+/).filter(x => x != "");
    let capitalWords = words.filter(
        x => x.toUpperCase() == x
    );
    console.log(capitalWords.join(", "));
}



topThreeNumbers(["100","5","87","-30","18","2"]);