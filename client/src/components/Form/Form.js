import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, } from "formik-material-ui";
import {useDispatch} from 'react-redux'
import { createManager,updateManager } from "../../actions/managers";

import {useSelector} from 'react-redux'
import { useState,useEffect } from "react";


const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));
//field state values


//Data
const initialValues = {
  firstName: "",
  lastName: "",
  occupation: "",
  address1: "",
  address2: "",
  email: "",
  password: "",
  phone:"",
  website:"",
};

const options = [
  { label: "Sponsor", value: "Sponsor" },
  { label: "Organizer", value: "Organizer" },
];

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
    occupation: Yup.string().required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
});

const UserForm = ({currentId,setCurrentId}) => {
  const [initialValues,setInitialValues] = useState({firstName: "",
    lastName: "",
    occupation: "",
    address1: "",
    address2: "",
    email: "",
    password: "",
    phone:"",
    website:"",});
const manager = useSelector(state => currentId?state.managers.find((manager)=>manager._id===currentId):null)


const dispatch = useDispatch()


  const classes = useStyle();
  useEffect(() => {if(manager)setInitialValues(manager)} ,[manager])

  const onSubmit = async(values) => {
    
    if(currentId === 0) {
      dispatch(createManager(values));
    } else {
      dispatch(updateManager(currentId, values));
    }

    
  };

  return (
    <>
    <Grid container spacing={4} justifyContent="center">
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="Sponsor"></CardHeader>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              dirty,
              isValid,
              values,
              handleChange,
              handleBlur,
              resetForm,
            }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Occupation
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Occupation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation"
                          >
                            <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Address1"
                          variant="outlined"
                          fullWidth
                          name="address1"
                          value={values.address1}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Address 2"
                          variant="outlined"
                          fullWidth
                          name="address2"
                          value={values.address2}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          type="password"
                          component={TextField}
                        />
                        
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          name="phone"
                          value={values.phone}
                          type="number"
                          component={TextField}
                        />
                        
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Website"
                          variant="outlined"
                          fullWidth
                          name="website"
                          value={values.website}
                          type="website"
                          component={TextField}
                        />
                        
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}
                    >
                      REGISTER
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}
                      onClick={resetForm}
                    >
                      Clear
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>

   </> 
  );


};

export default UserForm;
