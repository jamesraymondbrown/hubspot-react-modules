import { Island } from '@hubspot/cms-components';
import SavingsCalculatorIsland from './SavingsCalculatorIsland.jsx?island';
import './styles.css';
import { ModuleFields, TextField, RepeatedFieldGroup, NumberField } from '@hubspot/cms-components/fields';


export function Component({ fieldValues }) {
  return (
    <Island
      module={SavingsCalculatorIsland}
      headline={fieldValues.headline}
      description={fieldValues.description}
      services={fieldValues.services}
    />
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      label="Headline"
      name="headline"
      default="Estimate Your Yearly Savings"
    />
    <TextField
      label="Description"
      name="description"
      default="Select services that your business is currently paying for. This tool will estimate potential savings you could receive as a member of CFIB."
    />
    <RepeatedFieldGroup
      name="services"
      label="Services"
      occurrence={{
        min: 1,
        max: 20,
        default: 4,
      }}
      default={[
        { service_name: 'Insurance', value: 40 },
        { service_name: 'Phone and Internet', value: 50 },
        { service_name: 'Shipping Services', value: 100 },
        { service_name: 'Legal Aid', value: 120 },
      ]}
    >
      <TextField
        label="Service Name"
        name="service_name"  // ✅ Renamed from 'label' to avoid conflict
        required
      />
      <NumberField
        label="Monthly Savings Value"
        name="value"
        required
      />
    </RepeatedFieldGroup>

  </ModuleFields>
);

export const meta = {
  label: 'Savings Calculator',
  isAvailableForNewContent: true,
};
  