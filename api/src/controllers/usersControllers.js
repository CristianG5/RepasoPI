const {User, Post} = require("../db") 
const axios = require("axios")

// const createUserDB = async (name, email, phone) =>{
//     const newUser = await User.create({name, email, phone})

//     return newUser;
// };

//
const createUserDB = async(name, email, phone) => {
    return await User.create({name, email, phone});
};

//
const getUserById = async (id, source) => {
    
const user = source === "api" ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data:
await User.findByPk(id, {
    include:{
        model: Post,
        attributes: ["title", "body"],
    }
});
return user;
};

//
const infoCleaner = (arr) => 
    arr.map((user) => {
        return{
            name: user.name,
            email: user.email,
            phone: user.phone,
            created: false
        }
});

const getAllUsers =  async () => {
    const userDB = await User.findAll()

    // const infoApi = await axios.get(
    //     `https://jsonplaceholder.typicode.com/users/`
    // ).data;
    const infoApi = (await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
    )).data;



    const usersApi = infoCleaner(infoApi);

    return [...userDB, ...usersApi]

}

//
const getUsersByName = async(name) => {
    const infoApi = (await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
    )).data;

    const usersApi = infoCleaner(infoApi);

    const userFiltered = usersApi.filter(user => user.name === name)

    const UserDB = await User.findAll({where: {name: name}})

    return [...userFiltered, ...userDB]

}


module.exports = {
    createUserDB,
    getUserById, 
    getAllUsers, 
    getUsersByName
}
