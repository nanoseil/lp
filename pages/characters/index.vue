<script setup lang="ts">
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
};
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
        <!-- Character header -->
        <v-row class="mb-8">
          <v-col cols="12" md="7">
            <div class="character-stripe mb-4">
              <p class="text-overline text-acc1 mb-1">
                {{ sonoka.codename }} / {{ sonoka.codenameJa }}
              </p>
              <h2 class="tk-gravesend-sans text-h2 font-weight-thin mb-1">
                {{ sonoka.nameRoman }}
              </h2>
              <h3 class="text-h4 font-weight-light mb-4">{{ sonoka.name }}</h3>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <v-chip variant="outlined" color="acc1" size="small">
                {{ sonoka.affiliation }}
              </v-chip>
              <v-chip variant="outlined" color="acc2" size="small">
                {{ sonoka.speciesJa }} / {{ sonoka.species }}
              </v-chip>
            </div>
          </v-col>
        </v-row>

        <v-divider class="mb-8" />

        <v-row>
          <!-- Left column: specs + roles -->
          <v-col cols="12" md="4">
            <!-- Roles -->
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

            <!-- Physical specs -->
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

          <!-- Right column: personality + costumes + abilities -->
          <v-col cols="12" md="8">
            <!-- Personality -->
            <h4 class="text-overline text-acc1 mb-3">性格</h4>
            <p class="text-body-1 mb-6">{{ sonoka.personality }}</p>

            <!-- Costumes -->
            <h4 class="text-overline text-acc1 mb-3">衣装設定</h4>
            <v-row class="mb-6">
              <v-col
                v-for="costume in sonoka.costumes"
                :key="costume.label"
                cols="12"
                sm="4"
              >
                <v-card variant="outlined" class="h-100">
                  <v-card-title class="text-subtitle-2 tk-gravesend-sans pb-1">
                    {{ costume.label }}
                  </v-card-title>
                  <v-card-text class="text-body-2">
                    {{ costume.description }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Abilities -->
            <h4 class="text-overline text-acc1 mb-3">能力</h4>
            <v-row>
              <v-col
                v-for="ability in sonoka.abilities"
                :key="ability.label"
                cols="12"
                sm="4"
              >
                <div class="ability-card pa-3">
                  <p class="text-subtitle-2 font-weight-bold mb-1">{{ ability.label }}</p>
                  <p class="text-caption text-medium-emphasis">{{ ability.description }}</p>
                </div>
              </v-col>
            </v-row>
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
</style>
