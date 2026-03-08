import NoteCard from "../components/NoteCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/notes`);
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que quieres eliminar la nota?");
    if (!confirm) return;

    try {
      await axios.delete(`${apiURL}/api/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.dismiss("Nota eliminada con exito!");
    } catch (error) {
      console.log(error);
      toast.error("No se pudo eliminar la nota");
    }
  };

  if (loading) <span>Cargando...</span>;

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido a tu sistema de notas
        </h1>
        <p className="text-lg text-gray-300">
          Organiza tus notas de manera eficiente
        </p>
        <div className="mt-6 w-full flex flex-wrap justify-center gap-5">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              content={note.content}
              id={note._id}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
