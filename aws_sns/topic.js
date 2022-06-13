var AWS = require('aws-sdk');
var sns = new AWS.SNS({region: 'us-east-1'});


exports.handler = function (req,ctx,callback){
    // TODO implement
    var listTopicsPromise = sns.listTopics({}).promise();

  listTopicsPromise.then(
  function(data) {
    console.log(data.Topics);

    //res.send(data.Topics)
    callback(null,data.Topics);  

    /*for(var i=0;i < data.Topics.length;i++){
      console.log(data.Topics[i].TopicArn)
    }*/
    
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });

};