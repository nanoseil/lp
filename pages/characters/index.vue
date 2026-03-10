<script setup lang="ts">
import { ref } from "vue";

useHead({
  title: "Characters",
});

const sonoka = {
  name: "七霧 ソノカ",
  nameRoman: "Nanagiri Sonoka",
  codename: "Blue Mist",
  codenameJa: "ブルー・ミスト",
  affiliation: "Nanoseil",
  species: "Materialized Avatar",
  speciesJa: "電子実体",
  roles: [
    { label: "表", description: "バーチャル・アーティスト / モデル" },
    { label: "裏", description: "現実世界の電子犯罪や異常現象を解決するエージェント" },
  ],
  specs: [
    { label: "身長", value: "188 cm" },
    { label: "髪", value: "シアンブルー → マゼンタパープル（グラデーション）" },
    { label: "瞳", value: "アメジスト・パープル" },
  ],
  personality:
    "クールな異邦の英雄であり、気さくな現代っ子。地球の生活環境（サイズ感や食文化）に少し戸惑いを見せることも。",
  costumes: [
    {
      label: "Default",
      description:
        "Nanoseil・カスタムスーツ（白黒基調、フォトンライン、フレアスリーブ）",
    },
    {
      label: "School",
      description: "潜入用学生服（ネイビーのボレロ、超ミニスカート）",
    },
    {
      label: "Casual",
      description: "メンズXXLパーカー、オーバーサイズTシャツなど",
    },
  ],
  abilities: [
    { label: "現実へのログイン", description: "具現化" },
    { label: "武装展開", description: "Install" },
    { label: "重力制御", description: "壁走り、空中ダッシュ等" },
  ],
  voiceLines: [
    "ログイン完了。今日も、よろしくお願いします。",
    "Blue Mist、起動確認。ミッション、開始します。",
    "こんな大きなハンバーガー……どうやって食べるんですか？",
    "地球の重力、まだ少し慣れませんね。",
    "武装展開——インストール、完了。",
    "このサイズ感……地球基準は難しいです。",
    "異常なし。引き続き、監視を継続します。",
    "クリエイティブも、エージェント業務も、手は抜きません。",
    "壁？走れます。空中？ダッシュできます。問題ありません。",
    "お任せください。現実へのログイン——展開します。",
  ],
};

const currentVoiceLine = ref<string | null>(null);

function rollVoiceLine() {
  if (sonoka.voiceLines.length === 0) return;
  const pool = sonoka.voiceLines.filter((l) => l !== currentVoiceLine.value);
  const source = pool.length > 0 ? pool : sonoka.voiceLines;
  currentVoiceLine.value = source[Math.floor(Math.random() * source.length)];
}
</script>

