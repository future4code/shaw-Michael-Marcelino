import {useNavigate} from 'react-router-dom'
import { goBackHome} from "../routes/coordinator";
import React,{ useState}  from "react";
import axios from 'axios';
import { BASE_URL } from '../Constant/constants';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
    Avatar,
  FormControl,  
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Footer from '../Components/Footer';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //const history = useNavigate()

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const body ={
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}login`, body)
  .then((res) => {
      console.log('deu certo',res.data.token);
      localStorage.setItem('token', res.data.token)
      navigate("/admin/trips/list") 
      
  }).catch((err) => {
    console.log('deu certo', err.response);
  })
  }

  
    return (
      <div>       
        <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.500" />
        <Heading color="blue.500">Bem Vindo</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" onChange={getEmail} value={email} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input type="password" placeholder="Password"  onChange={getPassword} value={password} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm"  >
                      {/* {password ? "Hide" : "Show"} */}
                    </Button>
                    
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                onClick={onSubmitLogin}
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Login
              </Button>
              <Button onClick={() => goBackHome(navigate)}>Voltar</Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    <Footer/>
      </div>
    );
  }