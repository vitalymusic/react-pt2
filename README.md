
# React-pt2

Vienkāršs React projekts, kas demonstrē komponentu struktūru un darbu ar React lietotni.

## 🚀 Sākšana (Getting Started)

### 1. Klonēt repozitoriju


git clone https://github.com/vitalymusic/react-pt2.git
cd react-pt2

## 2. Instalēt atkarības

Projekts izmanto npm (vai yarn). Izvēlies vienu no variantiem:

npm install



##  3. Palaist izstrādes serveri
npm start


Pēc tam atver pārlūkā http://localhost:3000, lai redzētu savu React lietotni darbībā.

##  📂 Projekta struktūra
react-pt2/
 ├── public/
 │    └── index.html        ← Galvenais HTML fails
 ├── src/
 │    ├── components/       ← React komponentes
 │    ├── App.js            ← Saknes (root) komponente
 │    ├── index.js          ← Ieejas punkts aplikācijai
 │    └── styles/           ← CSS vai citi stilu faili
 ├── package.json           ← Atkarības un skripti
 └── README.md              ← Pamācība (šis fails)


## 🧩 Kā izveidot jaunu komponenti

Izveido src/components/ mapē jaunu failu, piemēram: MyComponent.js

export default function MyComponent() {
  return <p>Šī ir mana komponente!</p>;
}


## Importē komponenti App.js failā:

import MyComponent from './components/MyComponent';


## Pievieno to JSX iekš App.js:

function App() {
  return (
    <div>
      <h1>Mana React aplikācija</h1>
      <MyComponent />
    </div>
  );
}

🎨 Stilu pievienošana

Ja vēlies pievienot CSS stilus, izveido failu MyComponent.css un importē to komponentē:

p {
  color: blue;
  font-weight: bold;
}

import './MyComponent.css';

## 📦 Ražošanas (production) build

Kad projekts gatavs, izveido optimizētu versiju publicēšanai:

npm run build


Tiks izveidota mape build/, kuru var izvietot jebkurā hostinga platformā (piem., Netlify, Vercel, GitHub Pages).

## ✅ Ieteikumi

Koda formatēšanai vari izmantot Prettier vai ESLint.

Ja nepieciešami testi, tos var palaist ar npm test vai yarn test.

Publicēšanai vari izmantot Netlify, Vercel vai GitHub Pages.