import React from "react";
import AccordionItem from "./AccordionItem"; // Import the AccordionItem component

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
    };
    this.renderProject = this.renderProject.bind(this);
  }

  renderProject(key) {
    return <AccordionItem key={key} index={key} details={this.state.projects[key]} />;
  }

  render() {
    return (
      <div>
        <div className="accordion-container">
          {Object.keys(this.state.projects).map(this.renderProject)}
        </div>
      </div>
    );
  }
}

export default Accordion;