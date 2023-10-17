
import React, { useState } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
    Button
} from "reactstrap";

import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

const Addattendance = () => {
    const [currentDate, setCurrentDate] = useState(getDate());

    // const [value, setValue] = useState(dayjs('2022-04-17T15:30'));

    // const [getValue, setgetValue] = useState([{}])
    const [openModal, setOpenModal] = useState(false)

    const [form, setForm] = useState([{
        inTime: "",
        outTime: "",
        workNote: ""
    }])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setOpenModal(true)
    };

    const toggle = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    };

    // const dateObj = (e) => {
    //     e.preventDefault()
    //     const data = new Date();
    //     console.log(data);
    //     setgetValue(data)
    // }

    // const handleAdd = () => {
    //     setOpenModal(true)
    // }




    return (
        <>
            <div className='manage-leave'>
                <div>
                    <form>
                        {/* <div class="form-group  my-2">
                        <label for="exampleFormControlInput1">working Date</label>
                        <input type="date" class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div> */}
                        {/* <div class="form-group my-2">
                        <label for="exampleFormControlSelect1 "> Select Type</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>work</option>
                            <option>break</option>
                            <option>OverTime</option>
                        </select>
                    </div> */}

                        {/* <div class="form-group my-2">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> */}



                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                onChange={handleChange}
                            // onClick={handleAdd}
                            />
                            <label class="form-check-label" for="flexRadioDefault1">
                                work
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleChange} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                breack
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleChange} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Overtime
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <Modal isOpen={openModal}>
                <ModalHeader >Modal title</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="exampleText">Work Note</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>


                        <FormGroup>
                            <Input
                                type="date"
                                defaultValue={form.inTime}
                                name="intime"
                                onChange={handleChange}
                                placeholder="date"
                                onClick={currentDate}
                            ></Input>
                        </FormGroup>

                        {/* <button className='btn btn-outline-success mx-2' onClick={dateObj}> In Time</button> */}
                        {/* <button className='btn btn-outline-danger' onClick={dateObj}> Out Time</button> */}


                        {/* 
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                <DateTimePicker
                                    label="Uncontrolled picker"
                                    defaultValue={dayjs('2022-04-17T15:30')}
                                />
                                <DateTimePicker
                                    label="Controlled picker"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider> */}


                        <ModalFooter>
                            <div>
                                {/* {
                                    // <Button type="submit" color="success">
                                    //     {
                                    //     isEdit
                                    //      ? "Edit" : "Add"}{" "}
                                    // </Button>
                                } */}

                                <Button color='success'>Add</Button>
                            </div>

                            <Button
                                color="secondary"
                                onClick={() => {
                                    toggle();
                                }}
                            >
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>

        </>
    )
}

export default Addattendance