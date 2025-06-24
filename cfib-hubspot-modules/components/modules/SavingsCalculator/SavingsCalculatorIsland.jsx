// SavingsCalculatorIsland.jsx
import { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

export default function SavingsCalculatorIsland({ headline, description, services }) {
    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (label) => {
        setSelectedServices((prev) =>
            prev.includes(label)
                ? prev.filter((s) => s !== label)
                : [...prev, label]
        );
    };

    const monthlySavings = selectedServices.reduce((sum, name) => {
        const service = services.find((s) => s.service_name === name);
        return sum + (service ? service.value : 0);
    }, 0);

    const numberOfMonths = 12;
    const totalSavings = monthlySavings * numberOfMonths;

    const data = Array.from({ length: numberOfMonths }, (_, i) => ({
        month: `Month ${i + 1}`,
        savings: monthlySavings * (i + 1),
    }));

    return (
        <div className="savings-calculator">
            <h2>{headline}</h2>
            <p>{description}</p>
            <div className="savings-calculator__inputs">
                {services.map(({ service_name }) => (
                    <label key={service_name} className="savings-calculator__checkbox">
                        <input
                            type="checkbox"
                            checked={selectedServices.includes(service_name)}
                            onChange={() => toggleService(service_name)}
                        />
                        {service_name}
                    </label>
                ))}
            </div>

            <p className="total">
                Estimated Annual Savings: ${totalSavings.toLocaleString()}
            </p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="savings" fill="#0076bb" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
