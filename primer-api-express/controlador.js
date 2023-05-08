const {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
    getInfo
} = require('./module')

function handleGetAllData (req,res){
    const records = getAllData()

        return res.json(records);
};

function handleGetDataById (req,res){
    const { id } = req.params
    const record = getDataById(id)

        if (Object.keys(record).length === 0){
            return res.status(404).json({
                message : 'Not Found :(',
            })
        };
    
    return res.json(record);
};

function handleCreateData (req, res){
    const data = req.body;
    const record = createData(data);

        return res.json(record);
};

function handleUpdateData (req, res){
    const { id } = req.params;
    const data =req.body;

    const record = updateData(id, data);

        if (Object.keys(record).length ===0){
            return res.status(404).json({
                message: 'Not Found :(',
            });
        };

    return res.json(record);
};

function handleDeleteData(req, res){
    const {id} = req.params;
        deleteData(id);

            return res.json ({
                message: 'Record deleted :)'
            });
};

function handleGetInfo(req, res){
    const records =getInfo()
        return res,json(records)
};

module.exports = {
    handleGetAllData,
    handleGetDataById,
    handleCreateData,
    handleUpdateData,
    handleDeleteData,
    handleGetInfo
};
