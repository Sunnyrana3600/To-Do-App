export function convertDate(date){
    //Take the date and convert into the actual date use dayjs libaray 
    const dayjs = require('dayjs');
    return dayjs(date).format('MMM/D/YY');
}