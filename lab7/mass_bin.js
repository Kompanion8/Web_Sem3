
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

alert("Массив языков для анализа - [" + strArray + "].");

function mapForEach(arr, fn) {
    const new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(fn(arr[i]));
    };
    return new_arr
};

const arr_bin = mapForEach(strArray, function (item) {
    if (item.length <= 3) {
        return 0;
    } else {
        return 1;
    };
});

alert("Результат по длине названий языков - [" + arr_bin + "].");