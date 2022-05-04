// const { status } = require("express/lib/response");
// const { required } = require("nodemon/lib/config");

const filter = async (parsedRecords, filterFuncation, requiredFields = [], single = false) =>{
    if (single){
        const {status} = await filterFuncation (parsedRecords);
        if (status){
            return { parsedRecords , status: true};
        }
        else{
            const {errormassage} = parsedRecords;
            const fields = Object.keys(errormassage);
            const validation = requiredFields.filter(fields => fields.includes(fields));
            

            if (validation.length==0){
                fields.forEach(fields =>{
                    parsedRecords[fields]=null;
                })
                return { parsedRecords , status:true}
            }else{
                return { parsedRecords , status : false}
            }
        }
    }else{
        let filteredCleaned = []
        let filteredErrored = []
        await Promise.all(
            parsedRecords.map(async (parsedRecords) =>{
                const { status} = await filterFuncation (parsedRecords);

                if (status){
                    filteredCleaned.push(parsedRecords)
                }
                else{
                    const {errormassage} = parsedRecords;
                    const fields = Object.keys(errormassage);
                    const validation = requiredFields.filter(fields => fields.includes(fields));

                    filteredErrored.push(parsedRecords)
                    
        
                    if (validation.length==0){
                        fields.forEach(fields =>{
                            parsedRecords[fields]=null;
                        })
                        filteredCleaned.push(parsedRecords);
                    }
                }
            } )  
        );
        return { filteredCleaned , filteredErrored}

    }
};

module.exports = filter