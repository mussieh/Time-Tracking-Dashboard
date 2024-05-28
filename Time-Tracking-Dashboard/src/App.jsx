import { useState } from "react";
import NavigationCard from "./components/NavigationCard/NavigationCard";
import TimeCard from "./components/TimeCard/TimeCard";
import timeCardData from "./data.json";
import { frequencyValues } from "./constants";

function App() {
    const [frequency, setFrequency] = useState(frequencyValues.WEEKLY);

    return (
        <>
            <main>
                <section className="dashboard-section">
                    <NavigationCard
                        frequency={frequency}
                        onFrequencyChange={setFrequency}
                    />
                    <div className="dashboard-details">
                        {timeCardData.map((data) => (
                            <TimeCard
                                key={data.title}
                                frequency={frequency}
                                cardData={data}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
