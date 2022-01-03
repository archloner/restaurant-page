import { ABOUT_US, MENU, CONTACT } from "./site-builder";

export class BodyBuilder {
  
  test() {
    console.log('BodyBuilder works');
  }

  build(contentId) {
    if (contentId === ABOUT_US) {
      const body = document.createElement('div');
      body.classList.add('container');
      body.textContent = 'About Us';
      return body;
    } else if (contentId === MENU) {
      const body = document.createElement('div');
      body.classList.add('container');
      body.textContent = 'Menu';
      return body;
    } else if (contentId === CONTACT) {
      const body = document.createElement('div');
      body.classList.add('container');
      body.textContent = 'Contact';
      return body;
    }
  }
}
