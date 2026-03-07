import { Link } from "react-router-dom";

function NoteCard({id, title, content }) {
  return (
    <>
      <div className="bg-gray-900 rounded-lg shadow-md p-4 w-50">
        <h2 className="text-gray-400 text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{content}</p>
        <div className="mt-4 flex justify-end">
          <Link to={`/edit/${id}`} className="text-blue-500 cursor-pointer mr-2">
            <i className="fas fa-edit"></i>
          </Link>
            <i className="fas fa-trash text-red-500 cursor-pointer"></i>
        
        </div>
      </div>
    </>
  );
}

export default NoteCard;
