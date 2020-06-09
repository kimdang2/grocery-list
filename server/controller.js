const Model = require('./model.js')
// Controller will handle the request to get all groceries
// controller interacts with the client, by sending the response

const getAll = (req,res) => {
  Model.getAll((err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      console.log('getAll works');
      res.status(400).send(data);
    }
  })
}

const getGroceries = (req, res) => {
  // interact with the model
  //ES5 const search = req.query.search

  const search = req.query.search || '';
  Model.getGroceries(search, (err, data) => {
    // if model gives us back an error (what model passes in through callback)
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

const addGroceries = (req, res) => {
  var {item, quantity} = req.body;
  Model.addGroceries([item, quantity], (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log('POST REQUEST was successful');
      res.status(201).send('Successful POST request');
    }
  });
}

const deleteGroceries = (req, res) => {
  Model.deleteGroceries(req.body.item, (err, data) => {
    if (err) {
      res.status(404).send('Error deleting grocery');
    } else {
      res.status(200).send('DELETE request was successful');
    }
  })
};

const updateGroceries = (req, res) => {
  var {item, quantity, id} = req.body;
  Model.updateGroceries(item, quantity, id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send('PUT request was successful');
    }
  })
}

module.exports = {
  getAll,
  getGroceries,
  addGroceries,
  deleteGroceries,
  updateGroceries
}