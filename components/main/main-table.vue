<template>
    <section id="mainTable">
        <div class="main_table">
            <div class="title">
                <span>Итоги новой экономической политики</span>, к которым
                удастся прийти спустя 10 лет после принятия программы
            </div>
            <div class="main_table_wrapper">
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
                            <td>
                                Количество квадратных метров на душу населения,
                                единиц
                            </td>
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
                            <td>
                                Доля детей, охваченных внешкольным образованием
                            </td>
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
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("page", ["data"]),
    },
};
</script>
