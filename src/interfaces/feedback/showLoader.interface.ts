import { Action } from 'redux'
import { SHOW_LOADER } from '../../config/actionTypes'

interface ShowLoaderInterface extends Action<typeof SHOW_LOADER> {payload: boolean;}

export default ShowLoaderInterface
