import customModel from '../processors/customModel'
import { number } from '../processors/formats'
import Chart from '../components/Chart/Chart.jsx'

import CustomSettingsModal from '../components/CustomSettingsModal/CustomSettingsModal.jsx'

export default [
  {
    group: 'Custom',
    title: 'Custom chart',
    processor: customModel,
    visualisation: Chart,
    // metrics spec and transforms are handled in the customModel
    metricNames: [],
    lineType: 'line',
    converted: false,
    conversionFunction: '',
    forceYAxis: false,
    percentage: false,
    cumulative: false,
    settingsComponent: CustomSettingsModal,
    yTickFormat: number,
  },
]
