import { LitElement, html, css } from 'lit-element';
import './components/job-logo/component.js';

import styles from './index.css';

class JobHeader extends LitElement {
  static get styles() {
    return css([styles]);
  }

  render() {
    return html`
      <header>
        <job-logo></job-logo>
        <slot name="image"></slot>
        <h1>
          <slot></slot>
        </h1>
        <p>job-header experiment</p>
      </header>
  `;
}}

customElements.define('job-header', JobHeader);
