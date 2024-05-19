import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const sendRequest = () => {
        PostWithoutAuth(("https://localhost:7048/api/Auth/Login"),{
            email: email,
            password:password
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.success){
                    setError(null)
                    localStorage.setItem("tokenKey", result.data.token);
                    setSuccess(result.message)
                    navigate("/")
                }
                else {
                    setSuccess(null)
                    console.log(result.message)
                    setError(result.message)
                }
                
            }).catch((err) => console.log(err.message))
    }


    const handleLogin = () => {
        sendRequest()
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
    },[email,password,error])


    return (
        <View>
            <Text>Login</Text>
            <View>
                <CustomTextInput></CustomTextInput>
                <TextInput placeholder='Password'></TextInput>
                <Button title='Login'></Button>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})