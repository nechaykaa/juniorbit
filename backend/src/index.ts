import express from 'express';

import PROJECTS_TABLE from './tables/projects';

const app = express();

app.use(express.json());

// projects

app.get('/api/projects', (req, res) => {
	res.json(PROJECTS_TABLE);
});

app.post('/api/projects', (req, res) => {
	PROJECTS_TABLE.push({
		id: PROJECTS_TABLE.length,
		...req.body,
	});

	res.json({
		id: PROJECTS_TABLE.length - 1,
	});
});

app.get('/api/projects/:id', (req, res) => {
	const project = PROJECTS_TABLE.find((i) => i.id == +req.params.id);

	if(project)
		res.json(project);
	else
		res.sendStatus(404);
});

app.listen(4000);

export default app;
