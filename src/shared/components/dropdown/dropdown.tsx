import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import OptionItem from './option-item';
import * as styles from './dropdown.css';

const OPTIONS = [1, 3, 6, 12, 24, 36];

const DEFAULT_PLACEHOLDER = '저축 희망 기간을 선택해주세요.';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleOptionClick = (option: number) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={!isOpen ? styles.dropdownContainer : styles.dropdownContainerOpen}
        onClick={handleToggleDropdown}
      >
        <div className={styles.dropdownPlaceholder}>{selected || DEFAULT_PLACEHOLDER}</div>
        <FontAwesomeIcon
          icon={isOpen ? faAngleUp : faAngleDown}
          className={styles.icon}
          size='2xl'
        />
      </div>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {OPTIONS.map((option) => (
            <OptionItem
              key={option}
              option={option}
              isSelected={option === selected}
              onSelect={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
