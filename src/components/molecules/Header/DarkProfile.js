import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';
import { DummyDoctor1 } from '../../../assets';

const DarkProfile = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Alex Zumbro</Text>
        <Text style={styles.desc}>Dokter Anak </Text>
      </View>
      <Image style={styles.avatar} source={DummyDoctor1} />
    </View>
  )
}

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flex: 1
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 46 / 2
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle
  }
})