import * as styles from './option-item.css';

interface OptionItemProps {
  option: number;
  isSelected: boolean;
  onSelect: (option: number) => void;
}

const OptionItem = ({ option, isSelected, onSelect }: OptionItemProps) => {
  const handleClick = () => {
    onSelect(option);
  };

  return (
    <li
      className={isSelected ? styles.dropdownItemSelected : styles.dropdownItem}
      data-selected={isSelected}
      onClick={handleClick}
    >
      {option}
    </li>
  );
};

export default OptionItem;
