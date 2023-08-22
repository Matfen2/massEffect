import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appEpisodes]'
})
export class EpisodesDirective {

  constructor(private el : ElementRef) {
    this.borderColor('azure');
    this.opacity('0px');
  }

  private borderColor(color: string) {
    this.el.nativeElement.style.border = `1px solid ${color}`;
  }

  private opacity (number: string) {
    this.el.nativeElement.style.opacity = number;
  }

  @HostListener ('mouseenter') onMouseEnter() {
    this.borderColor('darkred');
    this.opacity('1.0')
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.borderColor('azure');
    this.opacity('0.7');
  }
}
