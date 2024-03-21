import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';




@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
animals: Animal[] = [];
products = [
  {item: "Coleira", class: "Dog | Cat | Horse" , color: "Amarelo e Azul"},
  {item: "Gravata", class: "Dog | Cat " , color: "Vermelho e Verde"},
  {item: "Brilho", class: " Cat | Horse" , color: "Rosa e Roxo"},
  {item: "Coleira com Pingente", class: "Dog | Cat | Horse" , color: "Todas as cores"},
]


animalDetails = '';

  constructor(private listService: ListService){
    this.getAnimals();
  }

  ngOnInit(): void {
  }
showAge(animal: Animal){
this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
}

removeAnimal(animal: Animal){
  console.log("Removendo animal...");
 this.animals = this.listService.remove(this.animals, animal);
}
getAnimals(): void {
  this.listService.getAll().subscribe((animals) => (this.animals = animals));
}
}
