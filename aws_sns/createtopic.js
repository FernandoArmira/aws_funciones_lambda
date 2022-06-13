var AWS = require('aws-sdk');
var sns = new AWS.SNS({region: 'us-east-1'});


exports.handler = function (req,ctx,callback){
    // TODO implement
  const newtopic = sns.createTopic({Name: req.topicname}).promise()

  newtopic.then(
    function(data) {
      console.log(data);
 
      callback(null,data)
      
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });

};