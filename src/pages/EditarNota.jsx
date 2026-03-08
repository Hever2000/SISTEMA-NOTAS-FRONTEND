import NoteForm from "../components/NoteForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;

  const [initialDate, setInitialDate] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/notes/${id}`);
        const noteData = response.data?.note ?? response.data;

        setInitialDate({
          title: noteData?.title ?? "",
          content: noteData?.content ?? "",
        });
      } catch (error) {
        console.log(error);
        toast.error("No se pudo cargar la nota");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, apiURL]);


  const handleEdit = async (note) => {
    try {
      await axios.put(`${apiURL}/api/notes/${id}`, note);
      toast.success("Nota editada con exito!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("No se pudo editar la nota");
    }
  };

  if (loading) {
    return <span>Cargando nota...</span>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Nota</h1>
      <NoteForm onSubmit={handleEdit} initialDate={initialDate} />
    </div>
  );
}

export default EditarNota;
