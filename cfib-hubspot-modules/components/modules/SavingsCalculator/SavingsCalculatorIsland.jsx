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

const SERVICES = [
    { label: 'Insurance', value: 40 },
    { label: 'Phone and Internet', value: 50 },
    { label: 'Shipping Services', value: 100 },
    { label: 'Legal Aid', value: 120 },
];

export default function SavingsCalculatorIsland() {
    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (label) => {
        setSelectedServices((prev) =>
            prev.includes(label)
                ? prev.filter((s) => s !== label)
                : [...prev, label]
        );
    };

    const monthlySavings = selectedServices.reduce((sum, label) => {
        const service = SERVICES.find((s) => s.label === label);
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
            <h2>Estimate Your Yearly Savings</h2>
            <p>Select services that your business is currently paying for. This tool will estimate potential savings could receive as a member of CFIB.</p>
            <div className="savings-calculator__inputs">
                {SERVICES.map(({ label, value }) => (
                    <label key={label} className="savings-calculator__checkbox">
                        <input
                            type="checkbox"
                            checked={selectedServices.includes(label)}
                            onChange={() => toggleService(label)}
                        />
                        {label}
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
