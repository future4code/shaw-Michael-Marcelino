import axios from "axios";
import React,{ useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import { goBackAdmin, goBackList} from "../routes/coordinator";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Select
} from "@chakra-ui/react";
import {
  MdPhone,
  MdLocationOn,
  MdFacebook,
  MdOutlineDateRange,
  MdDateRange,
  MdCarRepair
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import Footer from '../Components/Footer';



export default function ApplicationFormPage () {
  const navigate = useNavigate();
  const [getTrip, setGetTrip] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [prof, setProf] = useState("");
  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const [viagem, setViagem] = useState("");
 

  const getName = (event) => {
    setName(event.target.value);
  };
  const getAge = (event) => {
    setAge(event.target.value);
  };
  const getProf = (event) => {
    setProf(event.target.value);
  };
  const getText = (event) => {
    setText(event.target.value);
  };
  const getCountry = (event) => {
    setCountry(event.target.value);
  };
  const getViagem = (event) => {
    setViagem(event.target.value);
  };
  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/nastia-b-shaw/trips")
      .then((res) => {
        console.log(res.data.trips);
        setGetTrip(res.data.trips,"")
        
      })
      .catch((err) => {
        alert(err.data.trips);
      });
  };

const applyToTrip =(viagem)=>{
    const body ={
        
            "name": name,
            "age": age,
            "applicationText":text ,
            "profession": prof,
            "country": country
        
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nastia-b-shaw/trips/${viagem}/apply`,body)
    .then((res)=>{
       alert("Usuario cadastrado com sucesso")
       setName("")
       setAge("")
       setCountry("")
       setViagem("")
       setText("")
       setProf("")
       setViagem("")

      console.log(res.data)
        
    })
    .catch((err)=>{
        console.log(err.data)
    })


}

  return (
    <div>
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={1}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
               <WrapItem> 
              <Box>
                <Heading>MD Space Travel</Heading>
                <Text mt={{ sm: 1, md: 1, lg: 5 }} color="gray.500">
                  Don't call me if the fuel runs out.
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={1} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdPhone color="#1970F1" size="20px" />}
                    >
                      +351 939511252
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={
                        <MdOutlineDateRange color="#1970F1" size="20px" />
                      }
                    >
                    Undefined, Narnia
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                    >
                      Jupter, Via Lactea
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start"
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#0D74FF" }}
                    icon={<MdFacebook size="28px" />}
                  />
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#0D74FF" }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#0D74FF" }}
                    icon={<BsDiscord size="28px" />}
                  />
                </HStack>
              </Box>
              </WrapItem> 
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                      <Select onChange={getViagem}>
                        <option value={""}>Escolha uma viagem</option>
                          {getTrip.map((trip) => {
                              return (
                              <option key={trip.id} value={viagem}>
                                  {trip.name}
                              </option>
                              )
                        })}
                        </Select>
                        <InputGroup  borderColor="#E0E1E7">
                          <InputLeftElement  
                            pointerEvents="none"
                            children={<BsPerson color="pink.800" />}
                          />
                          <Input  placeholder="Nome" 
                          type="text"onChange={getName} value={name}
                          size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="age">                      
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdDateRange color="gray.800"
                            type="number"
                            />}
                          />
                          <Input type="number" size="md"
                          placeholder="Idade"
                          onChange={getAge}
                          value={age}  />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdCarRepair color="gray.800"/>}
                          />
                          <Input type="text" size="md" 
                           placeholder="Profissao"
                           onChange={getProf}
                           value={prof}
                           />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Texto da Candidatura</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300"
                          }}
                          
                          type="text"
                          placeholder="Escreva aqui"
                          onChange={getText}
                          value={text}/>
                      </FormControl>

                     <Select  id="country" name="country" onChange={getCountry} value={country}>
                          <option>Escolhe o seu pais</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AX">Aland Islands</option>
                          <option value="IR">Irlanda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AS">American Samoa</option>
                     </Select>
                     <FormControl id="name" float="right">
                        <Button
                        onClick={applyToTrip}
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Enviar
                        </Button>
                        <Button onClick={() => goBackAdmin(navigate)}>Voltar</Button>
                      </FormControl>
                     
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    <Footer/>
   </div>
   
  );
};