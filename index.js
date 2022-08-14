// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter(arrayItem => arrayItem.toLowerCase() === driverName.toLowerCase())
}
   
function fuzzyMatch(drivers, driverName) {
    return drivers.filter(arrayItem => arrayItem.slice(0, 2) === driverName.slice(0, 2) )
}
   
function matchName(drivers, driverName){
    return drivers.filter(obj => obj.name === driverName)
}
   
//     return driversArray.filter((obj) => {
//         let nameNoCase = obj.name.toLowerCase();
//         let driverNoCase = driverName.toLowerCase();
//         return nameNoCase === driverNoCase
//     });
// };
