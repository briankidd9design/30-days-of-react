import React from "react";
import "../accordion-css/accordion.css";
import Navigation from "./Navigation";
// Import React hooks here
import { useState } from "react";

export default function Accordion() {
  // Implement your state management here
  const [isExpanded, setIsExpanded] = useState({
    html: false,
    css: false,
    js: false,
  });
  // Implement the toggle function here
  const expandSection = (key) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <div className="navigation">
        <Navigation />
      </div>

      <div className="accordion">
        <div
          className={
            isExpanded.html ? "accordion-item expanded" : "accordion-item"
          }
        >
          <div
            onClick={() => expandSection("html")}
            className="accordion-header"
          >
            HTML <span aria-hidden={true} className="accordion-icon" />
          </div>
          <div className="accordion-content">
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        </div>

        <div
          className={
            isExpanded.css ? "accordion-item expanded" : "accordion-item"
          }
        >
          <div
            onClick={() => expandSection("css")}
            className="accordion-header"
          >
            CSS <span aria-hidden={true} className="accordion-icon" />
          </div>
          <div className="accordion-content">
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        </div>

        <div
          className={
            isExpanded.js ? "accordion-item expanded" : "accordion-item"
          }
        >
          <div onClick={() => expandSection("js")} className="accordion-header">
            JavaScript <span aria-hidden={true} className="accordion-icon" />
          </div>
          <div className="accordion-content">
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        </div>
      </div>
    </>
  );
}
