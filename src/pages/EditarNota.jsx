import NoteForm from "../components/NoteForm";
import axios from "axios";

function EditarNota() {

  const handleEdit = async (note) => {
    try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/notes/:id`)
      
    } catch(error){
      console.log(error);
    }
  }


  return(
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Nota</h1>
      <NoteForm onSubmit={handleEdit} initialDate={{title:"", content:""}}/>
    </div>
  )
}

export default EditarNota;
