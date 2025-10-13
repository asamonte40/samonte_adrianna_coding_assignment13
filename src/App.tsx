import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Label from "./components/Label";
import Text from "./components/Text";
import Dropdown from "./components/Dropdown";
import RadioButton from "./components/RadioButton";
import Img from "./components/Img";
import HeroImage from "./components/HeroImage";
import Card from "./components/Card";
import Table from "./components/Table";
import TableHeader from "./components/Table/TableHeader";
import TableRow from "./components/Table/TableRow";
import TableCell from "./components/Table/TableCell";
import TableFooter from "./components/Table/TableFooter";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true); // disables the button after click
  };

  return (
    <div className="App">
      <section>
        <h3>Button Component</h3>
        <Button label="Click Me" disabled={isDisabled} onClick={handleClick}/>
      </section>

      <section>
        <h3>Label Component</h3>
        <Label/>
      </section>

      <section>
        <h3>Text Component</h3>
        <Text>TEXT</Text>
      </section>

      <section>
        <h3>Dropdown Component</h3>
        <label>Choose a colour:</label>
        <Dropdown options={["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]} />
      </section>

      <section>
        <h3>RadioButton Component</h3>
        <label>Choose your payment:</label>
        <RadioButton name="group"  options={["Visa", "PayPal", "Mastercard"]}/>
      </section>

      <section>
        <h3>Image Component</h3>
        <Img src="/yippeee.jpg" alt="bear" />
      </section>

      <section>
        <h3>HeroImage Component</h3>
        <HeroImage src="/mofusand.jpg" />
      </section>

      <section>
        <h3>Card Component</h3>
        <Card>
          <h3>City Night</h3>
          <p>The city never slept. Even through the thick cracks of the apartment window, you could hear its restless hum, distant car horns, muffled laughter from the street below, the whir of neon signs flickering on even before the sun had set. It was background music to their shared life, a soundscape you had grown used to, even comforted by.</p>
        </Card>
      </section>

      <section>
        <h3>Table Component</h3>
        <Table>
          <TableHeader>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Year</th>
            </tr>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Adrianna</TableCell>
              <TableCell>Yellow</TableCell>
              <TableCell>2005</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Andrea</TableCell>
              <TableCell>Orange</TableCell>
              <TableCell>2000</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <tr>
              <td colSpan={3}>Total: 2 members</td>
            </tr>
          </TableFooter>
        </Table>
      </section>
    </div>
  );
}

export default App;
