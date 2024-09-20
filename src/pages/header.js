import * as pages from './pages/index.js';
import * as def from './functions/index.js';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

export function displayWeb() {
  homeBtn.addEventListener('click', () => {
    def.renderContent();
    pages.createHomePage();
  });

  menuBtn.addEventListener('click', () => {
    def.renderContent();
    pages.createMenu();
  });

  aboutBtn.addEventListener('click', () => {
    def.renderContent();
    pages.createAbout();
  });

  pages.createHomePage();
}
