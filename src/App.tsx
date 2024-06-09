import { useState } from "react";
import {
  Button,
  OverlayDrawer,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerBody,
  FluentProvider,
  webDarkTheme
} from "@fluentui/react-components";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FluentProvider theme={webDarkTheme}>
      <div>
        <OverlayDrawer
          open={isOpen}
          onOpenChange={(_, { open }) => setIsOpen(open)}
        >
          <DrawerHeader>
            <DrawerHeaderTitle>
              Overlay Drawer
            </DrawerHeaderTitle>
          </DrawerHeader>

          <DrawerBody>
            <p>Drawer content</p>
          </DrawerBody>
        </OverlayDrawer>

        <Button appearance="primary" onClick={() => setIsOpen(true)}>
          Open Drawer
        </Button>
      </div>
    </FluentProvider>
  );
}