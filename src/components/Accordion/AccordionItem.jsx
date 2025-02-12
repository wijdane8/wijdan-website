import React from "react";

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const project = this.props.details;
    return (
      <div className={activeClass} onClick={this.toggle}>
        <span className="summary">
          <span className="toggle-icon">
            {this.state.active ? '-' : '+'}
          </span>
          {project.summary}
        </span>
        <span className="folding-pannel answer">{project.answer}</span>
      </div>
    );
  }
}

export default AccordionItem;