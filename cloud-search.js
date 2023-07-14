// import entire SDK
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

AWS.config.update({accessKeyId: dotenv.config().parsed.accessKeyId, secretAccessKey: dotenv.config().parsed.secretAccessKey});
AWS.config.update({region: 'us-east-1'});
var csd = new AWS.CloudSearchDomain({endpoint: 'search-quydo2-igvfxicznsytrw7adjcnugdjxy.us-east-1.cloudsearch.amazonaws.com'});

const run = async () => {
  
  var params = {
    query: 'place', /* required */
  };
  
  csd.search(params, function (err, data) {
      if (err){ console.log(err, err.stack); // an error occurred
      }else{console.log(data.hits.hit);           // successful response
  }});
};

run();
