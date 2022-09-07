import {filter} from "../../../redux/phoneBookActions";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilter} from "../../../redux/phoneBookSelectors";
import Input from '../Input/Input'

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Input
      type="text"
      name="search"
      value={value}
      onChange={(event) => {
        dispatch(filter(event.target.value))}}
      required={false}
    />
  )
}

export default Filter
