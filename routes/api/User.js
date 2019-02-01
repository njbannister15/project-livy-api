// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");
// Your Google Cloud Platform project ID
const projectId = process.env.PROJECT_ID;
const storage_bucket = process.env.STORAGE_BUCKET;

class User {
  createUser(req, res) {
    console.log(req.params.userId);
    const storage = new Storage();
    const bucket = storage.bucket(storage_bucket);
    const file = bucket.file(`${req.params.userId}/`);
    file.save(null, function(err) {
      if (err) {
        res.status(500).json({
          error: err.message
        });
      } else {
        res.sendStatus(201);
      }
    });
    
  }
}
module.exports = User;
