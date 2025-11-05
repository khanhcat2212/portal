import type { Meta, Story } from "@ladle/react";
import "@src/styles/globals.css";
import CustomerCard from "@src/components/card/CustomerCard";

const meta: Meta = {
  title: "card/CustomerCard",
};

export default meta

export const Customer: Story = () => (
  <div className="w-27">
    <CustomerCard
      logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    />
  </div>
);
