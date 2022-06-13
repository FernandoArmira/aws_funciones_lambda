var AWS = require('aws-sdk');
var sns = new AWS.SNS({region: 'us-east-1'});


exports.handler = function (req,ctx,callback){
    // TODO implement
  let params = {
    Protocol: 'EMAIL', 
    TopicArn: req.topicarn,
    Endpoint: req.email
  };

  sns.subscribe(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

        callback(null,data);
    }
});

};