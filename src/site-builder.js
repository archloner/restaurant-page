import { BodyBuilder } from "./body-builder";

export const ABOUT_US = "about-us";
export const MENU = "menu";
export const CONTACT = "contact";

export class SiteBuilder {
  content = document.querySelector("#content");
  navButtons = document.querySelectorAll(".nav-item button");

  constructor() {
    this.bodyBuilder = new BodyBuilder();
    this.bodyBuilder.test();
  }

  buildHeader() {
    const company = document.createElement("div");
    company.classList.add("company");

    const gradient = document.createElement("div");
    gradient.classList.add("gradient");

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("p-30");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Ramen People - Nadwiślańska";
    container.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.innerHTML =
      "<span class='rating'>4.8(200+)</span> • Wyświetl czas dostawy i opłatę za zlecenie. <a href='#'>Podaj adres dostawy</a>";
    container.appendChild(paragraph);

    const button = document.createElement("button");
    button.classList.add("fav-button");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M16 5c2.5 0 4 1.9 4 4.2 0 1.2-.6 2.3-1.3 3.1C17.5 13.5 12 18 12 18s-5.5-4.5-6.7-5.7C4.5 11.5 4 10.4 4 9.2 4 6.9 5.5 5 8 5c1.7 0 3.3 1.6 4 3 .7-1.4 2.3-3 4-3zm0-3c-1.5 0-2.9.6-4 1.4C10.9 2.5 9.5 2 8 2 4 2 1 5.1 1 9.2c0 1.9.8 3.7 2.2 5.2 1.4 1.5 8.8 7.5 8.8 7.5s7.4-6 8.8-7.5c1.4-1.5 2.2-3.3 2.2-5.2C23 5.1 20 2 16 2z"
    );

    svg.appendChild(path);
    button.appendChild(svg);
    container.appendChild(button);
    gradient.appendChild(container);
    company.appendChild(gradient);

    return company;
  }

  buildNav() {
    const container = document.createElement("div");
    container.classList.add("container");

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");

    const aboutUsBtn = document.createElement("button");
    aboutUsBtn.classList.add("active");
    aboutUsBtn.textContent = "O nas";
    aboutUsBtn.addEventListener("click", (e) => {
      this.handleClickAboutUs(e);
    });
    navItem.appendChild(aboutUsBtn);

    const navItem1 = document.createElement("div");
    navItem1.classList.add("nav-item");

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
      this.handleClickMenu(e);
    });
    navItem1.appendChild(menuButton);

    const navItem2 = document.createElement("div");
    navItem2.classList.add("nav-item");

    const contactButton = document.createElement("button");
    contactButton.textContent = "Kontakt";
    contactButton.addEventListener("click", (e) => {
      this.handleClickContact(e);
    });
    navItem2.appendChild(contactButton);

    nav.appendChild(navItem);
    nav.appendChild(navItem1);
    nav.appendChild(navItem2);

    container.appendChild(nav);

    return container;
  }

  handleClickAboutUs(e) {
    // Clear .active class
    const activeButton = document.querySelector("button.active");
    activeButton.classList.remove("active");
    // Add .active class to clicked button
    e.target.classList.add("active");

    this.rebuild(this.bodyBuilder.build(ABOUT_US));
  }

  handleClickMenu(e) {
    // Clear .active class
    const activeButton = document.querySelector("button.active");
    activeButton.classList.remove("active");
    // Add .active class to clicked button
    e.target.classList.add("active");

    this.rebuild(this.bodyBuilder.build(MENU));
  }

  handleClickContact(e) {
    // Clear .active class
    const activeButton = document.querySelector("button.active");
    activeButton.classList.remove("active");
    // Add .active class to clicked button
    e.target.classList.add("active");

    this.rebuild(this.bodyBuilder.build(CONTACT));
  }

  buildFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('mt-30');

    const span = document.createElement('span');
    span.innerHTML = "Created by <a href='https://github.com/fbiernat'>fbiernat</a> 2021";

    footer.appendChild(span);

    return footer;
  }

  clearDOM() {
    this.content.textContent = "";
  }

  build() {
    this.clearDOM();
    this.content.appendChild(this.buildHeader());
    this.content.appendChild(this.buildNav());
  }

  rebuild(body) {
    console.log('Rebuilding page');
    this.clearDOM();
    this.content.appendChild(this.buildHeader());
    this.content.appendChild(this.buildNav());
    this.content.appendChild(body);
    this.content.append(this.buildFooter());
  }
}
