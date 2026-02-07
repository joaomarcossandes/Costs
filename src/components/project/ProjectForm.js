import styles from './ProjectForm.module.css'
import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitButton from '../form/SubmitButton.js'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <div>
                <Input 
                    type="text"
                    name="name"
                    text="Nome do Projeto"
                    placeholder="Insira o nome do projeto" 
                />                
            </div>
            <div>
                 <Input 
                    type="number"
                    name="budget"
                    text="Orçamento do projeto"
                    placeholder="Insira o orçamento total" 
                />   
            </div>
            <div>
                <Select name="category_id" text="Selecione uma categoria" />
            </div>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm