import { sidebar } from '../../src/node/helpers'
export default sidebar([
  {
    text: 'Guide',
    icon: 'bi-lightbulb',
    prefix: 'guide/',
    collapsible: true,
    expanded: true,
    children: 'structure'
  },
  {
    text: 'Form',
    prefix: 'form/',
    children: 'structure'
  },
  {
    text: 'Reference',
    prefix: 'reference/',
    collapsible: true,
    expanded: false,
    children: 'structure'
  },
  {
    text: 'Ui',
    prefix: 'ui/',
    collapsible: true,
    expanded: true,
    children: 'structure'
  }
])
