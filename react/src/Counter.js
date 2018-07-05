import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: 'Some title',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac odio id 
      eros accumsan varius. Nunc non orci ex. Mauris porttitor volutpat nulla, at dictum 
      tellus cursus ut. Ut nisi mauris, porta eu semper sit amet, varius in justo. Phasellus 
      ipsum nisl, sagittis eu sapien a, placerat luctus nisl. Fusce sit amet eros varius sapien 
      tincidunt tincidunt sit amet nec neque. Fusce orci risus, auctor eu lorem sit amet, 
      faucibus ullamcorper velit. Aenean vel tincidunt nibh. In semper urna mauris, 
      nec venenatis mi feugiat vitae. Proin congue nisi eget congue finibus.`,
    };
  }

  render() {
    return (
      <div>
        <custom-title title={this.state.title} text={this.state.text}></custom-title>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <custom-paragraph content={this.state.count}></custom-paragraph>
      </div>      
    );
  }
}
export default Counter;
