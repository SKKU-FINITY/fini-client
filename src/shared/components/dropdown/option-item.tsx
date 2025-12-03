import * as styles from './option-item.css';

interface Props {
  option: number;
  isSelected: boolean;
  variant: 'pink' | 'blue';
  onSelect: (value: number) => void;
}

const OptionItem = ({ option, isSelected, variant, onSelect }: Props) => {
  return (
    <li
      className={`${styles.dropdownItem({ color: variant })} ${
        isSelected ? (variant === 'pink' ? styles.selectedPink : styles.selectedBlue) : ''
      }`}
      data-selected={isSelected}
      onClick={() => onSelect(option)}
    >
      {option}
    </li>
  );
};

export default OptionItem;
