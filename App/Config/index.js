import { Text } from 'react-native'
import DebugConfig from './DebugConfig'
import AppConfig from './AppConfig'

// Allow/disallow font-scaling in app
Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling

if (__DEV__) {
    console.disableYellowBox = !DebugConfig.yellowBox
}
