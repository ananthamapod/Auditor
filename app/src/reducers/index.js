import { combineReducers } from 'redux'
import stops from './stops'
import mapCenter from './mapCenter'
import schedule from './schedule'
import subject from './subject'
import search from './search'

const auditorApp = combineReducers({stops, mapCenter, schedule, subject, search})

export default auditorApp