<template>
  <div>
    <v-container class="border-b my-8">
      <h1 class="tk-gravesend-sans my-16 text-h1 font-weight-thin">
        Characters
      </h1>
    </v-container>

    <v-sheet color="background" class="py-8">
      <v-container>
        <v-row>
          <!-- Main visual column (立ち絵) -->
          <v-col cols="12" md="4" class="d-flex flex-column">
            <div class="visual-area d-flex align-center justify-center flex-grow-1">
              <div class="visual-placeholder d-flex flex-column align-center justify-center">
                <v-icon size="64" color="acc1" class="mb-3">mdi-account-outline</v-icon>
                <span class="text-caption text-medium-emphasis">Main Visual</span>
              </div>
            </div>
          </v-col>

          <!-- Profile column -->
          <v-col cols="12" md="8">
            <!-- Character header -->
            <div class="character-stripe mb-4">
              <p class="text-overline text-acc1 mb-1">
                {{ sonoka.codename }} / {{ sonoka.codenameJa }}
              </p>
              <h2 class="tk-gravesend-sans text-h2 font-weight-thin mb-1">
                {{ sonoka.nameRoman }}
              </h2>
              <h3 class="text-h4 font-weight-light mb-4">{{ sonoka.name }}</h3>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-6">
              <v-chip variant="outlined" color="acc1" size="small">
                {{ sonoka.affiliation }}
              </v-chip>
              <v-chip variant="outlined" color="acc2" size="small">
                {{ sonoka.speciesJa }} / {{ sonoka.species }}
              </v-chip>
            </div>

            <v-divider class="mb-6" />

            <v-row>
              <!-- Roles + Specs -->
              <v-col cols="12" sm="5">
                <h4 class="text-overline text-acc1 mb-3">役割</h4>
                <div class="mb-6">
                  <div
                    v-for="role in sonoka.roles"
                    :key="role.label"
                    class="d-flex align-start mb-3"
                  >
                    <v-chip
                      class="me-3 flex-shrink-0"
                      color="acc2"
                      variant="tonal"
                      size="small"
                      label
                    >{{ role.label }}</v-chip>
                    <span class="text-body-2">{{ role.description }}</span>
                  </div>
                </div>

                <h4 class="text-overline text-acc1 mb-3">身体スペック</h4>
                <v-list density="compact" class="mb-6 pa-0 bg-transparent">
                  <v-list-item
                    v-for="spec in sonoka.specs"
                    :key="spec.label"
                    class="px-0"
                  >
                    <template #prepend>
                      <span class="text-caption text-medium-emphasis me-4 spec-label">{{ spec.label }}</span>
                    </template>
                    <v-list-item-title class="text-body-2">{{ spec.value }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <!-- Personality + Costumes + Abilities -->
              <v-col cols="12" sm="7">
                <h4 class="text-overline text-acc1 mb-3">性格</h4>
                <p class="text-body-1 mb-6">{{ sonoka.personality }}</p>

                <h4 class="text-overline text-acc1 mb-3">衣装設定</h4>
                <div class="mb-6">
                  <div
                    v-for="costume in sonoka.costumes"
                    :key="costume.label"
                    class="costume-item mb-2 pa-3"
                  >
                    <span class="text-subtitle-2 tk-gravesend-sans me-2">{{ costume.label }}</span>
                    <span class="text-body-2 text-medium-emphasis">{{ costume.description }}</span>
                  </div>
                </div>

                <h4 class="text-overline text-acc1 mb-3">能力</h4>
                <div class="d-flex flex-column gap-2">
                  <div
                    v-for="ability in sonoka.abilities"
                    :key="ability.label"
                    class="ability-card pa-3"
                  >
                    <span class="text-subtitle-2 font-weight-bold me-2">{{ ability.label }}</span>
                    <span class="text-caption text-medium-emphasis">{{ ability.description }}</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider class="my-8" />

        <!-- Voice lines -->
        <v-row>
          <v-col cols="12">
            <h4 class="text-overline text-acc1 mb-4">ボイスライン</h4>
          </v-col>
          <v-col cols="12" md="8">
            <v-card
              variant="outlined"
              class="voice-card pa-6 mb-4"
              min-height="100"
            >
              <transition name="voice-fade" mode="out-in">
                <p
                  v-if="currentVoiceLine"
                  :key="currentVoiceLine"
                  class="text-h6 font-weight-light"
                >
                  「{{ currentVoiceLine }}」
                </p>
                <p v-else class="text-body-1 text-medium-emphasis font-italic">
                  ボタンを押してセリフを聞いてみよう
                </p>
              </transition>
            </v-card>
            <v-btn
              @click="rollVoiceLine"
              variant="outlined"
              color="acc1"
              prepend-icon="mdi-play-circle-outline"
              class="tk-gravesend-sans"
            >
              セリフを再生
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.character-stripe {
  position: relative;
  padding-left: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgb(var(--v-theme-acc1)) 0%,
      rgb(var(--v-theme-acc1)) 50%,
      rgb(var(--v-theme-acc2)) 50%,
      rgb(var(--v-theme-acc2)) 100%
    );
  }
}

.ability-card {
  border-left: 2px solid rgb(var(--v-theme-acc2));
  background: rgba(var(--v-theme-acc2), 0.05);
}

.spec-label {
  min-width: 2.5rem;
}

.visual-area {
  min-height: 400px;
  border: 1px dashed rgba(var(--v-theme-main), 0.3);
  border-radius: 4px;
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-acc1), 0.04) 0%,
    rgba(var(--v-theme-acc2), 0.04) 100%
  );
}

.visual-placeholder {
  opacity: 0.4;
}

.costume-item {
  border-left: 2px solid rgba(var(--v-theme-main), 0.2);
}

.voice-card {
  border-color: rgba(var(--v-theme-acc1), 0.4);
  background: rgba(var(--v-theme-acc1), 0.03);
}

.voice-fade-enter-active,
.voice-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.voice-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.voice-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
