import pool  from "../ config/database.js";

export const getAllProjects = async() => {
    const [rows] = await pool.query('SELECT * FROM projects');
    return rows;
}

export const getProjectById = async(id) => {
    const [rows] = await pool.query('SELECT * FROM projects WHERE id=?')
    return rows[0]
}

export const createProject = async (project) =>{

    const {name, description, start_date, end_date} = project;

    const [result] = await pool.quety(`INSERT INTO projects
        (name, description, start_date, end_date) VALUES (?,?,?,?)`,
        [name, description, start_date, end_date]
    );

    return {id: result.insertId, ...project};
};


export const updateProject = async (id, project) => {
    const {name, description, start_date, end_date} = project;
    
    const [result] = await pool.query(
        `UPDATE projects SET name=?,
         description=?, start_date=?, end_date=? WHERE id=?`,
        [name, description, start_date, end_date, id]
    );
}

export const deleteProject = async (id) => {
    const [result] = await pool.query('DELETE FROM projects WHERE id=?', [id]);

}

