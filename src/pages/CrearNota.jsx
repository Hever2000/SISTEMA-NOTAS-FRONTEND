import axios from "axios";
import { toast } from "react-toastify";
import NoteForm from "../components/NoteForm";
import { useNavigate } from "react-router-dom";

function CrearNota() {
  const navigate = useNavigate();

  const handleCreate = async (note) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/api/notes`, note)
        .then((res) => {
          if (res.status !== 201) {
            throw new Error("Error al crear una nota");
          }
          toast.success("Nota creada con exito!");
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Nueva Nota</h1>
      <NoteForm
        onSubmit={handleCreate}
        initialDate={{ title: "", content: "" }}
      />
    </div>
  );
}

export default CrearNota;
