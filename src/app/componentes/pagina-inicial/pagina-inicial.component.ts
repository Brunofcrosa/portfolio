import { Component } from '@angular/core';

interface Tecnologia {
  nome: string;
  icone: string;
}

interface Projeto {
  imagemSrc: string;
  imagemAlt: string;
  titulo: string;
  descricao: string;
  link: string;
  tecnologias: Tecnologia[];
}

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {
  projetos: Projeto[] = [
    {
      imagemSrc: 'assets/imgs/academia.png',
      imagemAlt: 'App academia',
      titulo: 'Website Academia',
      descricao: 'App para uma academia.',
      link: 'https://birl-acad.vercel.app/',
      tecnologias: [
        { nome: 'React', icone: 'bi-filetype-jsx' },
        { nome: 'TypeScript', icone: 'bi-filetype-tsx' },
        { nome: 'Tailwind', icone: 'bi-palette' }
      ]
    },
    {
      imagemSrc: 'assets/imgs/GameS-bootstrap.png',
      imagemAlt: 'GameS-bootstrap',
      titulo: 'Portal de Jogos',
      descricao: 'Plataforma completa com sistema de login e CRUD para gerenciamento de jogos.',
      link: 'https://crud-basico-ten.vercel.app/',
      tecnologias: [
        { nome: 'Angular', icone: 'bi-filetype-html' },
        { nome: 'Bootstrap', icone: 'bi-bootstrap' },
        { nome: 'TypeScript', icone: 'bi-filetype-tsx' }
      ]
    },
    {
      imagemSrc: 'assets/imgs/GameS-CSS.png',
      imagemAlt: 'GameS-CSS',
      titulo: 'Landing Page de Jogo',
      descricao: 'Site informativo sobre um jogo com design customizado e interações.',
      link: 'https://game-s-website.vercel.app/',
      tecnologias: [
        { nome: 'HTML', icone: 'bi-filetype-html' },
        { nome: 'CSS', icone: 'bi-filetype-css' },
        { nome: 'JavaScript', icone: 'bi-filetype-js' }
      ]
    },
    {
      imagemSrc: 'assets/imgs/processswitcher.png',
      imagemAlt: 'App Perfect World',
      titulo: 'Process Switcher',
      descricao: 'Utilitário para alternância rápida entre telas do jogo Perfect World.',
      link: 'https://github.com/Brunofcrosa/ProcessSwitcher',
      tecnologias: [
        { nome: 'C#', icone: 'bi-filetype-cs' }
      ]
    },
    {
      imagemSrc: 'assets/imgs/abrircontas.png',
      imagemAlt: 'App Perfect World 2',
      titulo: 'Account Manager',
      descricao: 'Utilitário para abrir múltiplas contas simultaneamente no Perfect World.',
      link: 'https://github.com/Brunofcrosa/AbrirContas',
      tecnologias: [
        { nome: 'C#', icone: 'bi-filetype-cs' }
      ]
    },
    {
      imagemSrc: 'assets/imgs/imobiliaria.jpeg',
      imagemAlt: 'App Imobiliaria',
      titulo: 'Sistema Imobiliário',
      descricao: 'Painel administrativo completo para gestão de imóveis e clientes.',
      link: 'https://2025-cppig-101-bruno.vercel.app/',
      tecnologias: [
        { nome: 'Python', icone: 'bi-filetype-py' },
        { nome: 'Django', icone: 'bi-database' },
        { nome: 'Bootstrap', icone: 'bi-bootstrap' }
      ]
    }
  ];
}