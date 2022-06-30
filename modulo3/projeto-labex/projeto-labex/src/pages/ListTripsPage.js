import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  goToForm } from "../routes/coordinator";
import { BASE_URL } from "../Constant/constants";
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function ListTripsPage() {
  const navigate = useNavigate();
  const [getTrip, setGetTrip] = useState([]);

  const getTrips = () => {
    axios
      .get(`${BASE_URL}trips`)
      .then((res) => {
        setGetTrip(res.data.trips);
      })
      .catch((err) => {
        alert(err.data);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);

  const render = getTrip.map((trip) => {
    return (
      <>
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
              <p key={trip.id}>{trip.planet}</p>
              <p key={trip.id}>{trip.date}</p>
              <p key={trip.id}> {trip.description}</p>
              <p key={trip.id}>{trip.durationInDays}</p>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </Center>
      </>
    );
  });

  return (
    <>
      <Header inscrever={() => goToForm(navigate)} />
      <Center borderWidth="1px" borderRadius="lg" boxShadow={"3xl"} padding={4}>
        <h1> Lista de Viagens</h1>
      </Center>
      {render}
      <Footer/>
    </>
  );
}
