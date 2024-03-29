import { app_c, app_dms, app_sh, app_sp, app_typo } from 'globals/styles'

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: app_c.HEX.primary,
    
  },
  home_content: {
    width: '100%',
    paddingBottom:150
  },
  home_banner: {
    height:200,
    backgroundColor: app_c.HEX.ext_third,
    overflow:'hidden'

  },
  home_temperature: {
    paddingHorizontal:16,
    ...app_sp.mt_16,
    width: '100%',
    height: 64,
    ...app_sh.rounded_8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    
  },
  temperature: {
    width: app_dms.screenWidth * 0.72,
    height: app_dms.screenWidth * 0.17,
    flexDirection: 'row',
    backgroundColor: app_c.HEX.ext_primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    ...app_sh.rounded_8
  },
  temperature_degrees: {
    width: 120,
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  temperature_degrees_info:{
    ...app_typo.fonts.normal.normal.h1,
    color:app_c.HEX.ext_second,
  },
  temperature_other_info:{
  
  },
  temperature_other_info_half: {
    width:130,
    height: 20,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-around',
    // marginTop:3,
    
    
  },
  temperature_other_info_quarter:{
    flexDirection:'row',
    width:'60%',

  },
  temperature_other_info:{
    width:145,
  },

  temperature_reload: {
    width: app_dms.screenWidth * 0.17,
    height: app_dms.screenWidth * 0.17,
    backgroundColor: app_c.HEX.ext_primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...app_sh.rounded_8
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    ...app_sh.rounded_8
  },
  category_header: {
    ...app_sp.mt_12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    // paddingHorizontal:16,
    paddingLeft: 16,
  },
  category_name: {
    ...app_typo.fonts.normal.bolder.h3
  },
  category_option_list: {
    ...app_sp.mt_12
  },
  category_list_item:{ 
    ...app_sp.mt_12,
    
  }
 

})
export default styles