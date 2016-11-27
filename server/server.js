const http = require('http');
const formidable = require('formidable');
const util = require('util');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-XSRF-TOKEN');
  // res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method.toLowerCase() === 'post') {
    processForm(req, res);
    return;
  }

  res.end();
});

const port = 3100;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//----------------------------------------------------

function processForm(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields) => {
    res.writeHead(200, {
      'content-type': 'text/plain'
    });

    // res.end(util.inspect({
    //   fields: fields
    // }));

    let data = JSON.stringify({
      data: fields
    });

    res.end(data);

    console.log(`posted fields\n`);
    console.log(data);
  });
}

