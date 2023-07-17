import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadixSwitch from "./RadixSwitch";

const meta: Meta<typeof RadixSwitch> = {
  title: "Components/RadixSwitch",
  component: RadixSwitch,
  // argTypes: {
  //   onToggled: {
  //     description:
  //       "A Callback function to handle toggle functionality. Returns (True | False) ",
  //     control: {
  //       type: "function",
  //     },
  //   },
  //   size: {
  //     defaultValue: "large",
  //   },
  // },
};
export default meta

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof RadixSwitch>;

export const Radix = () => {
  const [checked, setChecked] = useState(false);

  const onToggled = (isChecked:boolean) => setChecked(isChecked)

  return (
    <form>
      <RadixSwitch
        label="Airplance mode"
        checked={checked}
        value="on"
        disabled={false}
        onCheckedChanged={onToggled}
      />
    </form>
  );
};

export const Primary: Story = {
  args: {
    label: "Primary 😃",
    checked: true,
    disabled: true,
  },
};
