export const AboutCharts = () => import('../..\\components\\about\\about-charts.vue' /* webpackChunkName: "components/about-charts" */).then(c => wrapFunctional(c.default || c))
export const AboutGallery = () => import('../..\\components\\about\\about-gallery.vue' /* webpackChunkName: "components/about-gallery" */).then(c => wrapFunctional(c.default || c))
export const AboutText = () => import('../..\\components\\about\\about-text.vue' /* webpackChunkName: "components/about-text" */).then(c => wrapFunctional(c.default || c))
export const MainProgram = () => import('../..\\components\\main\\main-program.vue' /* webpackChunkName: "components/main-program" */).then(c => wrapFunctional(c.default || c))
export const MainSlider = () => import('../..\\components\\main\\main-slider.vue' /* webpackChunkName: "components/main-slider" */).then(c => wrapFunctional(c.default || c))
export const MainTable = () => import('../..\\components\\main\\main-table.vue' /* webpackChunkName: "components/main-table" */).then(c => wrapFunctional(c.default || c))
export const ChartsLineChart = () => import('../..\\components\\charts\\line-chart.vue' /* webpackChunkName: "components/charts-line-chart" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
