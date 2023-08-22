import { Component } from '@angular/core';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.css']
})
export class ListEpisodesComponent  {
  series = [
    {
      id: 1,
      pict : '/assets/picts/massEffect1Wallpaper.jpg'
    },
    {
      id: 2,
      pict : '/assets/picts/massEffect2Wallpaper.jpg'
    },
    {
      id: 3,
      pict : '/assets/picts/massEffect3Wallpaper.jpg'
    }
  ]
}
