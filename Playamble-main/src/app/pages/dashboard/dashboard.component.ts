import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

interface user {
  role: string;
} 

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})


export class DashboardComponent implements OnInit {
  user: user;

  //BlackJack Weekdays
  private BlackJackProfit = [
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
  ];

  //HiLo Weekdays
  private HiLoProfit = [
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
  ];

  //Poker Weekdays
  private PokerProfit = [
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
  ];

  //Roulette Weekdays
  private RouletteProfit = [
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
    Math.floor((Math.random() * 100) % 100),
  ];

  private alive = true;

  successAreaStackOptions: any = {};
  messageAreaStackOptions: any = {};
  themeSubscription: any;
  lineOptions: any = {};

  ngOnInit() {

    console.log(this.user);
    

    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      const xAxisData = [];
      const data1 = [];
      // Bar Line Options!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      this.lineOptions = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight, colors.infoLight],
        legend: {
          data: ['Total'],
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
            name: 'Total',
            type: 'bar',
            data: data1,
            animationDelay: (idx) => idx * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => idx * 5,
      };

      xAxisData.push('Monday');
      xAxisData.push('Tuesday');
      xAxisData.push('Wednesday');
      xAxisData.push('Thursday');
      xAxisData.push('Friday');
      xAxisData.push('Saturday');
      xAxisData.push('Sunday');

      for (let i = 0; i < 7; i++) {
        data1.push(
          this.BlackJackProfit[i] +
            this.HiLoProfit[i] +
            this.PokerProfit[i] +
            this.RouletteProfit[i]
        );
      }

      // Success Area Stack Options!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      this.successAreaStackOptions = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.tooltipBackgroundColor,
            },
          },
        },
        legend: {
          data: ['BlackJack', 'Hi Lo', 'Poker', 'Roulette'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
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
            type: 'value',
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
            name: 'BlackJack',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: this.BlackJackProfit,
          },
          {
            name: 'Hi Lo',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: this.HiLoProfit,
          },
          {
            name: 'Poker',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: this.PokerProfit,
          },
          {
            name: 'Roulette',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: this.RouletteProfit,
          },
        ],
      };
    });
  }

  usersTable(){
    this.router.navigate(['../pages/tables/users-table'])
  }

  constructor(
    private theme: NbThemeService,
    private authService: NbAuthService,
    private router: Router
  ) {
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }
}
