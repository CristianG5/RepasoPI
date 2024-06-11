const { createUserDB, getUserById, getAllUsers, getUsersByName} = require("../controllers/usersControllers");

//
const getUsersHandler = async (req, res) => {
    const {name} = req.query;
    
    try {
        if(name){
            const userByName = await getUserByName(name)
            res.status(200).json(userByName)
        }else{
            const response = await getAllUsers()
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//
const getDetailHandler = async (req, res) => {
    const {id} = req.params;
    
    const source = isNaN(id) ? "bdd" : "api";

    try {
        const response = await getUserById(id,source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//
const createUsersHandler = async (req, res) =>{
    const {name, email, phone} = req.body;

try {
    const responde = await createUserDB(name, email, phone)
    res.status(200).json(responde)
} catch (error) {
    res.status(400).json({error:error.message})
}
    //res.status(200).send(`Usuario ${name} creado con el email ${email}`)
}

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUsersHandler,
    getAllUsers,
    getUsersByName

}