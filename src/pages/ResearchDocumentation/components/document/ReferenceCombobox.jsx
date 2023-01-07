import { Combobox } from "@headlessui/react";

export default function ReferenceCombobox({ label, ...props }) {
  return (
    <div className="mt-3">
      <Combobox as="div">
        <Combobox.Label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </Combobox.Label>
        <div className="relative mt-1">
          <Combobox.Input className="w-full rounded-md border border-accent bg-white py-2 pl-3 pr-10 font-bold text-primary shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm" />
        </div>
      </Combobox>
    </div>
  );
}
