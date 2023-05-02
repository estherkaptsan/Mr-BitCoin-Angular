
import { HttpClient } from '@angular/common/http';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

import { default as Annotation } from 'chartjs-plugin-annotation';

export class bitcoinService {
    
  public ChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: []
  };
  constructor(private http: HttpClient) {
    Chart.register(Annotation)
  }
  

  fetchData() {
    const url = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
    this.http.get(url).subscribe((data: any) => {
      this.ChartData = {
        labels: data.values.map((value: any) => value.x),
        datasets: [
          {
            label: 'Market price',
            data: data.values.map((value: any) => value.y),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
    });
  }
}