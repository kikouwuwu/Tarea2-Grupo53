import prisma from '../prismaClient.js'

const getUsers = async (req , res) => {
    const users = await prisma.user.findMany()
    res.json(users)
}


const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(user)
}


const createUser = async (req, res) => {
    const { name, email, lastame } = req.body
    const user = await prisma.user.create({
        data: {
            name,
            email,
            lastame
        }
    })
    res.json(user)
}

const usersPosts = async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            posts: true
        }
    })
    res.json(user)
}

            
const UsersController = {
    getUsers,
    getUserById,
    createUser, 
    usersPosts
}

export default UsersController