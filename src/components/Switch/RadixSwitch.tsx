import React from 'react';
import * as Switch from '@radix-ui/react-switch';
// import './RadixSwitch.css';

const RadixSwitch = ({
  label,
  checked,
  value,
  disabled,
  onCheckedChanged,
}: {
  label: string;
  checked: boolean;
  value: string;
  disabled: boolean;
  onCheckedChanged: (checked: boolean) => void;
}) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <label className="Label" htmlFor="switch-comp" style={{ paddingRight: 15 }}>
      {label}
    </label>
    <Switch.Root
      onCheckedChange={onCheckedChanged}
      checked={checked}
      value={value}
      disabled={disabled}
      className="w-[42px] h-[25px] bg-slate-900 rounded-full relative shadow-[0_2px_10px] shadow-slate-700 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
      id="switch-comp"
    >
      <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-slate-700 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
  </div>
);

export default RadixSwitch;