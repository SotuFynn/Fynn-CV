import Message from "./Components/Message";
import "./App.css";
import DrawerExample from "./Components/Drawer";
import ButtonStack from "./Components/ButtonStack";
import { Container, Flex, Box, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import myImage from "./Components/ressources/Foto.png";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import ToggleMode from "./Components/Toggle";
import Taetigkeiten from "./Components/TaetigkeitenDrawer";

function App() {
  return (
    <div className="body">
      {/**
       */}
      <Flex
        className="maxHeight"
        id="flexbox"
        direction={"column"}
        align="center"
      >
        <Message />
        <ToggleMode></ToggleMode>
        <Flex
          style={{ marginLeft: "10%", marginTop: "10%" }}
          id="fotoBox"
          justify="flex-start"
          direction={"column"}
          align="left"
          className="maxAlles image"
        >
          <Box boxSize="20vw" flex="1">
            <img
              src={myImage}
              style={{ borderRadius: "25%", width: "100%", height: "100%" }}
            ></img>
          </Box>
        </Flex>

        <Flex
          style={{ marginTop: "-27%" }}
          id="flexBox3"
          direction={"column"}
          justify="top"
          align="center"
          className="mobileWerdegang"
        >
          <div style={{ marginRight: "-38%" }}>
            <DrawerExample />
            <div id="Werdegang" style={{ marginTop: "20px" }}>
              <UnorderedList spacing={10}>
                <ListItem>
                  Studentische Hilfskraft: Jade Hochschule, Okt. 2018 bis Juni
                  2019
                </ListItem>
                <ListItem>
                  Praktikum im Bereich Controlling Kommunale Datenverarbeitung
                  Oldenburg (KDO), Juli 2019 bis Dez. 2019
                </ListItem>
                <ListItem>
                  Werkstudent/ Prozessmanagement, IT/Vertrieb EWE VERTRIEB GmbH,
                  Jan. 2020 bis Mai 2021
                </ListItem>
                <ListItem>
                  IT Consultant Kommunale Datenverarbeitung Oldenburg (KDO),
                  Juni 2021 bis Heute
                </ListItem>
              </UnorderedList>
              <Taetigkeiten></Taetigkeiten>
            </div>
          </div>
        </Flex>
        <Flex
          className="maxHeight"
          id="flexBox2"
          justify="flex-end"
          direction={"column"}
        >
          <ButtonStack />
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
