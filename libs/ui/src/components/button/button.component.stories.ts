import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button',
} satisfies Meta<typeof ButtonComponent>;
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    type: 'secondary',
  },
};
