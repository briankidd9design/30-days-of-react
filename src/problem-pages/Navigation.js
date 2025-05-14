import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <Link className="nav-link" to="/counter">
        Counter
      </Link>
      <Link className="nav-link" to="/accordion">
        Accordion
      </Link>
      <Link className="nav-link" to="/progress-bars">
        Progress Bars
      </Link>
    </div>
  );
}
