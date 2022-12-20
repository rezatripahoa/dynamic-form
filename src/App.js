import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

function App() {
  const [rowTable, setRowTable] = useState([
    {
      id: 1,
      name: "",
      gender: "",
      address: "",
      action: "",
    },
  ]);

  const onChangeHandle = (index, fieldName, value) => {
    let data = [...rowTable];
    data[index][fieldName] = value;
    setRowTable(data);
  };

  const handleAddRow = () => {
    const lastId = rowTable[rowTable.length - 1].id;
    const addRow = {
      id: lastId + 1,
      name: "",
      gender: "",
      address: "",
      action: "",
    };
    setRowTable([...rowTable, addRow]);
  };

  const onSubmit = () => {
    console.log("rowTable", JSON.stringify(rowTable));
  };

  return (
    <Container>
      {rowTable.map((val, i) => (
        <Card key={i} sx={{ my: 2 }}>
          <CardContent>
            <Stack spacing={3}>
              <TextField
                onChange={(e) => onChangeHandle(i, "name", e.target.value)}
                label="Nama"
                variant="outlined"
                value={val.name}
              />
              <FormControl>
                <InputLabel>Jenis Kelamin</InputLabel>
                <Select
                  value={val.gender}
                  label="Jenis Kelamin"
                  onChange={(e) => onChangeHandle(i, "gender", e.target.value)}
                >
                  <MenuItem value="" disabled>
                    = Pilih Jenis Kelamin =
                  </MenuItem>
                  <MenuItem value="P">Laki-Laki</MenuItem>
                  <MenuItem value="L">Perempuan</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Alamat Lengkap"
                variant="outlined"
                multiline
                maxRows={4}
                onChange={(e) => onChangeHandle(i, "address", e.target.value)}
                value={val.address}
              />
            </Stack>
          </CardContent>
        </Card>
      ))}
      <Stack alignItems={"flex-end"}>
        <Button variant="contained" sx={{ width: 100 }} onClick={handleAddRow}>
          +
        </Button>
      </Stack>

      <Stack sx={{ my: 4 }}>
        <Button variant="contained" color="info" onClick={onSubmit}>
          SUBMIT
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
