<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10" offset="0" offset-sm="1">
        <transition name="fade" mode="out-in">
          <v-card v-if="description">
            <TestDescription :test="tests[id]"/>
            <v-card-actions>
              <v-btn color="primary" block @click="description = !description">Начать Тестирование</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-else>
            <Quiz :questions="tests[id].questions" />
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import TestDescription from "@/pages/TestPage/TestDescription/TestDescription";
import Quiz from "@/pages/TestPage/Quiz/Quiz";

export default {
  name: "TestPage",
  components: {
    TestDescription, Quiz
  },
  data() {
    return {
      id: 0,
      description: true,
    };
  },
  computed: {
    ...mapState(['tests'])
  }
};
</script>

<style src="./TestPage.scss" lang="scss"></style>
