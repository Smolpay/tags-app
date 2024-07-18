<template>
  <div :class="tagBlock">
    <div v-if="title" :class="tagBlock + '__title'">{{ title }}</div>
    <div :class="[tagBlock + '__tags', tagBlock + '__tags--' + alignment]">
      <div v-for="(tag, index) in visibleTags" :key="index" :class="tagBlock + '__item'">
        <v-icon :class="tagBlock + '__icon'">mdi-circle-small</v-icon>
        <span :class="tagBlock + '__tag'">
          <v-icon v-if="tag.icon">{{ tag.icon }}</v-icon>
          {{ tag.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextTag',
  props: {
    tags: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    alignment: {
      type: String,
      default: 'left',
      validator: value => ['left', 'justify'].includes(value)
    }
  },
  data() {
    return {
      containerWidth: 0,
      tagWidths: []
    };
  },
  computed: {
    tagBlock() {
      return 'tag-list';
    },
    visibleTags() {
      let totalWidth = 0;
      const visible = [];

      for (let i = 0; i < this.tags.length; i++) {
        const tag = this.tags[i];
        const width = this.tagWidths[i] || 0;

        if (totalWidth + width > this.containerWidth) {
          break;
        }

        visible.push(tag);
        totalWidth += width;
      }

      return visible;
    }
  },
  mounted() {
    this.updateContainerWidth();
    window.addEventListener('resize', this.updateContainerWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateContainerWidth);
  },
  methods: {
    updateContainerWidth() {
      this.$nextTick(() => {
        this.containerWidth = this.$el.clientWidth;
        this.calculateTagWidths();
      });
    },
    calculateTagWidths() {
      this.tagWidths = Array.from(this.$el.querySelectorAll(`.${this.bemBlock}__tag`)).map(el => el.clientWidth + 32); // 32 = icon + margin-right
    }
  },
  watch: {
    tags: {
      immediate: true,
      handler() {
        this.$nextTick(this.calculateTagWidths);
      }
    }
  }
};
</script>

