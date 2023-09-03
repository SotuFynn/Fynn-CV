import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Input,
  DrawerFooter,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Critique from "./Critique";

function Taetigkeiten() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen} style={{ marginTop: "50px" }}>
        Meine Tätigkeiten als IT Consultant kann man hier finden:
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Überwiegend:</DrawerHeader>

          <DrawerBody style={{ marginTop: "20px" }}>
            <UnorderedList spacing={10}>
              <ListItem>
                Organisation und Durchführung von Schulungen, Workshops und
                Projekten
              </ListItem>
              <ListItem>
                Kommunikationsschnittstelle zwischen Stakeholdern
              </ListItem>
              <ListItem>
                Umsetzung / Lösung von kundenspezifischen Anforderungen und
                Problemen
              </ListItem>
              <ListItem>
                Überprüfung und Erstellung von Dokumentationen zu Updates und
                Modulen
              </ListItem>
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Schließen
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Taetigkeiten;
