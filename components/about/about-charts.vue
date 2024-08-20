<template>
  <section class='about_charts'>
    <h2><span class="linkText">Итоги новой экономической политики</span>, к которым удастся прийти спустя 10 лет после принятия программы</h2>
    <p>Сложившиеся обстоятельства говорят о необходимости реализовать Новую <span class="linkText"><a href="/">экономическую политику</a></span>, которая должна предполагать существенный рост экономики и доходов населения, справедливое распределение доходов, рост квалификации рабочей силы, производительности труда и в целом человеческого капитала страны.</p>
    <div class="about_charts_block">
      <h2>Реальный рост ВВП</h2>
      <div class="about_charts_iframe">
        <LineChart :data="chartData" :options="chartOptions" :height="200" />
        <p>Сложившиеся обстоятельства говорят о необходимости реализовать Новую <span class="linkText"><a href="/">экономическую политику</a></span>, которая должна предполагать существенный рост экономики и доходов населения, справедливое распределение доходов, рост квалификации рабочей силы, производительности труда и в целом человеческого капитала страны.</p>
      </div>
    </div>
    <div class="about_charts_block">
      <h2>Название таблицы</h2>
      <div class="about_charts_iframe">  
        <div class="about_charts_table">
          <table>
            <thead>
              <tr>
                  <th>Наименование</th>
                  <th>Любое число</th>
                  <th>Любое число</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Население</td>
                  <td>19,1 млн</td>
                  <td>19,1 млн</td>
              </tr>
              <tr>
                  <td>Количество квадратных метров на душу населения, единиц</td>
                  <td>22,9</td>
                  <td>22,9</td>
              </tr>
              <tr>
                  <td>Коэффициент владения жильем</td>
                  <td>67%</td>
                  <td>67%</td>
              </tr>
              <tr>
                  <td>Доля теневого ФОТ</td>
                  <td>40%</td>
                  <td>40%</td>
              </tr>
              <tr>
                  <td>Средняя заработная плата</td>
                  <td>560 $</td>
                  <td>560 $</td>
              </tr>
              <tr>
                  <td>Реальная безработица</td>
                  <td>25%</td>
                  <td>25%</td>
              </tr>
              <tr>
                  <td>Доля обрабатывающей промышленности в ВВП</td>
                  <td>11%</td>
                  <td>11%</td>
              </tr>
              <tr>
                  <td>Реальный рост ВВП</td>
                  <td>1-2%</td>
                  <td>1-2%</td>
              </tr>
              <tr>
                  <td>Дефицит бюджета</td>
                  <td>1,2%</td>
                  <td>1,2%</td>
              </tr>
              <tr>
                  <td>Нагрузка на ФОТ</td>
                  <td>40%</td>
                  <td>40%</td>
              </tr>
              <tr>
                  <td>Доля детей, охваченных внешкольным образованием</td>
                  <td>7%</td>
                  <td>7%</td>
              </tr>
              <tr>
                  <td>Активы Нацфонда</td>
                  <td>55 мрлд $</td>
                  <td>55 мрлд $</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Сложившиеся обстоятельства говорят о необходимости реализовать Новую <span class="linkText"><a href="/">экономическую политику</a></span>, которая должна предполагать существенный рост экономики и доходов населения, справедливое распределение доходов, рост квалификации рабочей силы, производительности труда и в целом человеческого капитала страны.</p>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from '@/components/charts/line-chart';

export default {
  components: {
    LineChart
  },
  data() {
    return {
      chartData: {
        labels: ['2010', '2015', '2020', '2021', '2022', '2023', '2025', '2030', '2040', '2050'],
        datasets: [
          {
            label: 'Реальный рост ВВП',
            backgroundColor: '#4DC7F2',
            data: [10, 200, 30, 4, 170],
            borderColor: '#4DC7F2',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#4DC7F2',
            pointHoverRadius: 4,
          },
          {
            label: 'В случае реформ',
            data: [50, 20, 300, 100, 70],
            borderColor: '#0B52A0',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#0B52A0',
            pointHoverRadius: 6,
          },
        ],
      }, 
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#0B52A0',
          bodyFontColor: '#0B52A0',
          intersect: false,
          // position: 'nearest',
          // mode: 'nearest',
          // bodySpacing: 10,
          xPadding: 10,
          yPadding: 10,
          legend: {
            display: false,
          },
        }
      },
      // chartOptions: {
      //   responsive: true,
      //   legend: {
      //     display: false,
      //   },
      //   title: {
      //     display: true,
      //     text: 'Monthly Income'
      //   },
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           beginAtZero: true
      //         }
      //       }
      //     ]
      //   }
      // }
    }
  },
}
</script>
