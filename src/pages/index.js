import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';

const MyComponent = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}


     {/* <FormGroup row className="my-4">
                        <Label for="exampleText">Start Date:</Label>
           <Input
                            type="date"
                            defaultValue={form.startDate}
                            name="startDate"
                            onChange={handleChange}

                        // onClick={currentDate}
                        ></Input>
                    </FormGroup>
                    <FormGroup row className="my-4">
                        <Label for="exampleText">End Date:</Label>
                        <Input
                            type="date"
                            defaultValue={form.endDate}
                            name="endTime"
                            onChange={handleChange}
                            placeholder="End Time"

                        // onClick={currentDate}
                        ></Input>
                    </FormGroup> */}



                    {/* <DatePicker
                        value={values}
                        onChange={setValues}
                        range
                    /> */}

                    {/* <FormGroup>
                            <DatePicker
                                selected={form.startDate}
                                onChange={(date) => handleChange("inTime", date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                            <Button onClick={handleStartButtonClick}>Start</Button>
                        </FormGroup> */}
                    {/* <div> */}
                    {/* <DatePicker
                                // selected={form.endDate}
                                onChange={(date) => handleChange("outTime", date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            /> */}

                    {/* <Button onClick={handleEndButtonClick}>End</Button> */}


                    {/* </div> */}



    />
  );
}

export default MyComponent;
