/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="isolate bg-white">
    </div>
  );
};
export default HeroSection;
