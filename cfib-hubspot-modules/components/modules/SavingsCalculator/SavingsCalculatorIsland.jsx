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

export default function SavingsCalculatorIsland() {
    const [monthlySavings, setMonthlySavings] = useState();
    const [numberOfMonths, setNumberOfMonths] = useState();

    const totalSavings = monthlySavings * numberOfMonths;

    const data = Array.from({ length: numberOfMonths }, (_, i) => ({
        month: `Month ${i + 1}`,
        savings: monthlySavings * (i + 1),
    }));

    return (
        <div className="savings-calculator">
            <div className="savings-calculator__inputs">
                <div className="savings-calculator__input-group">
                    <label>Monthly Savings ($):</label>
                    <input
                        type="number"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(Number(e.target.value))}
                    />
                </div>

                <div className="savings-calculator__input-group">
                    <label>Number of Months:</label>
                    <input
                        type="number"
                        value={numberOfMonths}
                        onChange={(e) => setNumberOfMonths(Number(e.target.value))}
                    />
                </div>
            </div>

            <p className="total">
                Total Savings: ${totalSavings.toLocaleString()}
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
