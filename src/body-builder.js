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
      const body = document.createElement("div");
      body.classList.add("container");
      body.textContent = "Contact";
      return body;
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
    const container = document.createElement('div');
    container.classList.add('container', 'about-container');

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.textContent = 'O nas';

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');

    const photoDiv = document.createElement('div');
    photoDiv.classList.add('about-photo');

    const photo = document.createElement('img');
    photo.src = 'assets/ramen-people-door.png';
    photo.alt = 'Ramen People Entrance';

    photoDiv.appendChild(photo);

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');

    const header = document.createElement('h1');
    header.textContent = 'Ramen People ラーメン•ピープル';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'The Real Ramen. Tylko u nas w Krakowie poznacie to danie w wielu oryginalnych japońskich odsłonach.';

    const logo = document.createElement('img');
    logo.src = 'assets/ramen-people-logo.jpg';
    logo.alt = 'Ramen People Logo';

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

  }
}
