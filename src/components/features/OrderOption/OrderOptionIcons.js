import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({
  values,
  currentValue,
  required,
  setOptionValue,
}) => (
  <div className={styles.icon}>
    {required ? (
      ''
    ) : (
      <div onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'} /> none
      </div>
    )}
    {values.map((value) => (
      <div
        className={currentValue === value.id ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  currentValue: PropTypes.node,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
