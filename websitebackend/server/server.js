// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(process.env.PORT || 8080 ,function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

console.log(Object.keys(app.models));

app.models.user.find((err, result) => {
  if (result.length === 0) {
    const user = {
      email: 'dima@gmail.com',
      password: 'test',
      username: 'dima',
    };
    app.models.user.create(user, (err, result) => {
      console.log('Tried to create user', err, result);
    })
  }
});

app.models.user.afterRemote('create', (ctx, user, next) => {
  console.log('New user is: ', user);
  app.models.Profile.create({
    first_name: user.username,
    created_at: new Date(),
    userId: user.id,
  }, (error, result) => {
    if (!error && result) {
      console.log('Created new profile!', result);
    } else {
      console.log('There is an error!', error);
    }
    next();
  });
  next();
});

app.models.Role.find({where: {name: 'admin'}}, (err, role) => {
  if (!err && role) {
    console.log('No errors, role is ', role);
    if (role.length === 0) {
      app.models.Role.create({
        name: 'admin',  
      }, (err2, result) => {
        if (!err2 && result) {
          app.models.user.findOne((usererr, user) => {
            if (!usererr && user) {
              result.principals.create({
                principalType: app.models.RoleMapping.USER,
                principalId: user.id,
              }, (err3, principal) => {
                  console.log('Created principal', err3, principal);
              });
            }
          }); 
        }
      });
    }
  }
});

app.models.Role.find({where: {name: 'editor'}}, (err, roles) => {
  if (!err && roles){
    if (roles.length === 0) {
      app.models.Role.create({
        name: 'editor',
      }, (creationErr, result) => {
        console.log('Creation err or result?', creationErr, result);
      });
    }
  }
});

app.models.RoleMapping.find((err, rm) => {
  if(!err && rm.length === 0){
    app.models.user.findOne({where: {role: "admin"}}, (userErr, user) => {
      if(!userErr && user){
        app.models.Role.findOne({where: {name: 'admin'}}, (roleErr, result) => {
          if(!roleErr && result){
            result.principals.create({
              principalType: app.models.RoleMapping.USER,
              principalId: user.id,
            }, (err3, principal) => {
              console.log('Created principal', err3, principal);
            });
          }
        })
      }
    })
  }
})