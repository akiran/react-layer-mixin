var React = require('react');
var ReactDOM = require('react-dom');

//From https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var LayerMixin = {
  componentDidMount: function() {
    this._layer = document.createElement('div');
    document.body.appendChild(this._layer);
    this._renderLayer();
  },
  componentDidUpdate: function() {
    this._renderLayer();
  },
  componentWillUnmount: function() {
      this._unrenderLayer();
      document.body.removeChild(this._layer);
  },
  _renderLayer: function() {
    var layerElement = this.renderLayer();
    if (layerElement === null) {
        ReactDOM.render(<noscript />, this._layer);
    } else {
        ReactDOM.render(layerElement, this._layer);
    }

    if (this.layerDidMount) {
        this.layerDidMount(this._layer);
    }
    
  },
  _unrenderLayer: function() {
    if (this.layerWillUnmount) {
      this.layerWillUnmount(this._layer);
    }
    ReactDOM.unmountComponentAtNode(this._layer);
  }
};

module.exports = LayerMixin;