import TextError from "./textError";
import { Field, ErrorMessage } from "formik";
import { TextField, FormLabel, makeStyles } from "@material-ui/core";

function BaseField(props: any) {
  const {
    name,
    lable,
    type,
    topLabel,
    placeholder,
    variant,
    parentclass,
    background,
    width,
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      background,
      width,
    },
  }));

  const classes = useStyles();

  return (
    <div className={parentclass}>
      <FormLabel>{topLabel}</FormLabel>
      <Field name={name}>
        {(props: any) => {
          return (
            <div>
              <TextField
                fullWidth
                size="small"
                type={type}
                label={lable}
                className={classes.root}
                placeholder={placeholder}
                variant={variant ? variant : "outlined"}
                {...props.field}
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default BaseField;
