import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const sendRequest = () => {
        PostWithoutAuth(("https://localhost:7048/api/Auth/Register"),{
            email: email,
            firstName: firstName,
            lastName: lastName,
            password:password
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.success){
                    setError(null)
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


    const handleRegister = () => {
        if (password === repassword) {
            sendRequest()
        }
        else {
            console.log("Şifreler aynı değil.")
        }
        
        setEmail("")
        setFirstName("")
        setLastName("")
        setPassword("")
    }

    useEffect(() => {
    },[email,password,error])


    return (
        <View>
            <Text>Register</Text>
            <View>
                <TextInput placeholder='Mail Address'></TextInput>
                <TextInput placeholder='Username'></TextInput>
                <TextInput placeholder='Password'></TextInput>
                <TextInput placeholder='Re-Password'></TextInput>
                <Button title='Register'></Button>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})