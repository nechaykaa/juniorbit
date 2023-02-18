"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_1 = __importDefault(require("./tables/projects"));
const employees_1 = __importDefault(require("./tables/employees"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
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
app.listen(4000);
exports.default = app;
