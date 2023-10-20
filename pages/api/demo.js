// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/libs/db";
export default function handler(req, res) {
  if (req.method === 'POST') {
    const tabledata = {
      demo_name: req.body.demo_name,
      demo_shortText: req.body.demo_shortText,
    };

    db.query("INSERT INTO demo SET ?", tabledata, (error, result) => {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "Error inserting data into database" });
      } else {
        res.status(200).send(result);
      }
    });
  } else if (req.method === 'GET') {
    db.query('SELECT * FROM demo', (error, results) => {
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
      'DELETE FROM demo WHERE demo_id = ?',
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
  } else if (req.method === 'PUT') {
    // const { demo_id, demo_name,demo_shortText } = req.body;

    // db.query(
    //   'UPDATE demo SET demo_name = ? WHERE demo_id = ?',
    //   [demo_shortText,demo_name, demo_id],
    //   (error, results) => {
    //     if (error) {
    //       console.error('Update error:', error);
    //       res.status(500).json({ error: 'An error occurred' });
    //     } else {
    //       res.status(200).json({ message: 'Data updated successfully' });
    //     }
    //   }
    // );
    const tabledata = {
      demo_name: req.body.demo_name,
      demo_shortText: req.body.demo_shortText,
    };
    db.query(
      "UPDATE demo SET ? WHERE demo_id=" + req.body.demo_id,
      tabledata,
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send(result);
        }
      }
    );
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
