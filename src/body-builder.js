import { ABOUT_US, MENU, CONTACT } from "./site-builder";

export class BodyBuilder {
  menu1 = [
    {
      name: "Ramen Tonkotsu Yokohama Style",
      desc: "Chasu, menma, blanszowany szpinak, jajo nitamago, drobno siekana cebula, olej z palonego czosnku, siekany por, nori i...",
      price: "36,00 zł",
      imgURL: "assets/tonkotsu.jpeg",
    },
    {
      name: "Tantanmen",
      desc: "Mięsny ramen na gęstym wywarze kotteri z dodatkiem mielonej wieprzowiny marynowanej na ostro. Kotteri to ciężki, bogaty wywar...",
      price: "35,00 zł",
      imgURL: "assets/tantanmen.jpeg",
    },
    {
      name: "Spicy Chicken",
      desc: "Ramen na wywarze drobiowym. Długo gotowany, klarowny, głęboki, z dodatkiem ostrego chilli tare. Na toppingu: marynowane na ostro...",
      price: "37,00 zł",
      imgURL: "assets/spicy-chicken.jpeg",
    },
    {
      name: "Asakusa Tori Shoyu",
      desc: "Unikalne shoyu przygotowane wspólnie z mistrzem Kohei Yagi. Drobiowo-wieprzowy bulion assari, specjalnie dedykowany makaron, karkówka...",
      price: "37,00 zł",
      imgURL: "assets/asakusa.jpeg",
    },
    {
      name: "Hokkaido",
      desc: "Wegański, ryżowy wywar z dedykowanym, sezamowym tare na bazie tahiny i miso. Na toppingu: pieczona dynia hokkaido, tofu, por, dymka, nitki...",
      price: "37,00 zł",
      imgURL: "assets/hokkaido.jpeg",
    },
  ];

  menu2 = [
    {
      name: "Miso Ramen",
      desc: "Ramen na wywarze drobiowym z dodatkiem tare miso - pasty ze sfermentowanych nasion soi. Na toppingu: wołowina, jajko ajitsuke, palony por...",
      price: "37,00 zł",
      imgURL: "assets/miso.jpeg",
    },
    {
      name: "Kimchi Ramen",
      desc: "Autorski ramen na bazie wody spod fermentacji naszego kimchi i klarownego wywaru drobiowego assari. Na toppingu: schab sous vide, jajko ajitsuke, kimchi...",
      price: "37,00 zł",
      imgURL: "assets/kimchi.jpeg",
    },
  ];

  test() {
    console.log("BodyBuilder works");
  }

  build(contentId) {
    if (contentId === ABOUT_US) {
      return this.buildAboutUsPage();
    } else if (contentId === MENU) {
      return this.buildMenuPage();
    } else if (contentId === CONTACT) {
      return this.buildContactPage();
    }
  }

  buildMenuPage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const header = document.createElement("h2");
    header.textContent = "Z myślą o Tobie";

    const items = document.createElement("div");
    items.classList.add("items");

    container.appendChild(header);

    for (let item of this.menu1) {
      items.appendChild(this.createItem(item));
    }
    container.appendChild(items);

    const header2 = document.createElement("h2");
    header2.textContent = "Assari Ramen";
    container.appendChild(header2);

    const items2 = document.createElement("div");
    items2.classList.add("items");
    for (let item of this.menu2) {
      items2.appendChild(this.createItem(item));
    }
    container.appendChild(items2);

