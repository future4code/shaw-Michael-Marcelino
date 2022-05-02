import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { goBackAdmin} from "../routes/coordinator";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { BASE_URL } from "../Constant/constants";
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



export default function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")

  const getName = (event) => {
    setName(event.target.value);
  };
  const getPlanet= (event) => {
    setPlanet(event.target.value);
  };
  const getData = (event) => {
    setDate(event.target.value);
  };
  const getDescription = (event) => {
    setDescription(event.target.value);
  };
  const getDuration = (event) => {
    setDuration(event.target.value);
  };

 const token = localStorage.getItem('token')
  

  const createTrip =()=>{
  
    
    const body ={
        
            "name": name,
            "planet": planet,
            "date": date,
            "description": description,
            "durationInDays": duration
        
    }
    axios.post(`${BASE_URL}trips`,body, {headers:{
    auth: token  
  }},
  )
    .then((res)=>{
       alert("A viagem cadastrada com sucesso")
       setName("")
       setPlanet("")
       setDate("")
       setDescription("")
       setDuration("")
       


      console.log('deu certo',res.data)
        
    })
    .catch((err)=>{
        console.log('deu erro', err.response)
        
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
                      <Select id="planet" name="planet" onChange={getPlanet} value={planet}>
                              <option>Escolhe o planeta</option>
                              <option value="Mercurio">Mercurio</option>
                              <option value="Venus">Venus</option>
                              <option value="Terra">Terra</option>
                              <option value="Marte">Marte</option>
                              <option value="Jupiter">Jupiter</option>
                              <option value="Saturno">Saturno</option>
                              <option value="Urano">Urano</option>
                              <option value="Neptuno">Neptuno</option>
                              <option value="Plutao">Plutao</option>
                       
                        </Select>
                        <InputGroup  borderColor="#E0E1E7">
                          <InputLeftElement  
                            pointerEvents="none"
                            children={<BsPerson color="pink.800" />}
                          />
                          <Input  placeholder="Nome" type='text' onChange={getName} value={name}
                          size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="age">                      
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                             color="gray.800"
                            type="number"
                            
                          />
                          <Input  size="md"
                          type='date' onChange={getData} value={date}                         
                            />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdCarRepair color="gray.800"/>}
                          />
                          <Input  size="md"
                          placeholder="Duracao em dias" type='number' onChange={getDuration} value={duration}
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
                          placeholder="Descricao" type='text' onChange={getDescription} value={description}
                         />
                      </FormControl>
                     <FormControl id="name" float="right">
                        <Button
                       onClick={createTrip }
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Criar Viagem
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
  }