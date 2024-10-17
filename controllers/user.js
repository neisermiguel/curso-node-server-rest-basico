const { response, request } = require("express");
const userGet = (req = request, res = response) => {
    const {q,nombre = 'No have name',apikey} = req.query;
  res.json({
    msg: "Get API",
    q,
    nombre,
    apikey
  });
};

const userPost = (req, res = response) => {
    const {nombre, id} = req.body
  res.json({
    msg: "Post API",
    nombre, 
    id
  });
};

const userPut = (req, res = response) => {
    const id = req.params.id
  res.json({
    msg: "Put API",
    id
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "Delete API",
  });
};

const userPatch = (req, res = response) => {
  res.json({
    msg: "Patch API",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
  userPatch,
};
