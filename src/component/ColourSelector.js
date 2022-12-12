import React from 'react';

const ColourSelector = (props) => {
  const { config, fup } = props
  const { background ,label,classname} = config;
  return (
    <>
     
     <button className={classname} onClick={() => fup({background: background})}>
      {label}
    </button></>
   
  )
}
export default ColourSelector;
