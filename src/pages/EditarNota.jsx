import NoteForm from "../components/NoteForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditarNota() {

  const { id } = useParams();
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;

  const [initialDate, setInitialDate] = useState({title:"", content:""});

  useEffect(() => {
    const fetchNote = async () => {
      try{
        const response = await axios.get(`${apiURL}/api/notes/${id}`);
        setInitialDate({
          title: response.data.title,
          content: response.data.content
        });
      }catch(error){
        console.log(error)
      }
    }
    fetchNote()
  }, [id, apiURL])


  const handleEdit = async (note) => {
    try{
      await axios.put(`${apiURL}/api/notes/${id}`,note)
      navigate("/")
      toast.update("Nota editada con exito!")

    } catch(error){
      console.log(error);
    }
  }


  return(
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Nota</h1>
      <NoteForm onSubmit={handleEdit} initialDate={initialDate} />
    </div>
  )
}

export default EditarNota;
