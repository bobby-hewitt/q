var express = require('express');
var router = express.Router();
const aws = require('aws-sdk');
const S3BUCKET = 'q-ventures'

router.get('/signImageUpload', function (req, res) {
	let randomString = Math.round(Math.random() * (Math.random() * 10000000000000))

	const s3 = new aws.S3();
	const fileName = req.query['file-name'];
	const fileType = req.query['file-type'];
	const s3Params = {
		Bucket: S3BUCKET,
		Key: 'avatar/' + randomString,
		Expires: 60,
		ContentType: fileType,
		ACL: 'public-read'
	};

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3BUCKET}.s3.amazonaws.com/avatar/${randomString}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

module.exports = router