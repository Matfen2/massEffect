import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-episode',
  templateUrl: './show-episode.component.html',
  styleUrls: ['./show-episode.component.css'],
})
export class ShowEpisodeComponent implements OnInit {
  serieId!: number;
  serieDetails: any;

  serieData = [
    {
      id: 1,
      affiche: '/assets/picts/massEffect1Wallpaper.jpg',
      name: 'MASS EFFECT (2007)',
      describe: 'A first episode of trilogy',
    },
    {
      id: 2,
      affiche: '/assets/picts/massEffect2Wallpaper.jpg',
      name: 'MASS EFFECT 2 (2009)',
      describe: 'A second episode of trilogy',
    },
    {
      id: 3,
      affiche: '/assets/picts/massEffect3Wallpaper.jpg',
      name: 'MASS EFFECT 3 (2012)',
      describe: 'A last episode of trilogy',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.serieId = +params['id'];
      this.serieDetails = this.serieData.find(
        (serie) => serie.id === this.serieId
      );
    });
  }
}
