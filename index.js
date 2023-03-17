import express from 'express';

const app = express();
const port = 4500;

app.get('/', (req, res) => {
	res.send('this is the simplest node/express api');
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});