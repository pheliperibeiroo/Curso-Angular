import { Directive, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'emitter', component: EmitterComponent},
    {path:'eventos', component: EventosComponent},
    {path:'if-render', component: IfRenderComponent},
    {path: 'pipes', component: PipesComponent},
    {path:'two-way-binding', component: TwoWayBindingComponent},
    {path: 'list/:id', component: ItemDetailComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}