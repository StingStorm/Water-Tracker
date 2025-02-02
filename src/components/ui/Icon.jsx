const Icon = ({
  name,
  fill = 'transparent',
  stroke,
  width = 24,
  height = 24,
}) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`/public/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
