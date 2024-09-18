import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import styles from './component.css';
import svg from './dharma.svg';

class JobLogo extends LitElement {
  static get styles() {
    return css([styles]);
  }

  render() {
    return html`
      <div class="logo-container">
        ${unsafeHTML(svg)}
      </div>
  `;
}}

customElements.define('job-logo', JobLogo);
