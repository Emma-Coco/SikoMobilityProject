import React, { useState } from 'react';
import Switch from 'react-switch';


const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  const handleTransform = isChecked ? 'translateX(84%)' : 'translateX(0%)';
  const translateLabel = isChecked ? '-135%' : '-440%';

  return (
    <div className="switch-container">
      <Switch
        onChange={handleChange}
        checked={isChecked}
        uncheckedIcon={false}
        checkedIcon={false}
        handleDiameter={40}
        height={40}
        width={218}
      />
      <div className="switch-label" style={{ translate: translateLabel }}>
      {isChecked ? 'Marchand' : 'Client'}
      </div>
      <style jsx>{`
        .react-switch-handle {
            transform: ${handleTransform} !important;
            height: 100%; 
            width: 60%; 
            background: rgb(255, 255, 255);
            display: inline-block;
            cursor: pointer;
            border-radius: 60px;
            position: absolute;
            top: 5px;
            outline: 0;
            border: 0;
            transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.15s ease;
            transform: translateX(0%);
            }
      `}</style>
    </div>
  );
};

export default SwitchButton;
