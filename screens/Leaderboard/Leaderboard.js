import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable, SegmentedButtons } from 'react-native-paper';
import CustomSegmentedButtons from '../../components/CustomSegmentedButtons/CustomSegmentedButtons';

const usersDummy = [
    {
        id: '1',
        name: 'Danyal',
        score: 10000
    },
    {
        id: '2',
        name: 'Danyal',
        score: 10000
    },
    {
        id: '3',
        name: 'Danyal',
        score: 10000
    },
]

const datesDummy = [
    {
        id: '1',
        name: 'Son Ay'
    },
    {
        id: '2',
        name: 'Son 3 Ay'
    },
    {
        id: '3',
        name: 'Son Yıl'
    },
    {
        id: '4',
        name: 'Tüm zamanlar'
    }
]

const Leaderboard = () => {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

    const [buttonValue, setButtonValue] = useState('');

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
        <View>
            <View style={{ margin : 15 }}>
                <CustomSegmentedButtons buttons={[
                        {
                            icon: 'walk',
                            value: 'walk',
                            label: 'Bu ay',
                        },
                        {
                            icon: 'walk',
                            value: 'train',
                            label: 'Son 6 Ay',
                        },
                        { 
                            icon: 'walk',
                            value: 'drive',
                            label: 'Tüm zamanlar'
                        },
                    ]}></CustomSegmentedButtons>
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
        </View>
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
});
