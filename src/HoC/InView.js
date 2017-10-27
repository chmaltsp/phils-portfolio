import React from 'react';

function isInViewport(element) {
  if (!element) return;
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);
}

function InView(Component) {
  class Wrapper extends React.Component {
    constructor() {
      super();
      this.state = {};

      this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
      this.onScroll();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    onScroll(event) {
      this.setState({
        inView: isInViewport(this.ref)
      });
    }

    render() {
      return <Component {...this.props} innerRef={comp => (this.ref = comp)} inView={this.state.inView} />;
    }
  }
  return Wrapper;
}

export default InView;
