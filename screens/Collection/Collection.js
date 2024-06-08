import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { Checkbox } from 'react-native-paper';
import { AuthContext } from '../../contexts/AuthContext';
import { FAB, Dialog, Button, TextInput, List, Portal, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { GetWithAuth, PostWithAuth } from '../../services/HttpService';

const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expanded, setExpanded] = useState(true);

    const { userToken } = useContext(AuthContext);

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const handlePress = (id) => {
        if (expanded == id) {
            setExpanded(null);
        }
        else {
            setExpanded(id);
        }
    }

    const [isDialogVisible, setDialogVisible] = useState(false);
    const [isTaskDialogVisible, setTaskDialogVisible] = useState(false);

    const [collectionName, setCollectionName] = useState('');
    const [description, setDescription] = useState('');

    const [taskName, setTaskName] = useState('');

    const handleGetCollections = () => {
        GetWithAuth("/api/Task/Collections").then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    console.log("Başarılı - Collections");
                    setCollections(res.data);  // Assuming the collections are in res.data
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log("Error fetching collections:", error);
                setIsLoading(false);
            });
    };

    const handleChangeTaskStatus = (id) => {
        console.log(id)
        PostWithAuth(`/api/Task/changeStatus/${id}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    console.log("Başarılı - Status Changed");
                    handleGetCollections();
                } else {
                    console.log("Başarısız - Task Status");
                }
            }).catch(error => {
                console.log("Error changing task status:", error);
            });
    };

    const handleCreateNewCollection = () => {
        PostWithAuth("/api/Task/Collections", {
            title: collectionName,
            description: description
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    console.log(result.message);
                    handleGetCollections();
                } else {
                    console.log(result.message);
                }
            })
            .catch((err) => console.log(err.message));
        hideDialog();
    }

    const handleTaskCreate = () => {
        PostWithAuth("/api/Task", {
            collectionId: expanded,
            name: taskName
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    console.log(result.message);
                    handleGetCollections();
                } else {
                    console.log(result.message);
                }
            })
            .catch((err) => console.log(err.message));
        hideTaskDialog();
    }

    const showDialog = () => { setDialogVisible(true); }

    const hideDialog = () => { setDialogVisible(false); }

    const showTaskDialog = () => { setTaskDialogVisible(true); }

    const hideTaskDialog = () => { setTaskDialogVisible(false); }

    useEffect(() => {
        handleGetCollections();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator animating={true} size={'large'} color={MD2Colors.blue400} />
                    <Text style={{ color: 'black' }}>Loading...</Text>
                </View>
            ) : (
                <List.Section title="Collections">
                    {collections && collections.map(c => (
                        <List.Accordion
                            key={c.id}
                            title={c.title}
                            left={props => <List.Icon {...props} icon="rhombus-split" />}
                            expanded={expanded == c.id ? true : false}
                            onPress={() => handlePress(c.id)}
                        >
                            <View>
                                {c.tasks && c.tasks.map(t => (
                                    <View key={t.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Checkbox
                                            status={t.isCompleted ? 'checked' : 'unchecked'}
                                            onPress={() => handleChangeTaskStatus(t.id)}
                                        />
                                        <Text style={t.isCompleted ? styles.completedText : styles.normalText}>{t.name}</Text>
                                    </View>
                                ))}
                            </View>
                            <View>
                                <Button key={c.id} icon="checkbox-marked-circle-plus-outline" mode="contained" onPress={() => showTaskDialog()}>
                                    Add new task...
                                </Button>
                            </View>
                        </List.Accordion>
                    ))}
                </List.Section>
            )}

            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => showDialog()}
            />

            <Portal>
                <Dialog visible={isDialogVisible} onDismiss={hideDialog}>
                    <Dialog.Title>New Collection</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            label="Collection Name"
                            placeholder='ex: My Collection'
                            value={collectionName}
                            onChangeText={text => setCollectionName(text)}
                        />

                        <TextInput
                            label="Description"
                            placeholder='ex: Daily'
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleCreateNewCollection}>SAVE</Button>
                    </Dialog.Actions>
                </Dialog>

                <Dialog visible={isTaskDialogVisible} onDismiss={hideTaskDialog}>
                    <Dialog.Title>New Collection</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            label="Task"
                            placeholder='ex: Finish math project'
                            value={taskName}
                            onChangeText={text => setTaskName(text)}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleTaskCreate}>SAVE</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

export default Collection;

const styles = StyleSheet.create({
    normalText: {
        color: 'black',
        fontSize: 18
    },
    completedText: {
        color: 'black',
        fontSize: 18,
        textDecorationLine: 'line-through'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
