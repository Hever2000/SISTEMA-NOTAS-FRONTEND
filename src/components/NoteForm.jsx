import { useEffect, useState } from "react";


const NoteForm = ({ onSubmit, initialDate }) => {
  const [note, setNote] = useState(initialDate);

  useEffect(() => {
    setNote(initialDate);
  }, [initialDate]);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form className="bg-gray-900 rounded-lg shadow-md p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="title">
          Titulo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
          id="title"
          name="title"
          type="text"
          placeholder="Titulo de la nota"
          value={note.title}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="content">
          Contenido
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
          id="content"
          name="content"
          placeholder="Contenido de la nota"
          rows="5"
          value={note.content}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Guardar Nota
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
