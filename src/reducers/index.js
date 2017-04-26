import { combineReducers } from 'redux'
import stops from './stops'
import mapCenter from './mapCenter'
import results from './results'
import schedule from './schedule'

const auditorApp = combineReducers({stops, mapCenter, results, schedule})

export default auditorApp
