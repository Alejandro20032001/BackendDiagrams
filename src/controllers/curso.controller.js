import Curso from '../models/curso.schema'
export const createCourse = async (req, res) => {
    try {
        const newCourse = new Corso(req.body);
        const cursoCreated = await newCourse.save();
        res.status(200).json(cursoCreated);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
}

export const getCourseById = async (req, res) => {
    const cursoFounded = await Curso.findById(req.params.courseId);
    res.status(200).json(cursoFounded)
}

export const getAllCourses = async (req, res) => {
    const cursos = await Curso.find();
    res.status(200).json(cursos)
}