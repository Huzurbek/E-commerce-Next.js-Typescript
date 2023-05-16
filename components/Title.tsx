import { Typography, Divider, Box } from "@mui/material";

interface ITitle {
  text: string;
}
const Title: React.FC<ITitle> = ({ text }) => {
  return (
    <Box sx={{ mt: { xs: 2, sm: 4, md: 7 } }}>
      <Typography
        variant="body2"
        sx={{ fontWeight: 400, fontSize: "30px", lineHeight: "35px" }}
      >
        {text}
      </Typography>
      <Divider sx={{ mb: 3, mt: 1 }} />
    </Box>
  );
};
export default Title;
