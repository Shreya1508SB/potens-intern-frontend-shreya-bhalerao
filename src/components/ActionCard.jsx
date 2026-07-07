import { useLanguage } from "../context/LanguageContext";

function ActionCard({ action }) {

  const { text } = useLanguage();

  return (

    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex justify-between items-center">

      <div>

        <h3 className="text-lg font-bold">
          {action.title}
        </h3>

        <p className="text-gray-500 text-sm">
          {action.context}
        </p>

        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-white text-xs ${
            action.priority === "High"
              ? "bg-red-500"
              : action.priority === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {action.priority}
        </span>

      </div>

      <div className="space-x-2">

        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
          {text.approve}
        </button>

        <button className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition">
          {text.hold}
        </button>

      </div>

    </div>

  );
}

export default ActionCard;