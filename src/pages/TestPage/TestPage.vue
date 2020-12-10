<template>
  <v-container>
    <v-row>
      <v-col cols="10" offset="1">
        <transition name="fade" mode="out-in">
          <v-card>
            <v-card-text>
              <p>{{ tests[id].title }}</p>
              <p>{{ tests[id].description }}</p>
              <p>{{ tests[id].question }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                :disabled="id === tests.length - 1"
                @click="id++"
                >Next</v-btn
              >
              <v-btn
                color="secondary"
                :disabled="id === 0"
                @click="id--"
                >Prev</v-btn
              >
            </v-card-actions>
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TestPage",
  data() {
    return {
      id: 0,
      title: "title",
      description: "description",
      question: "question",
      tests: [
        {
          id: 0,
          title: "Карта интересов для младших школьников",
          description:
            "Для того, чтобы дать вам правильный совет и конкретные рекомендации для развития способностей " +
            "вашего ребёнка, нам нужно знать его склонности. Вам предлагается 35 вопросов, подумайте и ответьте на " +
            "каждый из них, стараясь не завышать и не занижать возможности ребёнка. Для большей  объективности сравните " +
            "его с другими детьми того же возраста.",
          link: "/first-test",
          question: "question1",
        },
        {
          id: 1,
          title: "Методика «Тип мышления»",
          description:
            "Диагностика типа мышления респондента. Тип мышления – индивидуальный способ преобразования информации. " +
            "Зная свой тип мышления, можно прогнозировать успешность в конкретных видах профессиональной деятельности.\n" +
            "У каждого человека преобладает определенный тип мышления. Данный тест поможет вам определить тип своего мышления. " +
            "Если вы согласны с высказыванием, то ставите “+”, если не согласны – “-“.",
          link: "/second-test",
          question: "question2",
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style src="./TestPage.scss" lang="scss"></style>
