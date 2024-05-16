import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface ExampleProps {}

const DatePicker: React.FC<ExampleProps> = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
};

export default DatePicker;
