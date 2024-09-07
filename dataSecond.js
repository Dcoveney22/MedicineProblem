function checkData(array){
    if(array.length == 0)
        return null;
    const checkingMap = {};
    let maxType = "", maxCount = 1;
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (checkingMap[element] == null){
                checkingMap[element] = 1;
                }
  
            else {
                checkingMap[element]++;
            }

            if (checkingMap[element] > maxCount){
                maxType = element;
                maxCount = checkingMap[element];
            }
        }
    }
    console.log(maxType);
}
const arr = ['time', 'tomato', 'time', 'tomato', 'time']

checkData(arr)

