<template>
  <v-container>
    <v-row>
      <v-col cols="10" offset="1">
        <template>
          <p class="text-h4 px-3">Профориентация</p>
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
      <v-col cols="10" offset="1">
        <template>
          <p class="text-h4 px-3">Личностные характеристики</p>
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
import { mapState } from 'vuex'

export default {
  name: "Dashboard",
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['tests'])
  },
};
</script>
