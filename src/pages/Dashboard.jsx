import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ActionList from "../components/ActionList";
import AnomalyPanel from "../components/AnomalyPanel";
import Counter from "../components/Counter";
import SummaryCards from "../components/SummaryCards";

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1">

                <Header />

                <div className="p-8 space-y-8">

                    <SummaryCards />

                    <Counter />

                    <div className="grid lg:grid-cols-2 gap-8">

                        <ActionList />

                        <AnomalyPanel />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;