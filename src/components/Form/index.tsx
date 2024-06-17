// FormControl.tsx
import { FC, useState } from "react";
import InputControl from "../InputControl";
import { Grid } from "@mui/material";
import { FormProps } from "../../utils/types";

const FormControl: FC<FormProps> = ({ formValue, setFormValue, error }) => {
  console.log(formValue);

  return (
    <>
      <Grid container sx={{ justifyContent: "center", mt: 2 }} spacing={2}>
        <Grid item>
          <InputControl
            value={formValue.first_name}
            name={"First Name"}
            label={"First Name"}
            type={"text"}
            onChange={(value) =>
              setFormValue({ ...formValue, first_name: value })
            }
            required
            error={error}
          />
        </Grid>
        <Grid item>
          <InputControl
            value={formValue.last_name}
            name={"Last Name"}
            label={"Last Name"}
            type={"text"}
            onChange={(value) =>
              setFormValue({ ...formValue, last_name: value })
            }
            required
            error={error}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", mt: 2 }} spacing={2}>
        <Grid item>
          <InputControl
            value={formValue.middle_name}
            name={"Middle Name"}
            label={"Middle Name"}
            type={"text"}
            onChange={(value) =>
              setFormValue({ ...formValue, middle_name: value })
            }
            required
            error={error}
          />
        </Grid>
        <Grid item>
          <InputControl
            value={formValue.phone_number}
            name={"Phone Number"}
            label={"Phone Number"}
            type={"text"}
            onChange={(value) =>
              setFormValue({ ...formValue, phone_number: value })
            }
            required
            error={error}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "center", mt: 1 }} spacing={2}>
        <Grid item width={"420px"}>
          <InputControl
            value={formValue.email}
            name={"Email"}
            label={"Email"}
            onChange={(value) => setFormValue({ ...formValue, email: value })}
            type={"text"}
            required
            error={error}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", mt: 0.5 }} spacing={2}>
        <Grid item width={"420px"}>
          <InputControl
            value={formValue.password}
            name={"Password"}
            label={"Password"}
            type={"text"}
            onChange={(value) =>
              setFormValue({ ...formValue, password: value })
            }
            required
            error={error}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormControl;
