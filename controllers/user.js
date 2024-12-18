// Load environment variables
const env = require('dotenv').config();
const db = require('../db');
const multer=require('multer');

// Check route handler
const check = (req, res) => {
    const query = 'SELECT * FROM nsure_user';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.status(200).json(results);
    });
};
exports.check = check;

// User route handler
const user = (req, res) => {
    console.log(req.body);
    const query = `insert into nsure_user(name,mobile,age,gender,date,category) 
    values('${req.body.name}','${req.body.mobile}','${req.body.age}','${req.body.gender}','${req.body.date}','${req.body.assesmentdata}')`;
    console.log(query);
    db.query(query,(err,results)=>{
        if (err) {
            throw err;
        }
        res.status(200).json(results);
    })
    res.status(200).json(req.body); // Sends the received JSON data back in the response
};
exports.user = user;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // where the PDFs will be saved
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // filename with timestamp
    }
  });
  
  const upload = multer({ storage: storage });
  
  // Route to handle file upload and database saving
const uploadss =(req, res) => {
    const file = req.file;  // The uploaded file
  
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
  
    // Save the file path or filename in the database
    const filePath = file.path;  // Path to the uploaded PDF
    const sql = 'INSERT INTO pdf_files (file_name, file_path) VALUES (?, ?)';
    db.query(sql, [file.filename, filePath], (err, result) => {
      if (err) {
        console.error('Error saving to database:', err);
        return res.status(500).send('Error saving to database');
      }
      res.status(200).send('PDF uploaded and saved in the database!');
    });
  };

  exports.uploadss = uploadss;




const uploads = (req, res) => {
    console.log(req);
  
};
exports.uploads = uploads;


// const userscore = (req, res) => {
//   console.log(req.body);
  
// };
// exports.userscore = userscore;