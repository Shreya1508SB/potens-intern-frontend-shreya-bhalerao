import {
  FaClipboardList,
  FaExclamationCircle,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

function SummaryCards() {
  const cards = [
    {
      title: "Pending Tasks",
      value: 12,
      color: "bg-blue-500",
      icon: <FaClipboardList size={28} />,
    },
    {
      title: "Critical Alerts",
      value: 5,
      color: "bg-red-500",
      icon: <FaExclamationCircle size={28} />,
    },
    {
      title: "Approved Today",
      value: 41,
      color: "bg-green-500",
      icon: <FaCheckCircle size={28} />,
    },
    {
      title: "SLA Compliance",
      value: "96%",
      color: "bg-purple-500",
      icon: <FaChartLine size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-300`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">{card.title}</p>
              <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
            </div>

            <div>{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;