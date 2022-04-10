import React, { useEffect } from 'react';

import TextField from '@mui/material/TextField';
import './customers-modal.css';
import ModalWrap from '../modal/modal';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Button from '@mui/material/ButtonBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { contained, MenuProps, outlined } from '../../theme';
import { names } from '../../default';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
  customersEin: yup.string(),
  notes: yup.string(),
  primaryMethod: yup.string(),
});

function CustomerModal(props) {
  const { onClose, open, isEdit } = props;

  const { register, handleSubmit, errors, setValue, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      customersEin: '',
      name: '',
      notes: '',
      primaryMethod: '',
    },
  });

  useEffect(() => {
    if (isEdit) {
      reset({ name: 'My customer name' });
    } else {
      reset({ name: '' });
    }
  }, [isEdit]);

  const onSubmit = data => console.log(data);

  const handleChange = ({ event, id }) => {
    setValue(id, event.target.value);
  };

  return (
    <ModalWrap open={open} onClose={onClose}>
      <div className="section">
        <form onSubmit={handleSubmit(onSubmit)} className="column">
          <div className="wrap">
            <div className="box">
              <label className="label">
                Customer name <span className="red">*</span>
              </label>
              <TextField
                id="standard-basic"
                placeholder="Customer name"
                name="name"
                inputRef={register}
                helperText={errors.name ? errors.name.message : ''}
                error={Boolean(errors.name)}
                fullWidth
              />
            </div>

            <div className="box">
              <label className="label">Customers EIN</label>
              <TextField
                id="standard-basic"
                placeholder="Customers EIN"
                name="customersEin"
                inputRef={register}
                helperText={errors.customersEin ? errors.customersEin.message : ''}
                error={Boolean(errors.customersEin)}
                fullWidth
              />
            </div>

            <div className="box">
              <label className="label">Notes</label>
              <TextField
                id="standard-basic"
                placeholder="Notes visible only to you and your team"
                name="notes"
                inputRef={register}
                helperText={errors.notes ? errors.notes.message : ''}
                error={Boolean(errors.notes)}
                maxRows={4}
                multiline
                rows={4}
              />
            </div>

            <p className="sub-title">Payment and billing:</p>

            <div className="box">
              <label className="label">Primary payment method</label>

              <Select
                displayEmpty
                name="primaryMethod"
                inputRef={register('primaryMethod')}
                helperText={errors.primaryMethod ? errors.primaryMethod.message : ''}
                error={Boolean(errors.primaryMethod)}
                input={<OutlinedInput placeholder="Choose payment method" />}
                MenuProps={MenuProps}
                onChange={event => handleChange({ event, id: 'primaryMethod' })}
              >
                {names.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="container footer">
            <Button onClick={onClose} style={outlined}>
              Cancel
            </Button>
            <Button type="submit" style={contained}>
              Create
            </Button>
          </div>
        </form>
      </div>
    </ModalWrap>
  );
}

export default CustomerModal;
