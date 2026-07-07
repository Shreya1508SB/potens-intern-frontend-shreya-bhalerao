import actions from "../data/actions.json";
import ActionCard from "./ActionCard";
import { useLanguage } from "../context/LanguageContext";

function ActionList() {
  const { text } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        {text.actions}
      </h2>

      <div className="space-y-4">
        {actions.map((action) => (
          <ActionCard key={action.id} action={action} />
        ))}
      </div>
    </div>
  );
}

export default ActionList;