import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.254.193:4000/' ?? 'http://10.0.2.2:4000/'
})

const getUser = (setUsers) => {
  api.get('/api/users')
    .then(res => {
      const tempDb = [];
      res.data.map(item => {
        tempDb.push(item);
      })

      setUsers(tempDb);
      console.log(tempDb);
    })
}

const addUser = (firstName, lastName) => {
  api.post('/api/users', {
    firstName,
    lastName,
    phoneNumber: 639564672161,
  })
    .then(res => {
      console.log(res);
    })
}

const deleteUser = (id) => {
  api.delete(`/api/users/${id}`)
    .then(res => {
      console.log(res);
    })
}

export { getUser, addUser, deleteUser } 