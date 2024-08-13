import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Platform,
  StyleProp,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { useTheme } from './CountryTheme'
import { useAssets } from 'expo-asset'

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
})

interface CloseButtonProps {
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  image?: ImageSourcePropType
  onPress?(): void
}

const CloseButtonAndroid: React.FC<CloseButtonProps> = (props) => {
  const { onBackgroundTextColor } = useTheme()
  const [assets, error] = useAssets([
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../assets/images/close.android.png'),
  ])
  const defaultImage: ImageSourcePropType | undefined = assets
    ? { uri: assets[0].uri }
    : undefined
  return (
    !error && (
      <View style={[styles.container, props.style]}>
        <TouchableNativeFeedback
          background={
            typeof Platform.Version === 'number' && Platform.Version < 21
              ? TouchableNativeFeedback.SelectableBackground()
              : TouchableNativeFeedback.SelectableBackgroundBorderless()
          }
          onPress={props.onPress}
        >
          <View>
            <Image
              source={props.image ?? defaultImage}
              style={[
                styles.imageStyle,
                props.imageStyle,
                { tintColor: onBackgroundTextColor },
              ]}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  )
}

const CloseButtonIOS: React.FC<CloseButtonProps> = (props) => {
  const { onBackgroundTextColor } = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const [assets, error] = useAssets([require('../assets/images/close.ios.png')])
  const defaultImage: ImageSourcePropType | undefined = assets
    ? { uri: assets[0].uri }
    : undefined

  return (
    !error && (
      <View style={[styles.container, props.style]}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={props.image ?? defaultImage}
            style={[
              styles.imageStyle,
              props.imageStyle,
              { tintColor: onBackgroundTextColor },
            ]}
          />
        </TouchableOpacity>
      </View>
    )
  )
}

export default Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS,
  default: CloseButtonIOS,
})
