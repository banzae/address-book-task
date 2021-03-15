import React, { ReactElement } from 'react'

interface DropDownProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectDefaultValue: string;
  options?: ReactElement[];
  error?: string;
}

function DropDown({ name, onChange, value, selectDefaultValue, options, error }: DropDownProps): ReactElement {
  return <div className="form-group"><select name={name} onChange={onChange} value={value}>
    <option value={selectDefaultValue} disabled={true}>{selectDefaultValue}</option>
    {options}
  </select>
    {error ? <small className='invalid'>{error}</small> : null}
  </div>
}

export default DropDown
