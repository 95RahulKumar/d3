import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports:[MatTooltipModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit, OnChanges {
  @Input() thumbColor: string = 'blue';
  @Input() value: number = 0; 
  @Input() width: number = 180;
  @ViewChild('timelineContainer', { static: true }) timelineContainer!: ElementRef;
  // @ViewChild('circle', { static: true }) circle!: ElementRef;
  ngAfterViewInit(): void {
    this.drawProgressBar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Redraw the progress bar if input properties change after initialization
    if (changes['value'] || changes['thumbColor']) {
      this.drawProgressBar();
    }
  }

  drawProgressBar(): void {

  //  const circle =  d3.select(this.circle.nativeElement)
  //  circle.selectAll('*').remove(); 
  //  const circleSvg = circle.append('svg');
  //  circleSvg.append('circle')
  //  .attr('cx','25')
  //  .attr('cy','25')
  //  .attr('r','15')
  //  .transition()
  //  .duration(1000)
  //  .delay(1000)
  //  .ease(d3.easeCubic)
  //  .attr('r','25')  
  //  .attr('cy','50')   
  //  .attr('cx','50')
  //  circle.interrupt()


    const container = d3.select(this.timelineContainer.nativeElement);
    container.selectAll('*').remove(); 
    const svg = container.append('svg');
  
    const progressWidth = this.value ? (this.value / 100) * this.width : 0;

    svg.attr('width', '100%')
       .attr('height', '8px')

   
    svg.append('rect')
       .attr('x', '0')
       .attr('y', '0')
       .attr('width', '100%')
       .attr('height', '8px')
       .attr('fill', '#D3D3D3')
       .attr('rx', '4')
       .attr('ry', '4');

   
    svg.append('rect')
       .attr('x', '0')
       .attr('y', '0')
       .attr('width', '0px') 
       .attr('height', '8px')
       .attr('fill', this.thumbColor)
       .attr('rx', '4')
       .attr('ry', '4')
       .transition()
       .duration(1000)
       .ease(d3.easeCubic)
       .attr('width', `${progressWidth}px`);
  }
}
