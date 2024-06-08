import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { Checkbox } from 'react-native-paper';
import { AuthContext } from '../../contexts/AuthContext';
import { List } from 'react-native-paper';

const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [checked, setChecked] = useState('unchecked');

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const { userToken } = useContext(AuthContext)

    const handleGetCollections = () => {
        fetch("http://10.0.2.2:5290/api/Task/Collections", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + userToken,
            },
        }).then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    console.log("Başarılı - Collections")
                }
                console.log(res)
                console.log(res.data.tasks)
                setCollections(res.data)
            });
    };

    useEffect(() => {
        handleGetCollections()
    }, [])

    return (
        <View>
            <List.Section title="Collections">
                {collections && collections.map(c => (
                    <List.Accordion
                        key={c.id}
                        title={c.title}
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}
                    >
                        <View>
                            {c.tasks && c.tasks.map(t => (
                                <View key={t.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Checkbox
                                        status={false}
                                        onPress={() => handleCheckboxPress(c.id, t.id)}
                                    />
                                    <Text style={{ color: 'black', fontSize: 18 }}>{t.name}</Text>
                                </View>
                            ))}
                        </View>
                    </List.Accordion>
                ))}
            </List.Section>

        </View>
    )
}

export default Collection

const styles = StyleSheet.create({})