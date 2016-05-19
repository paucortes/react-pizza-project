var data = {};

function getData(key) {
  return data[key];
}

function setData(key, value) {
  data[key] = value;
}

module.exports = {
  setData: setData,
  getData: getData
};