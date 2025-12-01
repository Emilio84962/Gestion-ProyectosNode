import * as Project from '../models/projects.model.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.getAllProjects();
        res.status(200).json({
            message: 'Projects retrieved successfully',
            data: projects
        });

    } catch (error) {
        
        res.status(500).json({message: 'Project Not Found'});
    }
}

export const getSingleProject = async (req, res) => {
    try {
        
        const project = await Project.getProjectById(req.params.id);
        if(!project) return res.status(404).json({message: 'Project not found'});

        res.status(200).json({
            message: 'Project retrieved sucessfully',
            data: project
        })


    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }

}


export const addProject = async(req, res) => {
    try {
        
        const newProject = await Project.createProject(req.body);
        res.status(201).json({
            message: 'Project created successfully',
            data: newProject
        });
    } catch (error) {
        
        res.status(500).json({message: 'Project Not Created'});
    }
}


export const editProject = async (req, res) => {
    try {
        
        const project = await Project.updateProject(req.params.id, req.body);

        res.status(200).json({
            message: 'Project updated successfully',
            data: project
        })

    } catch (error) {
        res.status(500).json({message: 'Error updating project'});
    }

}


export const removeProject = async (req, res) => {
    try {
        await Project.deleteProject(req.params.id);
        res.status(200).json({
            message: 'Project deleted successfully'
        });

    } catch (error) {
        res.status(500).json({message: 'Error deleting project'});
    }
}