import { Typography, Divider } from "@mui/material";

interface ITitle {
  text: string;
}
const Title: React.FC<ITitle> = ({ text }) => {
  return (
    <>
      <Typography
        variant="body2"
        sx={{ fontWeight: 400, fontSize: "30px", lineHeight: "35px" }}
      >
        {text}
      </Typography>
      <Divider sx={{ mb: 3, mt: 1 }} />
    </>
  );
};
export default Title;
