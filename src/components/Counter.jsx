import { useEffect, useState } from "react";

function Counter() {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white rounded-2xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-300">

      <h2 className="text-3xl font-bold">
        SLA Deadline Remaining
      </h2>

      <p className="mt-2 text-red-100">
        Time left to process today's highest priority request.
      </p>

      <div className="text-7xl font-extrabold tracking-wider mt-6">
        {hours}:{minutes}:{seconds}
      </div>

    </div>
  );
}

export default Counter;