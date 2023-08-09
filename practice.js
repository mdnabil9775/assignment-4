// -----------------problem-1---------------
function cubeNumber(number) {
    if(typeof number !== 'number' || number < 0){
        return 'Please Provide me valid and positive number'
    }else{
        const result = number * number * number;
        return result;
    }
}
// console.log(cubeNumber(4))

// -----------problem-2---------------
function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' && typeof string2 !== 'string'){
        return 'Please provide me a valid "string". '
    }else{
        if(string1.includes(string2)){
            return true;
        }else{
            return false;
        }
    }
}
// console.log(matchFinder('nabil', 'bil'))

// --------------problem-3-------------
function sortMaker(arr) {
    let element1 = arr[0];
    let element2 = arr[1];
    if(element1 < 0 || element2 < 0){
        return 'Invalid Input';
    }else{
        if(element1 !== element2){
            for (let i = 0; i < arr.length; i++) {
                for(let item = i+1; item<arr.length; item++){
                    if(arr[item] > arr[i]){
                        let sort = arr[i];
                        arr[i] = arr[item];
                        arr[item] = sort;
                    }
                }
                }  
                return arr;
            }
            else{
                return 'equal';
            }
        }
        
    }
    // console.log(sortMaker([7,12]))
    
    // --------------problem-4-----------------
    function findAddress(obj) {
        for(let i = 0; i < 3; i++){
            return Object.values(obj);
        }
    }
    // console.log(findAddress({
    //     street : 10,
    //     house : '15A',
    //     society : 'earth perfect'
    
    // }))

    // --------------problem-5---------------
    function canPay(changeArray, totalDue) {
        if(changeArray.length === 0){
            return "Please provide me array's value"
        }else{
            let sum = 0;
        for (const i of changeArray){
            sum += i;
        }
        if(totalDue <= sum){
            return true;
        }else{
            return false;
        }
        }
    }
    // console,console.log((canPay([1,1,5],10)));




