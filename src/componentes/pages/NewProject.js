import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm';
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {

        //incialize cost and services
        project.cost= 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'content-Type': "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
               .then((data) => {
                   console.log(data)
                   history('/projects', {message: 'Projeto criado com sucess!'})
               })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
        <div className={styles.newproject_box}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
        </div>
    )
   }
   
   export default NewProject