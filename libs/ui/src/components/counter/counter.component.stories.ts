import type { Meta, StoryObj } from '@storybook/angular';
import { UiCounterComponent } from './counter.component';

const meta: Meta<UiCounterComponent> = {
  component: UiCounterComponent,
  title: 'Counter',
} satisfies Meta<typeof UiCounterComponent>;
export default meta;
type Story = StoryObj<UiCounterComponent>;

export const Primary: Story = {
  args: {},
};
