import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {TwButton} from "./TwButton";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof TwButton> = {
  title: "Components/TwButton",
  component: TwButton,
  argTypes: {
    textColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof TwButton>;

export const Primary: Story = {
  args: {
    label: "Primary 😃",
    size: "large",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary 😇",
    primary: false,
  },
};
