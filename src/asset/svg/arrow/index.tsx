type Props = {
  width?: number;
  height?: number;
};

export default function Arrow({ width = 32, height = 32 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.1582 16.5L20.5791 5.07907L22.0876 6.58756L12.1752 16.5L22.0876 26.4124L20.5791 27.9209L9.1582 16.5Z'
        fill='white'
      />
    </svg>
  );
}
