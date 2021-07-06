import { Button, makeStyles } from "@material-ui/core";

function BaseBtn(props: any) {
  const {
    onClick,
    parentclass,
    hoverColor = "#3aa76d",
    width = "8rem",
    marginTop = "1rem",
    borderRadius = 13,
    backgroundColor = "#3aa76d",
    label,
    color = "#fff",
    type = "submit",
    fontWeight,
  } = props;

  const useStyles = makeStyles({
    Button: {
      borderRadius,
      marginTop,
      backgroundColor,
      width,
      fontWeight,
      color,
      "&:hover": {
        backgroundColor: hoverColor,
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={parentclass}>
      <Button type={type} onClick={onClick} className={classes.Button}>
        {label}
      </Button>
    </div>
  );
}

export default BaseBtn;
