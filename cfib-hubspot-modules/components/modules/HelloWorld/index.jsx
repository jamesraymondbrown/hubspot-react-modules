import { ModuleFields, TextField } from '@hubspot/cms-components/fields';


export function Component() {
  return (
    <p>Hello world</p>
  );
}

export const fields = (
  <ModuleFields>
  </ModuleFields>
);

export const meta = {
  label: 'Hello World',
  isAvailableForNewContent: true,
};
