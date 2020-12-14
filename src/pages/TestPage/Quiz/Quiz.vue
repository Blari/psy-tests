<template>
  <v-card-text>
    <div v-for="(question, index) in questions" :key="question.q" :class="answers[question.id] ? 'pass' : null">
      <p class="text-body-1 font-weight-medium">{{index + 1 + ') ' + question.q }}</p>
      <v-container fluid>
        <v-row no-gutters justify="space-around">
          <v-col cols="3" v-for="(answers, index) in question.a" :key="index">
            <v-btn color="primary" block @click="click(question.id, index, $event)">{{ answers }}</v-btn>
          </v-col>
        </v-row>
        <hr class="my-3">
      </v-container>
    </div>
  </v-card-text>
</template>

<script>
export default {
  name: "Quiz",
  props: ['questions'],
  data() {
    return {
      answers: []
    }
  },
  methods: {
    click: function(id, answer, e) {
      this.answers[id] = answer;
      console.log(e)
    }
  }
}
</script>

<style src="./Quiz.scss" lang="scss" scoped>

</style>
