
const dataCheck = require('./medicineData')

const patients = [
    {
      name: 'Charlie',
      age: '42',
      allowedMedicine: ['type-a', 'type-b', 'type-c'],
    },
    {
      name: 'Veronica',
      age: '33',
      allowedMedicine: ['type-a', 'type-c'],
    },
    {
      name: 'Spencer',
      age: '57',
      allowedMedicine: ['type-e'],
    },
    {
      name: 'Wolfram',
      age: '74',
      allowedMedicine: ['type-d', 'type-a'],
    },
    {
      name: 'Jennifer',
      age: '22',
      allowedMedicine: ['type-a', 'type-c'],
    },
  ] 
  let newArray = []
  let finalMedicineList = [] 
//search through each array within each object
function arrangeData(){
    for (let i = 0; i < patients.length; i++) {
        newArray.push(patients[i].allowedMedicine)
        // for (let y = 0; y < newArray.length; y++) {
        // }
    } 
    //  const mergedArray = newArray.flat(10);
     console.log(newArray)
  //  finalMedicineList.push(mergedArray) 

//  const array = finalMedicineList

    dataCheck.checkData(newArray)
    
    } 
   
   
  


arrangeData()