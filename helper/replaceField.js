const replaceField = (records, targetField , replacement) =>{
    const allRecords = records.map((records,index) =>{
        records[index][replacement] = records[targetField];
        delete records[index][targetField];
        return records[index]
    })
    return allRecords
}
module.exports = replaceField