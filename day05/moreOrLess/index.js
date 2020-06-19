/*
var prompt = require('prompt');

prompt.start();  // start the prompt

prompt.get(['username', 'email'], function (err, result) {  // get 2 properties username and email
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Username: ' + result.username);  // log results
  console.log('  Email: ' + result.email);
});

function onErr(err) {
  console.log(err);
  return 1;
}
//--> Output: prompt: username:  (node:17312) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency (Use `node --trace-warnings ...` to show where the warning was created)
//--> same issu with same code from NPMJS.COM
*/
//---------------------------------------------------------------------
/*
var prompt = require('prompt');
prompt.start();

prompt.get['email'], function (input) {
    console.log('Le nombre saisi est : ' + input);
}
*/
//---------------------------------------------------------------------
var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

  var prompt = require('prompt');
  //
  // Start the prompt
  //
  prompt.start();
 
  //
  // Get two properties from the user: email, password
  //
  prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
  });
