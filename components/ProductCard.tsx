import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Typography } from "@mui/material";
import Label from "./Label";
import { TProduct } from "@/types/product";

interface IProductCard {
  product: TProduct;
}
const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { id, name, imgUrl, price, star, message } = product;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: 469,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          gap: 3,
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Label
          color="success"
          sx={{
            width: "fit-content",
          }}
        >
          Новинка
        </Label>
        <Label
          color="error"
          sx={{
            width: "fit-content",
          }}
        >
          -20%
        </Label>
        <Label
          color="primary"
          sx={{
            width: "fit-content",
          }}
        >
          Подарок
        </Label>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image
          src={`/assets/img/${imgUrl}`}
          width={295}
          height={302}
          alt="Picture of the author"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          px: 2,
          pb: 2,
          flex: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "1.25rem", fontWeight: "600" }}
        >
          {price}
          <span
            style={{
              fontSize: "1rem",
              textDecorationLine: "line-through",
              color: "#6E6E6E",
              marginLeft: "10px",
            }}
          >
            18000 ₽
          </span>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem", flex: 1 }}>
          {name}
        </Typography>
        <Box sx={{ my: 3, display: "flex", alignItems: "center" }}>
          {[1, 2, 3, 4, 5].map((el) => {
            if (el <= star) {
              return (
                <StarIcon
                  key={el}
                  sx={{
                    fontSize: "14px",
                    color: "#FFA800",
                  }}
                />
              );
            } else {
              return (
                <StarBorderIcon
                  key={el}
                  sx={{
                    fontSize: "14px",
                    color: "#FFA800",
                  }}
                />
              );
            }
          })}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#6E6E6E",
              ml: 1.25,
              "&::before": {
                content: '""',
                backgroundImage: "url(/assets/svg/message.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "20px",
                height: "15px",
                display: "block",
                marginRight: 0.5,
              },
            }}
          >
            {message}
          </Box>
        </Box>
        <Button
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
          variant="contained"
        >
          Купить
        </Button>
      </Box>
    </Box>
  );
};
export default ProductCard;