    return container;
  }

  createItem(item) {
    if (item) {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const info = document.createElement("div");
      info.classList.add("info");

      const flexGrow = document.createElement("div");
      flexGrow.classList.add("flex-grow");

      const heading = document.createElement("h3");
      heading.textContent = item.name;

      const paragraph = document.createElement("p");
      paragraph.textContent = item.desc;

      flexGrow.appendChild(heading);
      flexGrow.appendChild(paragraph);
      info.appendChild(flexGrow);

      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = item.price;
      info.appendChild(price);

      const photo = document.createElement("div");
      photo.classList.add("photo");

      const img = document.createElement("img");
      img.src = item.imgURL;
      img.alt = item.name;
      photo.appendChild(img);

      itemDiv.appendChild(info);
      itemDiv.appendChild(photo);

      return itemDiv;
    }
    return null;
  }

  buildAboutUsPage() {
    const container = document.createElement("div");
    container.classList.add("container", "about-container");

    const aboutUsHeader = document.createElement("h2");
    aboutUsHeader.textContent = "O nas";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about");

    const photoDiv = document.createElement("div");
    photoDiv.classList.add("about-photo");

    const photo = document.createElement("img");
    photo.src = "assets/ramen-people-door.png";
    photo.alt = "Ramen People Entrance";

    photoDiv.appendChild(photo);

    const aboutText = document.createElement("div");
    aboutText.classList.add("about-text");

    const header = document.createElement("h1");
    header.textContent = "Ramen People ラーメン•ピープル";

    const paragraph = document.createElement("p");
    paragraph.textContent =
      "The Real Ramen. Tylko u nas w Krakowie poznacie to danie w wielu oryginalnych japońskich odsłonach.";

    const logo = document.createElement("img");
    logo.src = "assets/ramen-people-logo.jpg";
    logo.alt = "Ramen People Logo";

    aboutText.appendChild(header);
    aboutText.appendChild(paragraph);
    aboutText.appendChild(logo);

    aboutContainer.appendChild(photoDiv);
    aboutContainer.appendChild(aboutText);

    container.appendChild(aboutUsHeader);
    container.appendChild(aboutContainer);

    return container;
  }

  buildContactPage() {
    const container = document.createElement("div");
    container.classList.add("container", "contact-container");

    const heading = document.createElement("h2");
    heading.textContent = "Kontakt";
    container.appendChild(heading);

    const wrapper = document.createElement("div");
    wrapper.classList.add("contact-info-wrapper");

    const mapWrapper = document.createElement("div");
    mapWrapper.classList.add("map-wrapper");
    wrapper.appendChild(mapWrapper);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const heading1 = document.createElement("h1");
    heading1.textContent = "Ramen People - Nadwiślańska";
    contactInfo.appendChild(heading1);

    const desc = document.createElement("div");
    desc.classList.add("muted", "row");
    desc.textContent = "Japońskie • Miseczki ryżu • Azjatyckie • $$";
    contactInfo.appendChild(desc);

    const address = document.createElement("div");
    address.classList.add("info", "row");
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute("width", "24");
    svg1.setAttribute("height", "24");
    const path1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path1.setAttribute(
      "d",
      "M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
    );
    path1.setAttribute("fill", "#000000");
    svg1.appendChild(path1);
    address.appendChild(svg1);
    const addressText = document.createElement("span");
    addressText.textContent = "Nadwiślańska 5/L1, Kraków, 30-527";
    address.appendChild(addressText);
    contactInfo.appendChild(address);

    const openHours = document.createElement("div");
    openHours.classList.add("info", "row");
    const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg2.setAttribute("width", "24");
    svg2.setAttribute("height", "24");
    const path2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path2.setAttribute(
      "d",
      "M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z"
    );
    path2.setAttribute("fill", "#000000");
    svg2.appendChild(path2);
    openHours.appendChild(svg2);
    const openHoursText = document.createElement("span");
    openHoursText.textContent = "Otwarte do 9:00 PM";
    openHours.appendChild(openHoursText);
    contactInfo.appendChild(openHours);

    const rating = document.createElement("div");
    rating.classList.add("info", "row");
    const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg3.setAttribute("width", "24");
    svg3.setAttribute("height", "24");
    const path3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path3.setAttribute(
      "d",
      "M12.458 1l3.646 7 7.813.5-5.73 5.5 2.084 8-7.813-4-7.812 4 2.083-8L1 8.5 8.813 8l3.645-7z"
    );
    path3.setAttribute("fill", "#000000");
    svg3.appendChild(path3);
    rating.appendChild(svg3);
    const ratingText = document.createElement("span");
    ratingText.textContent = "4.8 (liczba ocen: 200+)";
    rating.appendChild(ratingText);
    contactInfo.appendChild(rating);

    wrapper.appendChild(contactInfo);
    container.appendChild(wrapper);

    return container;
  }
}
