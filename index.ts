import express from 'express'
const app = express();
const port = process.env.PORT || 3000;
import db from  './models'
import {users} from './seeders/users'
import {projects} from './seeders/projects'
import { projectassignments } from './seeders/projectassignments';

// const createProjectAssignments = () => {
//     projectassignments.map(projectassignment => {
//         db.ProjectAssignment.create(projectassignment)
//     })
// }
// createProjectAssignments();

// db.ProjectAssignment.create({
//     ProjectId:1,
//     UserId:'0d137b6c-fb3b-40ea-9254-aca0ca6a7149'
// })

app.get('/', (req, res) => {
    db.User.findAll({
        include: {
            model: db.Project
        }
    }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})