import Marionette from 'backbone.marionette'

import template from './HomePage.hbs'

export default Marionette.View.extend({
  template,

  serializeData() {
    return {
      name: 'Modern Backbone Starterkit',
      title: 'Modern Backbone Starterkit',
      titleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed vitae dui aliquam, molestie justo vel, faucibus velit. Nunc id
      arcu eget justo tincidunt mollis sit amet vitae ligula. Donec dignissim,
      augue in luctus sagittis, arcu nunc condimentum metus, non vulputate
      ligula nisl id magna. Quisque odio ligula, elementum non ullamcorper,
      sed, laoreet nec urna. Sed convallis enim tempor dui pulvinar ultricies.
      Proin vestibulum nibh vitae purus interdum suscipit. Ut tortor justo,
      consectetur vel eleifend nec, rutrum at orci. Mauris non aliquet orci.`,
    }
  }
})
