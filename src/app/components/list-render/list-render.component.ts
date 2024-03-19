import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
animals: Animal[] = [
  {name: "Tico", type: "Dog", age: 2},
  {name: "Sirina", type: "Cat", age: 5},
  {name: "Teo", type: "Dog", age: 10},
  {name: "Loli", type: "Horse", age:7},
];
products = [
  {item: "Coleira", class: "Dog | Cat | Horse" , color: "Amarelo e Azul"},
  {item: "Gravata", class: "Dog | Cat " , color: "Vermelho e Verde"},
  {item: "Brilho", class: " Cat | Horse" , color: "Rosa e Roxo"},
  {item: "Coleira com Pingente", class: "Dog | Cat | Horse" , color: "Todas as cores"},
]


animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }
showAge(animal: Animal){
this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
}
}
