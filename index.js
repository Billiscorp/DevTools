const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const glob = require('glob-promise');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'views/html')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {

    glob('**/views/html/**/*.html').then((results) => {
    
    console.log(results);
    res.render('pages/index', {data: results})

    });

  }) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
