

class Photos {

  createBucket(req, res) {
    const storage = new Storage();
    const bucket = storage.bucket("albums");
    bucket.create(function(err, bucket, apiResponse) {
      if (!err) {
        // The bucket was created successfully.
      }
    });
  };
  uploadPhoto(req, res) {
    const storage = new Storage();
  }
}

module.exports = Photos;


