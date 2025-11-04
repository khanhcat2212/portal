import type { Meta, Story } from "@ladle/react";
import "@src/styles/globals.css";
import CategoryCard from "@src/components/card/CategoryCard";

const meta: Meta = {
  title: "card/CategoryCard",
};

export default meta;

export const Category: Story = () => (
  <div className="w-27">
    <CategoryCard
      title="Mĩ phẩm"
      image="https://cdn-icons-png.freepik.com/512/11030/11030831.png"
    />
  </div>
);
