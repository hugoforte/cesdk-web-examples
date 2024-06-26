import classNames from 'classnames';
import AdjustmentsBar from '../AdjustmentsBar/AdjustmentsBar';
import classes from './ColorSelect.module.css';

const ALL_COLORS = [
  { r: 255, g: 255, b: 255 },
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 51, b: 51 },
  { r: 255, g: 211, b: 51 },
  { r: 0, g: 216, b: 164 },
  { r: 51, g: 95, b: 255 }
];

const normalizeColors = ({ r, g, b }) => ({
  r: r / 255,
  g: g / 255,
  b: b / 255
});

const PRECISION = 0.001;
const isColorEqual = (colorA, colorB) => {
  return (
    Math.abs(colorB.r - colorA.r) < PRECISION &&
    Math.abs(colorB.g - colorA.g) < PRECISION &&
    Math.abs(colorB.b - colorA.b) < PRECISION
  );
};
const RGBAArrayToObj = ([r, g, b, _a]) => ({ r, g, b });

const ColorSelect = ({ onClick, activeColor }) => {
  return (
    <AdjustmentsBar gap="md">
      {ALL_COLORS.map(({ r, g, b }) => (
        <button
          key={JSON.stringify({ r, g, b })}
          onClick={() => onClick(normalizeColors({ r, g, b }))}
          style={{ backgroundColor: `rgb(${r},${g},${b})` }}
          className={classNames(classes.colorButton, {
            [classes['colorButton--active']]: isColorEqual(
              normalizeColors({ r, g, b }),
              RGBAArrayToObj(activeColor ?? [0, 0, 0, 1])
            )
          })}
        ></button>
      ))}
    </AdjustmentsBar>
  );
};
export default ColorSelect;
