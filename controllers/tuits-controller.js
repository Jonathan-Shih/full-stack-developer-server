import tuitsDao from "../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.profileImage = "../../tuiter/assets/rat-jam.gif";
  newTuit.postedBy = {};
  newTuit.postedBy.userName = "Jon";
  newTuit.stats = {};
  newTuit.stats.likes = 0;
  newTuit.stats.comments = 0;
  newTuit.stats.retuits = 0;
  newTuit.handle = "JonShih";
  newTuit.time = "now";
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);

  res.send(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(status);
};

const tuitController = (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};

export default tuitController;
