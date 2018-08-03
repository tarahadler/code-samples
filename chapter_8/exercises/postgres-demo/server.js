const express = require('express'), 
      app = express();

      app.use(express.urlencoded({ extended: false}));
      app.use(express.json());

// require and configure knex first
const knex = require('knex')({
    client: 'postgres',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'postgres',
      database : 'spring2018',
      charset  : 'utf8'
    }
  });

// then connect bookshelf with knex
const bookshelf = require('bookshelf')(knex);

//create model
//    This model is capitalized bc we use it like a constructor. 
//    This 'Author' model will be our interface to the authors' table
//    frm this moment forward
const Author = bookshelf.Model.extend({
    tableName: 'authors',

    books: function(){
        return this.hasMany(Book)
    }
});

const Book = bookshelf.Model.extend({
    tableName: 'books',
    author: function(){
        return this.belongTo(Author);
    }
});


  app.post('/authors', (req, res) => {
      //whatever we put here, that's what will happen to post request to /authors
      //1. take data for new authro from req.body
      let newAuthor = req.body;
      //2. feed that new author data into our db creation code 

      
        let newNerd = new Author ({
            name: newAuthor.name 
            });

        newNerd.save()
                .then(savedAuthor => {
                    console.log(savedAuthor);
                    res.json(savedAuthor.attributes);
                })
                .catch(error => {
                    console.log(error);
                });


        })

  // to create a new row in our table
  //    1. call mdoel like a constructor to get one instance
  //    and pass the model all the data for your new row
//   let ferranti = new Author ({
//       name: 'Bill Bryson'
//   });

//   ferranti.save()
//         .then(savedAuthor => {
//               console.log(savedAuthor);
//         })
//         .catch(error => {
//                console.log(error);
//         });

//READING BACK A ROW
// take a capital Model, call .where() and provide
// an object that specifies the criteria for what you 
// want to get back
// Author.where({
//     id: 1
//     })
//     .fetch()
//     .then(result => {
//         console.log(result.attributes); 
//     })
//     .catch(error => {
//         console.log(error);
//     })


//create an expres GET route for path '/authors
app.get('/authors', (req, res) => {
    //whatever we put here, that's what will happen on request
    Author.where({})
    .fetchAll()
    .then(results => {
        console.log(results);
        res.json(results);
    })
    .catch(error => {
        console.log(error);
    });

})




//     //THIS CODE HERE SHOWS HOW TO GRAB MANY ROW
//     Author.where({})
//     .fetchAll()
//     .then(results => {
//         console.log(results);
//     })
//     .catch(error => {
//         console.log(error);
//     });

    //HERE'S HOW TO UPDATE A ROW BY ID
    // let updatedAuthor = {
    //     name: "Rohinton Mistry"
    // }

    // new Author({id: 2})
    //     .save(updatedAuthor)
    //     .then(result => {
    //         console.log(result.attributes);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    //HERE'S HOW TO DELETE A ROW BY ID
    new Author({id: 3})
        .destroy()
        .then(results => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })

app.listen(8090, () => {
    console.log("Server running on 8090.");
})
    
  
  