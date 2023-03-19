import { app_c, app_dms, app_sh, app_typo } from 'globals/styles'

import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: app_c.HEX.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 4,
    color: 'white',
    backgroundColor: 'blue',
    marginVertical: 8,
  },
})