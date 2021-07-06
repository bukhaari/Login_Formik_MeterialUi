import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import BaseField from "./../controles/BaseField";
import BaseBtn from "./../controles/BaseBtn";
import BaseText from "./../controles/BaseText";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    display: "flex",
    flexDirection: "row",
    marginTop: "200px",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonPrent: {
    display: "inline",
    margin: "2px",
  },
  button: {
    textAlign: "center",
  },
  field: {
    textAlign: "center",
  },
  titleLogin: {
    textAlign: "center",
  },
}));

interface CustomProposal {
  name: string;
  email: string;
  channel: string;
}

function YoutubeForm() {
  const classes = useStyles();

  const onSubmit = (values: Partial<CustomProposal>) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
  });

  const initialValues: any = {
    username: "",
    password: "",
  };

  return (
    <Container className={classes.pageContent}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BaseText
                label="LOGIN"
                align="center"
                color="#8281f8"
                fontSize="24px"
                fontWeight="bold"
              />
            </Grid>
            <Grid item xs={12}>
              <BaseField
                background="#e6e6e6"
                name="username"
                lable="Username"
                width="20rem"
                parentclass={classes.field}
              />
            </Grid>
            <Grid item xs={12}>
              <BaseField
                background="#e6e6e6"
                name="password"
                lable="Password"
                width="20rem"
                parentclass={classes.field}
              />
            </Grid>
            <Grid item xs={12}>
              <BaseBtn
                borderRadius="0"
                width="20rem"
                backgroundColor="#8281f8"
                hoverColor="#8281f8"
                parentclass={classes.button}
                label="LOGIN"
                fontWeight="bold"
              />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default YoutubeForm;
