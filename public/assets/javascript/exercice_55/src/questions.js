function createArr (itemList) {
    let arr = itemList.split(", ")
    return arr;
}

function createArrNum (num_1, num_2) {
    let arr = [];
    for (let i = num_1; i <= num_2; i++) {
        arr.push(i);
    }
    return arr;
}

function replaceIndex (arr, index, item) {
    arr[index] = item;
    return arr;
}

function concateArray (arr_1, arr_2) {
    let newArr = arr_1.concat(arr_2);
    return newArr;
}

function addNumsArr (num_1, num_2, arr) {
    let newArr = [];
    for (let i = num_1; i >= num_2; i--) {
        newArr.push(i);
    }
    newArr = newArr.concat(arr);
    return newArr;
}

function addItem (index, itemList, arr) {
    let tempArr_1 = arr.slice(0, index);
    let tempArr_2 = arr.slice(index, arr.length);
    let newArr = tempArr_1.concat(itemList).concat(tempArr_2);
    return newArr;
}

function editItem (index, itemList, arr) {
    let tempArr_1 = arr.slice(0, index);
    let tempArr_2 = arr.slice(index + itemList.length, arr.length);
    let newArr = tempArr_1.concat(itemList).concat(tempArr_2);
    return newArr;
}

function arrayToString (arr) {
    let string = arr.join(", ");
    return string;
}

function sortArray (arr) {
    let newArr = arr.sort();
    return newArr;
}

function reverseArray (arr) {
    let newArr = arr.reverse()
    return newArr;
}