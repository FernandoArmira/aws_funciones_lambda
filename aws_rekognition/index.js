var AWS = require('aws-sdk');
var sns = new AWS.SNS({region: 'us-east-1'});


exports.handler = function (req,ctx,callback){
    // TODO implement
  let now = new Date().toString();
  let email = `${req.message} \n \n Este mensaje fue enviado: ${now}`;
    
  let params = {
    Message: email,
    Subject: req.subject,
    TopicArn: req.topicarn,
  };

  sns.publish(params, function(err, data) {
      if (err) console.log(err, err.stack); 
      else console.log(data);

      callback(null,{mensaje: "email enviado"});

  });

};