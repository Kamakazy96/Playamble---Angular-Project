import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class LineComponent implements AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const xAxisData = [];
      const data1 = [];

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight, colors.infoLight],
        legend: {
          data: ['bar'],
          align: 'left',
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            data: xAxisData,
            silent: false,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: idx => idx * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: idx => idx * 5,
      };

      for (let i = 0; i < 100; i++) {
        xAxisData.push('Category ' + i);
        data1.push(Math.floor(Math.random() * 100 % 100));
      }
    },
    );
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

