import express from 'express';
import cors from 'cors';

import PROJECTS_TABLE from './tables/projects';
import EMPLOYEES_TABLE, { IEmployee } from './tables/employees';
import FEEDBACK_TABLE from './tables/feedbacks';

const app = express();

app.use(express.json());
app.use(cors({
	origin: '*',
}))

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

// employees

app.get('/api/employees', (req, res) => {
	res.json(EMPLOYEES_TABLE);
});

app.post('/api/employees', (req, res) => {
	EMPLOYEES_TABLE.push({
		id: EMPLOYEES_TABLE.length,
		project: PROJECTS_TABLE.find((i, num) => i.id === +req.body.projectId),
		registrationDate: JSON.stringify((new Date(Date.now()).toString())),
		...req.body,
	})

	res.json({
		id: EMPLOYEES_TABLE.length - 1,
	});
});

app.get('/api/employees/:id', (req, res) => {
	const employee = EMPLOYEES_TABLE.find((i) => i.id === +req.params.id);

	if(employee)
		res.json(employee);
	else
		res.sendStatus(404);
});

// feedbacks

app.get('/api/feedbacks', (req, res) => {
	res.json(FEEDBACK_TABLE);
});

app.post('/api/feedbacks', (req, res) => {
	FEEDBACK_TABLE.push({
		id: FEEDBACK_TABLE.length,
		user: EMPLOYEES_TABLE.find((i) => i.id === +(req.query as any).userId) as IEmployee,
		answers: {
			...req.body,
		},
	});

	res.json({
		id: FEEDBACK_TABLE.length - 1,
	});
});

app.get('/api/feedbacks/:id', (req, res) => {
	const feedback = FEEDBACK_TABLE.find((i) => i.id === +req.params.id);

	if(feedback)
		res.json(feedback);
	else
		res.sendStatus(404);
});

// other

app.get('/api/me', (req, res) => {
	const me = EMPLOYEES_TABLE.find((i, num) => i.id === +(req.query as any).userId);

	if(me)
		res.json(me);
	else
		res.sendStatus(400);
});

app.listen(4000);

export default app;
