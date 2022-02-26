import users from './users.js';

const UserController = (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);
  app.post('/api/users', createUser);
}

const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = (new Date()).getTime() + '';
  users.push(newUser);
  res.json(newUser);
}

const findUserById = (req, res) => {
  const userId = req.params.uid;
  console.log(userId)
  const user = users.find(u => u._id === userId);
  res.json(user);
}

const findAllUsers = (req, res) => {
  const type = req.query.type;
  if(type) {
    res.json(findUserByType(type));
    return;
  }
  res.json(users);
}

const findUserByType = (type) =>
  users.filter(u => u.type === type);

export default UserController;