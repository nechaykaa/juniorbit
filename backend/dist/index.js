"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const projects_1 = __importDefault(require("./tables/projects"));
const employees_1 = __importDefault(require("./tables/employees"));
const feedbacks_1 = __importDefault(require("./tables/feedbacks"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
}));
// projects
app.get('/api/projects', (req, res) => {
    res.json(projects_1.default);
});
app.post('/api/projects', (req, res) => {
    projects_1.default.push(Object.assign({ id: projects_1.default.length }, req.body));
    res.json({
        id: projects_1.default.length - 1,
    });
});
app.get('/api/projects/:id', (req, res) => {
    const project = projects_1.default.find((i) => i.id == +req.params.id);
    if (project)
        res.json(project);
    else
        res.sendStatus(404);
});
// employees
app.get('/api/employees', (req, res) => {
    res.json(employees_1.default);
});
app.post('/api/employees', (req, res) => {
    employees_1.default.push(Object.assign({ id: employees_1.default.length }, req.body));
    res.json({
        id: employees_1.default.length - 1,
    });
});
app.get('/api/employees/:id', (req, res) => {
    const employee = employees_1.default.find((i) => i.id === +req.params.id);
    if (employee)
        res.json(employee);
    else
        res.sendStatus(404);
});
// feedbacks
app.get('/api/feedbacks', (req, res) => {
    res.json(feedbacks_1.default);
});
app.post('/api/feedbacks', (req, res) => {
    feedbacks_1.default.push({
        id: feedbacks_1.default.length,
        answers: Object.assign({}, req.body),
    });
    res.json({
        id: feedbacks_1.default.length - 1,
    });
});
app.get('/api/feedbacks/:id', (req, res) => {
    const feedback = feedbacks_1.default.find((i) => i.id === +req.params.id);
    if (feedback)
        res.json(feedback);
    else
        res.sendStatus(404);
});
app.listen(4000);
exports.default = app;
