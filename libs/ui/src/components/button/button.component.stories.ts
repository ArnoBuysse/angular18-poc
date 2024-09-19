import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './button.component';

const meta: Meta<UiButtonComponent> = {
  component: UiButtonComponent,
  title: 'Button',
} satisfies Meta<typeof UiButtonComponent>;
export default meta;
type Story = StoryObj<UiButtonComponent>;

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
