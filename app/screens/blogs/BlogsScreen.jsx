import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { TypeScrollView, HorizontalBlogCard, HorizontalBlogCardSkeleton, BannerButton } from 'components'

import styles from './BlogsScreenStyles'
import { app_sp, app_c } from 'globals/styles'
import { useSelector } from 'react-redux'
import { selectCurrentLanguage } from 'redux/language/LanguageSlice'

const BlogsScreen = () => {
  const langCode = useSelector(selectCurrentLanguage).languageCode
  const langData = useSelector(selectCurrentLanguage).data?.blogsScreen

  const [currentBlogs, setCurrentBlogs] = React.useState([]);
  const [type, setType] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setCurrentBlogs([...blogs]);
    }, 2000);
  }, []);

  return (
    <ScrollView
      style={styles.scroll_view_container}
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
    >
      <View style={{...app_sp.mh_18}}>
        <BannerButton
          typeOfButton="highlight"
          style={app_sp.mt_12}
          setRightIcon={(isActive, currentLabelStyle) =>
            <Ionicons name="chevron-forward-outline" style={currentLabelStyle} size={25} />
          }
        >
          {langData.banner_button[langCode]}
        </BannerButton>
      </View>
      <View style={{backgroundColor: app_c.HEX.primary, ...app_sp.mv_10}}>
        <TypeScrollView
          types='all;newest;popular;most_likes;most_comments'
          callBack={setType}
          style={{...app_sp.ms_18, ...app_sp.pv_12}}
        />
      </View>

      <View style={{...app_sp.mh_18, ...app_sp.mb_12}}>
        {
          currentBlogs.length === 0
          ? [1, 2, 3].map((value, index) => <HorizontalBlogCardSkeleton key={value + index} />)
          : currentBlogs.map((blog, index) => <HorizontalBlogCard blog={blog} key={blog.id} />)
        }
      </View>

      <View style={{height: 100}}></View>
    </ScrollView>
  )
}

export default BlogsScreen

const blogs = [
  {
    id: 'b1',
    user: {
      id: 'user1',
      name: 'Lost Teach',
      avatar: ''
    },
    name: 'Top 10 dia diem neu ghe qua khi du lich o Dong Nai',
    avatar: '',
    createdAt: 1675908513000,
    readTime: 480,
    isLiked: true
  },
  {
    id: 'b2',
    user: {
      id: 'user2',
      name: 'Du Lich Bui',
      avatar: ''
    },
    name: 'Nhung con duong nhon nhip nhat o Dong Nai',
    avatar: '',
    createdAt: 1675217313000,
    readTime: 300,
    isLiked: false
  },
  {
    id: 'b3',
    user: {
      id: 'user3',
      name: 'Bac Thay Du Lich',
      avatar: ''
    },
    name: 'Cac quan an hap dan nen thu khi den Dong Nai',
    avatar: '',
    createdAt: 1674353313000,
    readTime: 300,
    isLiked: false
  }
]