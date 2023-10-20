// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/libs/db";
const multer = require('multer');
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join(process.cwd(), 'public', 'uploads'); // Create an absolute path to the 'uploads' directory
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});



const uploader = multer({ storage: storage }).single("demoImg");
export default function handler(req, res) {
    if (req.method === 'POST') {
        uploader(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Error uploading file" });
            }
            const tabledata = {
                demo_func_name: req.body.demo_func_name,
                demo_func_shortText: req.body.demo_func_shortText,
                demo_id: req.body.demo_id,
                demo_func_keywords: req.body.demo_func_keywords,
                demo_func_metaDesc: req.body.demo_func_metaDesc,
                demo_func_img: req.file?.filename,
            };

            db.query("INSERT INTO demofunctionality SET ?", tabledata, (error, result) => {
                if (error) {
                    console.log(error);
                    res
                        .status(500)
                        .json({ message: "Error inserting data into database" });
                } else {
                    res.status(200).send(result);
                }
            });
        })
    } else if (req.method === 'GET') {
        db.query('SELECT * FROM demofunctionality', (error, results) => {
          if (error) {
            console.error('Database error:', error);
            res.status(500).json({ error: 'An error occurred' });
          } else {
            res.status(200).json(results);
          }
        });
      } else if (req.method === 'DELETE') {
        const { id } = req.query;
        db.query(
          'DELETE FROM demofunctionality WHERE demo_func_id = ?',
          [id],
          (error, results) => {
            if (error) {
              console.error('Delete error:', error);
              res.status(500).json({ error: 'An error occurred' });
            } else {
              res.status(200).json({ message: 'Data deleted successfully' });
            }
          }
        );
      }
    //    else if (req.method === 'PUT') {
    //     const { demo_id, demo_name } = req.body;

    //     db.query(
    //       'UPDATE demo SET demo_name = ? WHERE demo_id = ?',
    //       [demo_name, demo_id],
    //       (error, results) => {
    //         if (error) {
    //           console.error('Update error:', error);
    //           res.status(500).json({ error: 'An error occurred' });
    //         } else {
    //           res.status(200).json({ message: 'Data updated successfully' });
    //         }
    //       }
    //     );
    //   } else {
    //     res.status(405).json({ error: 'Method not allowed' });
    //   }
}
