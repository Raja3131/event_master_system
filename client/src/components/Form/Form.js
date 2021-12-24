import React from "react"
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
} from "@material-ui/core"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import {createManager,updateManager} from "../../actions/managers"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {useState} from "react"
const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

//Data


const options = [
  { label: "Sponsor", value: "sponsor" },
  { label: "Organizer", value: "organizer" },
]

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/


//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(lowercaseRegEx, "Must contain at least one lowercase letter")
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
  phone: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("This field is Required"),
      website: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),
})


const UserForm = ({currentId,setCurrentId}) => {
 
  const [initialValues, setInitialValues] = useState({  firstName: "",
  lastName: "",
  occupation: "",
  address1: "",
  address2: "",
  email: "",
  password: "",
  phone: "",
  website: "",})

  const classes = useStyle()
  const manager = useSelector((state) => (currentId ? state.managers.find((manager) => manager._id === currentId) : null));
const dispatch = useDispatch()

useEffect(() => {
if(manager) setInitialValues(manager)
},[manager])


const onSubmit = (initialValues) => {
  if(currentId===null){
    dispatch(createManager(initialValues))

    
    
  }
    else{
    dispatch(updateManager(currentId,initialValues))

    }
    
    
 
  
  
  }

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="REGISTER FORM"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={onSubmit}>
              
            {({ dirty, isValid, values, handleChange, handleBlur,resetForm }) => {
              return (
                <Form >
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
                          onChange={handleChange}
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
                          onChange={handleChange}

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
                          label="Address 1"
                          variant="outlined"
                          fullWidth
                          name="address1"
                          value={values.address1}
                          component={TextField}
                          onChange={handleChange}
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
                          onChange={handleChange}

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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserForm
