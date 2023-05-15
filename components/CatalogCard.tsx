import {
  Box,
  List,
  ListItem,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { TCatalogList } from "@/types/catalog";

interface IProps {
  title: string;
  catalogList: TCatalogList[];
}
const CatalogCard: React.FC<IProps> = ({ title, catalogList }) => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          color: "#1E1E1E",
        }}
      >
        {title}
      </Typography>
      <List
        sx={{
          display: "block",
          "& li": {
            color: "#404040",
            pl: 0,
            py: 0.75,
          },
          "& li:last-child": {
            color: "#437FC8",
            fontWeight: 500,
            fontSize: "16px",
          },
        }}
      >
        {catalogList.map((el) => (
          <ListItem key={el.id}>{el.text}</ListItem>
        ))}
        <MuiLink component={NextLink} prefetch={false} href={"/about"}>
          <ListItem>
            Все товары <ArrowRightAltIcon />
          </ListItem>
        </MuiLink>
      </List>
    </Box>
  );
};

export default CatalogCard;
