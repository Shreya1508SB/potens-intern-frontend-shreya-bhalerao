import anomalies from "../data/anomalies.json";
import { FaExclamationTriangle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function AnomalyPanel() {

  const { text } = useLanguage();

  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex items-center gap-3 mb-6">

        <FaExclamationTriangle className="text-red-500 text-xl" />

        <h2 className="text-2xl font-bold">
          {text.anomalies}
        </h2>

      </div>

      <div className="space-y-4">

        {anomalies.map((item) => (

          <div
            key={item.id}
            className="border-l-4 border-red-500 bg-gray-50 rounded-lg p-4 flex justify-between items-center"
          >

            <div>

              <h3 className="font-semibold">
                {item.type}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.message}
              </p>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                item.severity === "High"
                  ? "bg-red-500"
                  : item.severity === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {item.severity}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AnomalyPanel;