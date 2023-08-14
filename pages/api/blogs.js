import * as fs from 'fs';

export default function handler(req, res) {
  fs.readdirSync(`blogdata`, (err, data) => {
    console.log(data)
  })
}
