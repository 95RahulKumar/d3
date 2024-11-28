import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Chart, registerables} from "chart.js";
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
  @ViewChild('barChart', { static: true }) barChart!: ElementRef;
  chart!: Chart;
  constructor(){  
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.drawProgressBar();
    this.drawBarChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Redraw the progress bar if input properties change after initialization
    if (changes['value'] || changes['thumbColor']) {
      this.drawProgressBar();
    }
  }

drawBarChart(){
  const ctx = this.barChart?.nativeElement?.getContext('2d');
   const borderType = 'center'
  // const buubleChartData = {
  //   datasets: [{
  //     label: 'First Dataset',
  //     data: [{
  //       x: 20,
  //       y: 30,
  //       r: 15
  //     }, {
  //       x: 40,
  //       y: 10,
  //       r: 10
  //     }],
  //     backgroundColor: 'red',
  //     borderColor:'green',
  //     hoverBackgroundColor:'yellow',
  //     hoverBorderColor:'yellow'
  //   }]
  // };

  // const pieChart = {
  //   labels: [
  //     'Red',
  //     'Blue',
  //     'Yellow'
  //   ],
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [30, 30, 30],
  //     backgroundColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(54, 162, 235)',
  //       'rgb(255, 205, 86)'
  //     ],
  //     // hoverOffset: 4,
  //     // borderRadius:10,
  //     rotation:225,
  //     // clip: {left: 15, top: 0, right: -2, bottom: 0},
  //     circumference:270,
  //     spacing:0,
  //     // borderAlign:borderType,
  //     // weight:10,
  //     // cutout:'10%',
  //     // border:0,
  //     // borderAlign:'inner',
  //     hoverBorderColor:'transparent',
      
  //   }]
  // };


//   const mixedChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             label: 'Bar Dataset',
//             data: [10, 20, 30, 40],
//             // this dataset is drawn below
//             order:2
//         }, {
//             label: 'Line Dataset',
//             data: [0, 20, 30, 50],
//             type: 'line',
//             // this dataset is drawn on top
//             order:1,
//             tension:0.5
//         }],
//         labels: ['January', 'February', 'March', 'April']
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//  });

// const polarCrtData =  {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//     'Grey',
//     'Blue'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [11, 16, 7, 3, 14],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(75, 192, 192)',
//       'rgb(255, 205, 86)',
//       'rgb(201, 203, 207)',
//       'rgb(54, 162, 235)'
//     ],
//     borderColor:'blue',
//     borderDash:[10,15],
//     borderWidth:3,
//     circular:false,
//   }]
// };


// const mixedChart = new Chart(ctx,{
//   type: 'polarArea',
//   data: polarCrtData,
//   options: {}
// });


// const data = {
//   labels: [
//     'Eating',
//     'Drinking',
//     'Sleeping',
//     'Designing',
//     'Coding',
//     'Cycling',
//     'Running'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 90, 81, 56, 55, 40],
//     fill: true,
//     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//     borderColor: 'rgb(255, 99, 132)',
//     pointBackgroundColor: 'rgb(255, 99, 132)',
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(255, 99, 132)',
//     tension:0.5
//   }, {
//     label: 'My Second Dataset',
//     data: [28, 48, 40, 19, 96, 27, 100],
//     backgroundColor: 'transparent',
//     borderColor: 'green',
//     pointBackgroundColor: 'rgb(54, 162, 235)',
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(54, 162, 235)',
//     tension:0.2 ,
//     pointHitRadius:0,
//     spanGaps:true
//   }]
// };

// new Chart(ctx , {
//   type: 'radar',
//   data: data,
//   options: {
//     elements: {
//       line: {
//         borderWidth: 3,
//         backgroundColor:"green"
//       }
//     },
//     scales: {
//       r: {
//           angleLines: {
//               display: false
//           },
//           suggestedMin: 100,
//           suggestedMax: 100
//       }
//   }
//   },

// })


const labels =  [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ];
const data = {
  labels:labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132)',
      'rgba(255, 159, 64)',
      'rgba(255, 205, 86)',
      'rgba(75, 192, 192)',
      'rgba(54, 162, 235)',
      'rgba(153, 102, 255)',
      'rgba(201, 203, 207)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

 new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
          y: { // This is the default left scale
            type: 'linear', // Default scale type
            position: 'left', // Aligns to the left side
            alignToPixels:true,
            min:30,
            max:100,
            weight:2,
            // reverse:true,
            // stacked:true,
            suggestedMax:100,
            suggestedMin:20,
            border:{
              display:true,
              width:0,
              color:'#444',
              dash:[20,5]
            },
            grid:{
              circular:true,
              color:'#96f97b',
              lineWidth:2,
              drawTicks:true,
              offset:false,
              tickLength:20,
              tickBorderDash:[4,2],
              tickWidth:1,
              // tickColor:'red'
              // tickBorderDashOffset:10
            },
            ticks:{
              backdropColor:'yellow',
              // backdropPadding:100
              // display:false,
              color:'red',
              callback:function(value,index,ticks){
                console.log(this.getLabelForValue(value as number));
                return index % 2 === 0 ? this.getLabelForValue(value as number) : '';
                return '$'+value
              },
              font: {
                size: 14, // Font size in pixels
                family: 'Arial', // Font family
                style: 'italic', // Font style (normal, italic, oblique)
                weight: 'bold', // Font weight (e.g., normal, bold, 100, 200, etc.)
                lineHeight: 1.5 // Line height as a multiplier or a value
            },
            // major:{
            //   enabled:true
            // }
            padding:10,
            // showLabelBackdrop:true
            textStrokeColor:'pink',
            textStrokeWidth:5
            }

        },
        x: { // This is the default left scale
          border:{
            display:true,
            width:3,
            color:'#444',
            dash:[20,5]
          },
          grid:{
            circular:true,
            color:'red',
            drawOnChartArea:true,
            drawTicks:true,
            lineWidth:2,
            offset:false,
            // tickBorderDashOffset:0,
            // tickColor:'green',
            tickLength:3,
            // tickWidth:3
            // z:22
          },
          ticks:{
            // display:false
            padding:10
          }
      },
        
        }
    }
});
// let chart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     datasets: [{
//       data: [1, 2, 3]
//     }]
//   },
//   options: {
//     scales: {
//       myScale: {
//         type: 'logarithmic',
//         position: 'right', // `axis` is determined by the position as `'y'`
//       }
//     }
//   }
// });

/**
 *  change axis on other chart
 */
  // new Chart(ctx ,  {
  //   // type: 'bubble',
  //   // type: 'pie',
  //   type:'doughnut',
  //   data:pieChart,// buubleChartData,
  //   options: {
  //     animation:{
  //       animateRotate:true
  //     }
  //   }
  // });
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
