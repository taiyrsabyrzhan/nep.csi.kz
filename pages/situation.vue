<template>
  <div class="container">
    <section class="situation">
      <h1>Ситуация в мире и в Казахстане</h1>
      <div class="flex_block">
          <div class="flex_block_left">
              <h2>Результат</h2>
              <h2>Налоговая реформа</h2>
              <h2>Пенсионная реформа</h2>
              <h2>Новая жилищная политика</h2>
              <h2>Детское развитие</h2>
          </div>
          <div class="flex_block_right">
              <table>
                  <thead>
                      <tr>
                          <th></th>
                          <th>2021</th>
                          <th>2030</th>
                          <th>2050</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Население</td>
                          <td>19,1 млн</td>
                          <td>19,1 млн</td>
                          <td>19,1 млн</td>
                      </tr>
                      <tr>
                          <td>Количество квадратных метров на душу населения, единиц</td>
                          <td>22,9</td>
                          <td>22,9</td>
                          <td>22,9</td>
                      </tr>
                      <tr>
                          <td>Коэффициент владения жильем</td>
                          <td>67%</td>
                          <td>67%</td>
                          <td>67%</td>
                      </tr>
                      <tr>
                          <td>Доля теневого ФОТ</td>
                          <td>40%</td>
                          <td>40%</td>
                          <td>40%</td>
                      </tr>
                      <tr>
                          <td>Средняя заработная плата</td>
                          <td>560 $</td>
                          <td>560 $</td>
                          <td>560 $</td>
                      </tr>
                      <tr>
                          <td>Реальная безработица</td>
                          <td>25%</td>
                          <td>25%</td>
                          <td>25%</td>
                      </tr>
                      <tr>
                          <td>Доля обрабатывающей промышленности в ВВП</td>
                          <td>11%</td>
                          <td>11%</td>
                          <td>11%</td>
                      </tr>
                      <tr>
                          <td>Реальный рост ВВП</td>
                          <td>1-2%</td>
                          <td>1-2%</td>
                          <td>1-2%</td>
                      </tr>
                      <tr>
                          <td>Дефицит бюджета</td>
                          <td>1,2%</td>
                          <td>1,2%</td>
                          <td>1,2%</td>
                      </tr>
                      <tr>
                          <td>Нагрузка на ФОТ</td>
                          <td>40%</td>
                          <td>40%</td>
                          <td>40%</td>
                      </tr>
                      <tr>
                          <td>Доля детей, охваченных внешкольным образованием</td>
                          <td>7%</td>
                          <td>7%</td>
                          <td>7%</td>
                      </tr>
                      <tr>
                          <td>Активы Нацфонда</td>
                          <td>55 мрлд $</td>
                          <td>55 мрлд $</td>
                          <td>55 мрлд $</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>        
      <div class="charts_block">
        <LineChart :data="humanData" :options="chartOptions" :height="200" />
      </div>
      <div class="charts_block">
        <LineChart :data="areaData" :options="chartOptions" :height="200" />
      </div>
    </section>
  </div>
</template>

<script>
import LineChart from '@/components/charts/line-chart';

export default {
  components: {
    LineChart
  },
  data() {
    return {
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#0B52A0',
          bodyFontColor: '#0B52A0',
          intersect: false,
          xPadding: 10,
          yPadding: 10,
          legend: {
            display: false,
          },
        }
      },
      humanData: {
        labels: ['2012', '2014', '2016', '2018', '2020', '2022', '2024', '2030', '2040', '2050'],
        datasets: [
          {
            label: 'Население, млн чел.',
            backgroundColor: '#4DC7F2',
            data: [14, 15, 16, 17, 18, 19, 20, 21, 22],
            borderColor: '#4DC7F2',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#4DC7F2',
            pointHoverRadius: 4,
            lineTension: 0,
          },
          {
            label: 'В случае реформ',
            data: [14, 15, 16, 17, 18, 19, 22, 25, 30],
            borderColor: '#0B52A0',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#0B52A0',
            pointHoverRadius: 6,
            lineTension: 0,
          },
        ],
      },
      areaData: {
        labels: ['2012', '2014', '2016', '2018', '2020', '2022', '2024', '2030', '2040', '2050'],
        datasets: [
          {
            label: 'Текущая обеспеченность жильем, кв.м.',
            backgroundColor: '#4DC7F2',
            data: [19, 21, 22, 23, 24, 24, 26, 28, 30],
            borderColor: '#4DC7F2',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#4DC7F2',
            pointHoverRadius: 4,
            lineTension: 0,
          },
          {
            label: 'В случае реформ',
            data: [19, 21, 22, 23, 26, 30, 34, 38, 40],
            borderColor: '#0B52A0',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#0B52A0',
            pointHoverRadius: 6,
            lineTension: 0,
          },
        ],
      },
    }
  },
}
</script>