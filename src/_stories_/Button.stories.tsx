import type { Story } from "@ladle/react";
import Button from "@src/components/button/Button";
import "@src/styles/globals.css";

export const Primary: Story = () => (
  <Button variant="primary" size="lg">
    Dùng thử miễn phí
  </Button>
);

export const Outline: Story = () => (
  <Button variant="outline" size="md">
    Dùng thử
  </Button>
);

export const Dashed: Story = () => (
  <Button variant="dash" size="full">
    + Thêm loại hàng
  </Button>
);

export const Neutral: Story = () => (
  <Button variant="neutral" size="sm">
    Huỷ
  </Button>
);

export const Sizes: Story = () => (
  <div className="flex gap-3">
    <Button size="sm">Lưu thông tin</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
