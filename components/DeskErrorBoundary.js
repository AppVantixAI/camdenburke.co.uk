import { Component } from 'react';
import ResumeSite from './ResumeSite';

export default class DeskErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(err) {
    console.error('DesktopScene failed:', err);
    document.body.style.overflow = '';
  }

  render() {
    if (this.state.failed) {
      return (
        <ResumeSite
          showViewToggle
          viewMode="flat"
          onGoDesk={this.props.onRetryDesk}
        />
      );
    }
    return this.props.children;
  }
}
