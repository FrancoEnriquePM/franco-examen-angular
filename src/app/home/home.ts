import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Hero } from './hero/hero';
import { Parallax } from './parallax/parallax';
import { Content } from './content/content';
import { Footer } from '../shared/footer/footer';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    Navbar,
    Hero,
    Parallax,
    Content,
    Footer
  ],
  templateUrl: './home.html',
})
export class HomeComponent {}