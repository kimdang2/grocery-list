const db = require('../database');

const getAll = (callback) => {
  db.query('SELECT * FROM groceryTable', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const getGroceries = (search,callback) => {
  db.query(`SELECT * FROM groceryTable WHERE item LIKE "%${search}%"`, (err, data) => {
    //if unable to find search item in database, do this
    if (err) {
      // send err message back to controller, by using a callback
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

const addGroceries = (params, callback) => {

  const q = `INSERT INTO groceryTable (item,quantity) VALUES (?,?)`
  db.query(q, params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

const deleteGroceries = (item, callback) => {
  db.query(`delete from groceryTable WHERE item = ?`, [item], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

const updateGroceries = (item, quantity, id, callback) => {
  // checking database
  if (quantity !== null) { // in db, if quantity has a value, just changed the item and id
    const q = `UPDATE groceryTable set item="${item}" WHERE id = ${id}`
    db.query(q, callback);
  }  else {
    const q = 'UPDATE groceryTable set item=?, quantity= ?  WHERE id = ?'
    db.query(q, params, callback);
  }

}

module.exports = {
  getAll, getGroceries, addGroceries, deleteGroceries, updateGroceries
}