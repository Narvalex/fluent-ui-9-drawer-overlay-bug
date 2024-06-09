import "./App.css";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";

function App() {
  return (
    <div className="App">
      Some text
      <br />
      <DefaultDialog />
    </div>
  );
}

export const DefaultDialog = () => {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      {/* if dialog's surface is extracted to a separate component is fails */}
      <DefaultDialogSurface />
    </Dialog>
  );
};

export const DefaultDialogSurface = () => {
  return (
    <DialogSurface>
      <DialogBody>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          exercitationem cumque repellendus eaque est dolor eius expedita nulla
          ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in
          natus iure cumque eaque?
        </DialogContent>
        <DialogActions>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary">Close</Button>
          </DialogTrigger>
          <Button appearance="primary">Do Something</Button>
        </DialogActions>
      </DialogBody>
    </DialogSurface>
  );
};

export default App;
