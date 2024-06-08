import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import { DataTable, SegmentedButtons } from 'react-native-paper';
import CustomSegmentedButtons from '../../components/CustomSegmentedButtons/CustomSegmentedButtons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import owl1 from '../../assets/img/owls/1.png';
import owl2 from '../../assets/img/owls/2.png';
import owl3 from '../../assets/img/owls/3.png';
import owl4 from '../../assets/img/owls/4.png';
import owl5 from '../../assets/img/owls/5.png';
import owl6 from '../../assets/img/owls/6.png';

const Leaderboard = () => {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

    const [buttonValue, setButtonValue] = useState('');

    const [segmentedButtonsValue, setSegmentedButtonsValue] = useState('walk');

    const [items] = useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    return (
        <ScrollView>
            <View style={{
                backgroundColor: 'blue',
                paddingBottom: 50,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
            }}>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 30 }}>
                    <View style={[styles.rankItem, { width: '33%', alignItems: 'center' }]}>
                        <Image source={owl1} style={{ width: '100%', height: 75, objectFit: 'contain' }}></Image>
                        <Text style={styles.rankText}>Owlet</Text>
                        <View style={styles.rankScoreContainer}>
                            <MaterialCommunityIcons name={'trophy'} color={'white'} size={24} />
                            <Text style={styles.rankScore}>250</Text>
                        </View>
                    </View>

                    <View style={[styles.rankItem, { width: '33%', alignItems: 'center' }]}>
                        <Image source={owl2} style={{ width: '100%', height: 75, objectFit: 'contain' }}></Image>
                        <Text style={styles.rankText}>Night Observer</Text>
                        <View style={styles.rankScoreContainer}>
                            <MaterialCommunityIcons name={'trophy'} color={'white'} size={24} />
                            <Text style={styles.rankScore}>750</Text>
                        </View>
                    </View>

                    <View style={[styles.rankItem, { width: '34%', alignItems: 'center' }]}>
                        <Image source={owl3} style={{ width: '100%', height: 75, objectFit: 'contain' }}></Image>
                        <Text style={styles.rankText}>Wisdom Bearer</Text>
                        <View style={styles.rankScoreContainer}>
                            <MaterialCommunityIcons name={'trophy'} color={'white'} size={24} />
                            <Text style={styles.rankScore}>1.500</Text>
                        </View>
                    </View>

                    <View style={[styles.rankItem, { width: '33%', alignItems: 'center' }]}>
                        <Image source={owl4} style={{ width: '100%', height: 75, objectFit: 'contain' }}></Image>
                        <Text style={styles.rankText}>Forest Sage</Text>
                        <View style={styles.rankScoreContainer}>
                            <MaterialCommunityIcons name={'trophy'} color={'white'} size={24} />
                            <Text style={styles.rankScore}>3.000</Text>
                        </View>
                    </View>

                    <View style={[styles.rankItem, { width: '33%', alignItems: 'center' }]}>
                        <Image source={owl5} style={{ width: '100%', height: 75, objectFit: 'contain' }}></Image>
                        <Text style={styles.rankText}>Moonlight Guide</Text>
                        <View style={styles.rankScoreContainer}>
                            <MaterialCommunityIcons name={'trophy'} color={'white'} size={24} />
                            <Text style={styles.rankScore}>5.000</Text>
                        </View>
                    </View>

                    <View style={[styles.rankItem, { width: '34%', alignItems: 'center' }]}>
                        <Image source={owl6} style={{ width: '100%', height: 75, objectFit: 'contain' }}></Image>
                        <Text style={styles.rankText}>Master of Wisdom</Text>
                        <View style={styles.rankScoreContainer}>
                            <MaterialCommunityIcons name={'trophy'} color={'white'} size={24} />
                            <Text style={styles.rankScore}>10.000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={styles.headerText}>Dessert</DataTable.Title>
                    <DataTable.Title numeric style={styles.headerText}>Calories</DataTable.Title>
                    <DataTable.Title numeric style={styles.headerText}>Fat</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key}>
                        <DataTable.Cell style={styles.cellText}>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.cellText}>{item.calories}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.cellText}>{item.fat}</DataTable.Cell>
                    </DataTable.Row>
                ))}

                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>
        </ScrollView>
    )
}

export default Leaderboard;

const styles = StyleSheet.create({
    headerText: {
        color: 'black', // Başlık yazı rengini siyah yap
    },
    cellText: {
        color: 'black', // Hücre içeriği yazı rengini siyah yap
    },

    rankItem: {
        marginTop: 15,
        justifyContent: 'space-around'
    },

    rankText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    rankScoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    rankScore: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5
    }
});
