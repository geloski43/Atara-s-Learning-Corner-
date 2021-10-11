import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectForm = ({ classes, student, handlePdfChange, docs }) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">
        {`${student}'s`} Learning Corner
      </InputLabel>
      <Select
        onChange={handlePdfChange}
        native
        defaultValue=""
        id="grouped-native-select"
      >
        <option aria-label="None" value="" />
        <optgroup label="Health">
          {Object.values(docs)
            .slice(0, 7)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
        <optgroup label="Language">
          {Object.values(docs)
            .slice(7, 11)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
        <optgroup label="Math">
          {Object.values(docs)
            .slice(11, 23)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
        <optgroup label="Miscellaneous">
          {Object.values(docs)
            .slice(23, 68)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
        <optgroup label="Reading">
          {Object.values(docs)
            .slice(68, 72)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
        <optgroup label="Science">
          {Object.values(docs)
            .slice(72, 92)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
        <optgroup label="Writing">
          {Object.values(docs)
            .slice(92, 99)
            .map((v) => (
              <option key={v.id} value={v.id}>
                {v.text}
              </option>
            ))}
        </optgroup>
      </Select>
    </FormControl>
  );
};

export default SelectForm;
