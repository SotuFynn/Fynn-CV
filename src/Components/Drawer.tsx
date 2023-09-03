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
} from "@chakra-ui/react";
import Critique from "./Critique";
import CritiqueJava from "./CritiqueJava";
import CritiqueReact from "./CritiqueReact";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Für Bescheinigungen hier klicken:
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Referenzen</DrawerHeader>

          <DrawerBody style={{ marginTop: "20px" }}>
            <a
              href="https://www.udemy.com/certificate/UC-62473137-d05a-49f4-8168-1049b7907c9b/"
              target="_blank"
            >
              <Button style={{ marginBottom: "20px" }}>
                Java-Kurs - Zugriff über Udemy
              </Button>
              <CritiqueJava></CritiqueJava>
            </a>

            <a
              href="https://drive.google.com/file/d/121by7Q1JRKKXa22VdtzW1WYqoZ4iH7TC/view"
              target="_blank"
            >
              <Button style={{ marginTop: "100px", marginBottom: "20px" }}>
                React-Kurs - Zugriff über Drive
              </Button>
            </a>
            <CritiqueReact></CritiqueReact>
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

export default DrawerExample;
