import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';
import { ShowEpisodeComponent } from './show-episode/show-episode.component';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesDirective } from '../episodes.directive';

const routesMe : Routes = [
  {path: '', redirectTo: 'series', pathMatch: 'full'},
  {path: 'series', component: ListEpisodesComponent},
  {path: 'serie/:id', component: ShowEpisodeComponent},
]

@NgModule({
  declarations: [
    ListEpisodesComponent,
    ShowEpisodeComponent,
    EpisodesDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesMe),
  ]
})
export class EpisodesModule { }
