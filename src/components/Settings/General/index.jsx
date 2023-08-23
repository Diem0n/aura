import { useState } from "react";
import { Switch } from "../../index";
const General = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <h1>General</h1>
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
        }}
        label={"Weather"}
      />
    </>
  );
};

export default General;
