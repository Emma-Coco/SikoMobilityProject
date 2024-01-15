import React, { useState } from 'react';
import Switch from 'react-switch';

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <label>
        <Switch
          onChange={handleChange}
          checked={isChecked}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#86d3ff"
          offColor="#888"
        />
      </label>
      <div>
        {isChecked ? (
          <p>Vous avez sélectionné : Oui</p>
        ) : (
          <p>Vous avez sélectionné : Non</p>
        )}
      </div>
    </div>
  );
};

export default SwitchButton;
