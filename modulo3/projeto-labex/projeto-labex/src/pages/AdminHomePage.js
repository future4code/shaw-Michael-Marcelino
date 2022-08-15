import React from "react";
import {useNavigate} from 'react-router-dom'
import { goBackHome, goToCreateTrip, goToLogout,  goDetails} from "../routes/coordinator";
import { useState, useEffect, }  from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { BASE_URL } from '../Constant/constants';
import {

  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  // useColorModeValue
} from "@chakra-ui/react";
// import HomePage from './HomePage';
import Header from '../Components/Header';


export default function AdminHomePage(props) {
  useProtectedPage()
  const navigate = useNavigate()

  const [getTrip, setGetTrip] = useState([])
    

  const getTrips =()=>{

      axios.get(`${BASE_URL}trips`)
      .then((res)=>{
        
          setGetTrip(res.data.trips)
       
      })
      .catch((err)=>{
          alert(err.data)
      })
  }
  useEffect(()=>{
      getTrips() 
  },[])

  useEffect(()=>{
     
  },[getTrip])
  const removeTrip = (id) => {

    const token= localStorage.getItem('token')
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nastia-b-shaw/trips/${id}`,{headers:{
      auth: token
  }})
    .then((res) => {
      console.log(res.data);
      alert("Apagou a viagem com sucesso!")

    }).catch((err) => {
        console.log(err.response);
    });
};


   
  const render = getTrip.map((trip)=>{
    return(
      <Center py={3} key={trip.id}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                "https://uploads.metropoles.com/wp-content/uploads/2020/09/09164747/Planeta1-1-1024x683.jpg"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
             {trip.name}
            </Heading>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200"
                }}
                onClick={() => goDetails(navigate)}
              >
                Detalhes
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500"
                }}
                _focus={{
                  bg: "blue.500"
                }}
                onClick={() => removeTrip(trip.id)}
              >
                Apagar
              </Button>
            </Stack>
          </Stack>
        </Stack>
    </Center>
      
    )
  })


    return (
      <div>
          <Header
          clicar={() => goBackHome(navigate)} 
          criar={() =>goToCreateTrip(navigate)}
          logout={() =>goToLogout(navigate)} 
          />
   
        {render}
        
       
      </div>
    );
  }