# react-layer-mixin

React mixin for building Layered components

### Usage
```javascript
var React = require('react');
var LayerMixin = require('react-layer-mixin');

var Component = React.createClass({
  mixins: [LayerMixin],
  renderLayer: function () {
    return <div>Content of layer</div>
  },
  render: function () {
    return <div>Content of regular component</div>
  }
})

```

Code for this mixin is taken from [react-components](https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx).
Seperate npm package is created for ease of use.
