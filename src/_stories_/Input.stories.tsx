import type { Story } from "@ladle/react";
import Input from "@src/components/input/Input";
import "@src/styles/globals.css";

export const Contained: Story = () => (
  <Input variant="contained" placeholder="Search" withIcon />
);

export const Outline: Story = () => (
  <Input variant="outline" placeholder="Tim kiem" withIcon/>
);

export const Form: Story = () => (
  <Input variant="form" placeholder="Nhap kich thuoc" />
);
