import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const usersDummy = [
  {
    id: '1',
    name: 'Danyal'
  },
  {
    id: '2',
    name: 'Danyal'
  },

  {
    id: '3',
    name: 'Danyal'
  },
]

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ direction: 'ltr' }}>
        <MaterialCommunityIcons style={styles.socialMediaIcon} name={'account-settings'} color={'black'} size={28} />
      </View>

      <View style={[styles.section, { borderWidth: 0 }]}>
        <View style={styles.imgContainer}>
          <FontAwesome name={"user-circle-o"} size={128} color={'black'} />
        </View>
        <View style={styles.userSectionContainer}>
          <Text style={styles.sectionTitle}>Danyal Can</Text>
          <Text style={{ color: 'gray', fontSize: 18 }}>lothunia</Text>
          <Text style={{ color: 'gray', fontSize: 18 }}>Ağustos 2021 tarihinde katıldı</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={styles.followerText}>5 Takip Edilen</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.followerText}>5 Takipçi</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={[styles.button, { marginTop: 10, justifyContent: 'space-between' }]}>
              <MaterialCommunityIcons name={'account-plus'} color={'white'} size={30} />
              <Text style={styles.buttonText}>ARKADAŞ EKLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>İstatistikler</Text>
        </View>

        <View style={styles.achievementsContainer}>
          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'fire'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>7</Text>
              <Text style={styles.achievement}>Günlük Seri</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
              <Text style={styles.achievement}>Lig Puanı</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'trophy-award'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>Mistik</Text>
              <Text style={styles.achievement}>En Yüksek Lig</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'clock'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>35D 7H</Text>
              <Text style={styles.achievement}>Top. Çalışma</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Başarımlar</Text>
          <TouchableOpacity>
            <Text style={styles.sectionTitle}>Tümünü Göster</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Arkadaş Önerileri</Text>
          <TouchableOpacity>
            <Text style={styles.sectionTitle}>Tümünü Göster</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.friendsContainer}
          horizontal
          data={usersDummy}
          renderItem={({ item }) => <FriendListItem user={item} />}
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  )
}

const FriendListItem = ({ user }) => {
  return (
    <View style={styles.friendContainer}>
      <FontAwesome name={"user-circle-o"} size={36} color={'black'} />
      <Text style={{ color: 'black', fontSize: 18 }}>{user.name}</Text>
      <View>
        <TouchableOpacity style={[styles.button, { marginTop: 10, justifyContent: 'space-between' }]}>
          <MaterialCommunityIcons name={'account-plus'} color={'white'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    alignItems: 'center'
  },
  section: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 25
  },
  userSectionContainer: {
    justifyContent: 'space-between',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600'
  },
  followerText: {
    color: 'blue',
    fontWeight: '600'
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'blue',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    marginLeft: 5
  },
  achievementsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  achievementContainer: {
    width: '45%',
    margin: 5,
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  achievement: {
    color: 'gray'
  },
  friendsContainer: {
    flexDirection: 'row',
  },
  friendContainer: {
    alignItems: 'center',
    width : 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5
  }
})
