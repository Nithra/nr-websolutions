import { useEffect, useState } from "react";
import "./../../public/css/loader.css";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-label="Loading portfolio">
      <div className="loader-mark">N<span>.</span></div>
      <div className="loader-track"><span /></div>
      <p>Crafting digital experiences</p>
    </div>
  );
};

export default PageLoader;
