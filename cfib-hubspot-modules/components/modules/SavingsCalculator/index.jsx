import { Island } from '@hubspot/cms-components';
import SavingsCalculatorIsland from './SavingsCalculatorIsland.jsx?island';
import './styles.css';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';


export function Component() {
  return (
    <Island module={SavingsCalculatorIsland} />
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      label="Weather Headline"
      name="headline"
      default="Get the latest weather forecast"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Savings Calculator',
  isAvailableForNewContent: true,
};
