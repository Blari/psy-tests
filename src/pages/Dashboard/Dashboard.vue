<template>
  <v-container>
    <v-row>
      <v-col cols="10" offset="1">
        <template>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(test, i) in tests" :key="i">
              <v-expansion-panel-header>
                {{ test.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card>
                  <v-img
                    height="200px"
                    src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
                  >
                  </v-img>
                  <v-card-text>
                    {{ test.description }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" :to=test.link>Detail</v-btn>
                    <v-btn color="primary">Example</v-btn>
                  </v-card-actions>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      tests: [
        {
          id: 0,
          title: "Карта интересов для младших школьников",
          description:
            "Для того, чтобы дать вам правильный совет и конкретные рекомендации для развития способностей " +
            "вашего ребёнка, нам нужно знать его склонности. Вам предлагается 35 вопросов, подумайте и ответьте на " +
            "каждый из них, стараясь не завышать и не занижать возможности ребёнка. Для большей  объективности сравните " +
            "его с другими детьми того же возраста.",
          link: '/first-test'
        },
        {
          id: 1,
          title: "Методика «Тип мышления»",
          description:
            "Диагностика типа мышления респондента. Тип мышления – индивидуальный способ преобразования информации. " +
            "Зная свой тип мышления, можно прогнозировать успешность в конкретных видах профессиональной деятельности.\n" +
            "У каждого человека преобладает определенный тип мышления. Данный тест поможет вам определить тип своего мышления. " +
            "Если вы согласны с высказыванием, то ставите “+”, если не согласны – “-“.",
          link: '/second-test'
        },
      ],
    };
  },
};
</script>
