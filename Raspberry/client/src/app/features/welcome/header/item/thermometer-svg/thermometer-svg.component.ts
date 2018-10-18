import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-thermometer-svg',
  templateUrl: './thermometer-svg.component.html',
  styleUrls: ['./thermometer-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThermometerSvgComponent implements OnInit {
  @Input() temperature: number;
  @ViewChild('svgD') svgD: ElementRef;
  d: string;

  ngOnInit(): void {
    this.d = `M192.324,222.1v31.762l82.686,82.686c-0.834-20.611-11.678-39.236-29.378-50.196l-11.838-7.331
    V${252.0 - (this.temperature * 4.4)}H192.324z`;
    this.svgD.nativeElement.setAttribute('d', this.d);
  }
}
