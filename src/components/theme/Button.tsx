// export enum ButtonVariantsEnum {
//   Primary = "primary",
//   Secondary = "secondary",
// }
// type Props = {
//   variant: `${ButtonVariantsEnum}`;
//   children: string;
//   action: () => void;
// };
// const Button = ({ action, children, variant }: Props) => {
//   const getButtonStyle = (): React.CSSProperties => {
//     switch (variant) {
//       case ButtonVariantsEnum.Primary:
//       default:
//         return {
//           backgroundColor: "pink",
//         };
//       case ButtonVariantsEnum.Secondary:
//         return {
//           backgroundColor: "red",
//         };
//     }
//   };
//   return (
//     <button style={getButtonStyle()} onClick={action}>
//       {children}
//     </button>
//   );
// };

// export default Button;
