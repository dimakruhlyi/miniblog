const models = require('./server').models;

// models.Profile.create({name: 'Dima'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.upsert({name: 'Gilierme'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.findOrCreate({name: 'Gilierme'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

// models.Profile.findOrCreate({name: 'Gilierme'}, (err, profile) => {
//   if (err) {
//     console.log('There was an error', err);
//   } else if (profile) {
//         // profile.updateAttributes({
//         //     email: 'dimakruhly@gmail.com',
//         // }, (updateError, updated) => {
//         //     console.log('Saved?', updateError, updated);
//         // })
//         // OR
//         profile.email = 'dima@kruhly.com';
//         profile.save((ue, updated) => {
//             console.log('Saved?', ue, updated);
//         })
//   }
// });






// const toSave = [
//     {name: 'Dima', email: 'dimakruhl@gmail.com'},
//     {name: 'Dima1', email: 'mail1@gmail.com'},
//     {name: 'Dima2', email: 'mail2@gmail.com'},
//     {name: 'Dima3', email: 'mail3@gmail.com'},
//     {name: 'Dima4', email: 'mail4@gmail.com'},
//     {name: 'Dima5', email: 'mail5@gmail.com'},
//     {name: 'Gambit', email: 'mail6@gmail.com'},
//     {name: 'Gambit2', email: 'mai7l@gmail.com'},
//     {name: 'Gambit3', email: 'mail8@gmail.com'},
//     {name: 'Gambit4', email: 'mail9@gmail.com'},
//     {name: 'Gambit5', email: 'mail65@gmail.com'},
//     {name: 'Serene', email: 'mail33@gmail.com'},
//     {name: 'Serene1', email: 'mail21@gmail.com'},
//     {name: 'Serene2', email: 'mail33@gmail.com'},
//     {name: 'Serene3', email: 'mail32@gmail.com'},
// ];

// toSave.map(obj => {
//     models.Profile.create(obj, (err, created) => {
//         console.log('Created?', created);
//     })
// })

// const filter = {
//     where: {
//         name: {like: 'Dima'},
//     },
//     order: 'date ASC',
//     limit: 10,
//     skip: 0,
//     fields: {
//         email: true
//     }
//     // include: {
//     //     relation: 'Posts',
//     //     scope: {
//     //         limit: 5,
//     //         order: 'date DESC',
//     //         include: {
//     //             relation: 'Image',
//     //             limit: 1,
//     //              where: {type: 'thumbnail'},
//     //         },
//     //     },
//     // },
// };


models.Profile.findById('5ff9b31c3d3a310efcfa1f71', (err, found) => {
    console.log('Found?', err, found);
    found.destroy();
})