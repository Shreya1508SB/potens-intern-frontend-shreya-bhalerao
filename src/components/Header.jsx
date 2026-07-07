import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { text } = useLanguage();

  const date = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold">
          {text.greeting}
        </h1>

        <p className="text-gray-500">
          {date}
        </p>
      </div>

      <div className="flex items-center gap-5">

        <LanguageToggle />

        <div className="text-right">
          <p className="font-semibold">Senior Operations</p>
          <p className="text-sm text-gray-500">Operations Manager</p>
        </div>

        <img
          src="https://i.pravatar.cc/45"
          alt="Profile"
          className="rounded-full"
        />

      </div>

    </div>
  );
}

export default Header;