const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const formData = new FormData();
formData.append(
  "file",
  fs.createReadStream("uploads/")
);

const options = {
  headers: {
    "x-api-key": "sec_7Arx8c4proYMYMJgccKJVJ0ogG3dzqKN",
    ...formData.getHeaders(),
  },
};

axios
  .post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
  .then((response) => {
    console.log("Source ID:", response.data.sourceId);
  })
  .catch((error) => {
    console.log("Error:", error.message);
    console.log("Response:", error.response.data);
  });
